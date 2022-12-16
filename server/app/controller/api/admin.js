
const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');
const sd = require("silly-datetime");


//编辑器上传图片
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const _index = require('../../model/admin/index.sql');
const admin = require('../../model/admin/Admin.sql');
const level = require('../../model/admin/Level.sql');
const permission = require('../../config/permission');
const article = require('../../model/admin/Article.sql');
const slide = require('../../model/admin/slide.sql');
const all = require('../../model/admin/global.sql');
const ad = require('../../model/admin/ad.sql');
const link = require('../../model/admin/link.sql');
const ly = require('../../model/admin/ly.sql');
const category = require('../../model/admin/Nav.sql');
const user = require(`${config.user_model}reg.sql`);

const reg = require(`${config.user_model}reg.sql`);

const userMsg = require(`${config.user_model}msg.sql`); //删除会员 要删除会员阅读记录
const order = require('../../model/admin/order.sql');
const msg = require('../../model/admin/msg.sql');
const comment = require('../../model/admin/comment.sql');
const system = require('../../model/admin/system.sql');
const house = require('../../model/admin/m_house.sql');

let router = express.Router();

let api = {};

//编辑器保存上传的文件 http://www.wangeditor.com/
function saveFiles(req) {
    return new Promise((resolve, reject) => {
        const imgLinks = [];
        const form = new formidable.IncomingForm();
        //设置文件上传存放地址
        form.uploadDir = 'app/static/temp';
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function (err, fields, files) {
            if (err) {
                reject('formidable, form.parse err', err.stack)
            }
            // 存储图片的文件夹
            const storePath = path.resolve(__dirname, '../../static', 'upload');
            if (!fs.existsSync(storePath)) {
                fs.mkdirSync(storePath)
            }

            // 遍历所有上传来的图片
            mkapp.objForEach(files, (name, file) => {

                //使用第三方模块silly-datetime 
                const random = sd.format(new Date(),'YYYYMMDD-HH-mm-ss')+'_'+ parseInt(Math.random() * 8999 +10000)+'_';
               
                // 图片临时位置
                const tempFilePath = file.path;
                // 图片名称和路径
                const fileName = random + file.name;

                const fullFileName = path.join(storePath, fileName);
                // 将临时文件保存为正式文件

                fs.renameSync(tempFilePath, fullFileName);
                // 存储链接
                imgLinks.push('/static/upload/' + fileName)
            });

            // 返回结果
            resolve({
                errno: 0,
                data: imgLinks
            })
        })
    })
};





//内容附件上传
router.post("/upload/img", (req, res, next)=>{
    console.log(req.url)
   // 获取数据
   saveFiles(req).then((data)=>{
        console.log(data)
        res.json(data)
   });
});


/**
 * @description 后台首页接口
 */
router.get('/index',async(req,res,next)=>{
    try {
        console.log(req.signedCookies.aid)
        let info = await db(res,_index.adminInfo,[req.signedCookies.aid]);
        let adminNum = await db(res,_index.countAdminNum);
        let userNum = await db(res,_index.countUserNum);
        let articleNum = await db(res,_index.countArticleNum);
        let commentNum = await db(res,_index.countCommentNum);

        info[0].last_time = mkapp.time(info[0].last_time).default;
        api.data = null;
        api.data = {info,adminNum,userNum,articleNum,commentNum};
        res.json(api);
       
    } catch (error) {
        console.error(error);
    }  
});

/**
 * @description 站点信息
 */
router.get('/web/query',async(req,res,next)=>{
    try {
        let data =  await db(res,system.query);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.log(error);
    }
});

router.post('/web/update',async(req,res,next)=>{
   try {
        let body = req.body;
    
        let webname=body.webname;
        let keyword=body.keyword;
        let description=body.description;
        let weburl=body.weburl;
        let email=body.email;
        let copyright=body.copyright;
        let code=body.code;
        let id=body.id;
        let data;
        if(id ==''){
            data =  await db(res,system.add,[webname,keyword,description,weburl,email,copyright,code]);
        }else{
            data =  await db(res,system.update,[webname,keyword,description,weburl,email,copyright,code,id]);
        }
        res.json({"code":100,"success":true,"data":data});
   } catch (error) {
       console.error(error);
   }    
});


/**
 * @description 管理员
 */

// router.use((req,res,next)=>{
//     let perm = req.session.permission
//     if(perm &&perm.includes(',2')){
//         next();
//     }else{
//         res.send('对不起，您没有这个权限！')
//     }
// });

//管理员列表
router.get('/admin',async(req,res,next)=>{
    try {
        let count = await db(res,admin.count,[]);

        let pageNo = req.query.page || 1;
        let totalPage = Math.ceil(count[0].count / config.pagesize);
        if(pageNo<=0){
            pageNo = 1;
        }
        if(pageNo>totalPage){
            pageNo = totalPage;
        }
        let start = ((pageNo-1) * config.pagesize)<0?0:((pageNo-1) * config.pagesize);
    
        let adminList = await db(res,admin.query,[start,config.pagesize]);

        for(let i=0;i<adminList.length;i++){
            if(typeof adminList[i].last_time != 'string'){
                adminList[i].last_time = mkapp.time(adminList[i].last_time).default;
            }
        }
        api.data = {adminList,totalPage};
        
        res.json(api);
    } catch (error) {
        console.error(error);
    }  
});


//新增管理员
router.post('/add',async(req,res,next)=>{
   try {
        let admin_user = req.body.admin_user;
        let admin_pass =  mkapp.md5(req.body.admin_pass +  mkapp.MD5_SUFFIX);
        let _level = req.body.level;
        
        let data = await db(res,admin.add,[admin_user,admin_pass,_level]);
        api.data = data;
        res.json(api);
   } catch (error) {
        console.error(error)
   }
});

//判断管理员是否已经存在
router.get('/isrepeat',async(req,res,next)=>{
    try {
       let data = await db(res,admin.isrepeat,[req.query.admin_user]);
       api.data = data;
       res.json(api);
    } catch (error) {
        console.error(error)
    }
});

//管理员等级
router.get('/level',async(req,res,next)=>{
    try {
        let data = await db(res,level.query,[]);
        api.data = data;
        res.json(api);
    } catch (error) {
        console.error(error)
    }
});

//修改管理员
router.post('/edit',async(req,res,next)=>{
    try {
         let admin_pass = mkapp.md5(req.body.admin_pass +  mkapp.MD5_SUFFIX);
         let data = await  db(res,admin.update,[admin_pass,req.body.level,req.body.id])
         api.data = data;
         res.json(api);   
    } catch (error) {
         console.error(error)
    }
 });

//查找单个管理员
router.get('/queryById',async(req,res,next)=>{
    try {
        let id = req.query.id || req.signedCookies.aid;
        let data = await db(res,admin.queryOne,[id]);
        api.data = data;
        res.json(api);
    } catch (error) {
        console.error(error)
    }
});

//删除管理员
router.get('/del',async(req,res,next)=>{
    try {
         let data = await db(res,admin.del,[req.query.id])
         api.data = data;
         res.json(api);   
    } catch (error) {
         console.error(error)
    }
 });

 /**
  * @description 等级管理
  */
router.get('/level',async(req,res,next)=>{
    try {
        let _perm = await db(res,level.query,[])
        res.send({"code":100,"success":true,"data":_perm});
    } catch (error) {
        console.error(error);
    }
});

//等级新增
router.post('/level/add',async(req,res,next)=>{
    try {
        let body = req.body;
        let name = body.level_name;
        let info = body.level_info;
        let _perm = body.permission.join(',');
        let add = await db(res,level.add,[name,info,_perm]);
        res.send({"code":100,"success":true,"data":add});
    } catch (error) {
        console.log(error);
    }
});

    router.get('/level/isrepeat',async(req,res,next)=>{
        try {
            let data =  await db(res,level.isrepeat,[req.query.level_name]);
            res.send({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error)
        }
    });
    
    
    router.post('/level/edit',async(req,res,next)=>{
        try {
    
            let body = req.body;
            let name = body.level_name;
            let info = body.level_info;
    
            console.log(body.permission)
            let _perm = body.permission;
            if(Array.isArray(_perm)){
                _perm = body.permission.join(',');
            }else if(_perm == 'undefined'){
                _perm = '';
            }else{
                _perm= body.permission;
            }
    
    
           let id = body.id;
    
           let data = await db(res,level.update,[name,info,_perm,id]);
           res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.log(error);
        }
        
    });
     
    //查找等级
    router.get('/level/queryById',async(req,res,next)=>{
        try {
            let id = req.query.id || req.signedCookies.aid
            let data = await db(res,level.queryOne,[id]);
            res.send({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });
    
    //删除等级
    router.get('/level/del',async(req,res,next)=>{
      try {
        let data = await db(res,level.del,[req.query.id]);
        res.send({"code":100,"success":true,"data":data});
      } catch (error) {
          console.error(error)
      }
    });
    
    router.get('/level/isDel',async(req,res,next)=>{
       try {
        console.log(req.query)
        let data = await db(res,level.isDel,[req.query.id]);
        res.send({"code":100,"success":true,"data":data});
       } catch (error) {
           console.error(error)
       }
    });


    /**
     * @description 权限管理
     */
  
    router.get('/permission',async(req,res,next)=>{
        try {
            res.send({"code":100,"success":true,"data":permission});
        } catch (error) {
            console.error(error);
        }
    });

 
    /**
     * 栏目管理
     */
    router.get('/category',async(req,res,next)=>{
        try {
            let data = await db(res,category.queryAll,[req.query.id]);
            let filterData = mkapp.categoryTree(data);
            res.json({"code":100,"success":true,"data":filterData});
        } catch (error) {
            console.error(error)
        }
       
    });

    

    //新增
    router.post('/category/add',async(req,res,next)=>{
       try {
        let nav_name = req.body.nav_name;
        let nav_info = req.body.nav_info;
        let pid = req.body.pid;
        let sort = req.body.sort;
        let level = req.body.level;
        let type = 1;

        let data = await db(res,category.add,[nav_name,nav_info,pid,sort,level,type]);
        res.json({"code":100,"success":true,"data":data});
       } catch (error) {
           
       }
    });

    
    //检验栏目是否存在
    router.get('/category/isrepeat',async(req,res,next)=>{
        try {
            let data = await db(res,category.hasNav,[req.query.nav_name]);
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error)
        }
    });



    //查找单个栏目
    router.get('/category/queryById',async(req,res,next)=>{
        try {
            let data = await db(res,category.queryOne,[req.query.id]);
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.log(error);
        }
    });

  
    //修改
    router.post('/category/edit',async(req,res,next)=>{
      
        let nav_name =req.body.nav_name;
        let nav_info = req.body.nav_info;
        let pid = req.body.pid;
        let sort = req.body.sort;
        let level =  req.body.level;
        let id = req.body.id;

        let data = await db(res,category.update,[nav_name,nav_info,pid,sort,level,id]);
        res.json({"code":100,"success":true,"data":data});
    });

   
    //是否能删除
    router.get('/category/isDel',async(req,res,next)=>{
        try {
            let id = req.query.id;
            let hasSubNav = await db(res,category.hasSubNav,[id]);
            let hasArticle = await db(res,category.hasArticle,[id]);
            res.json({"code":100,"success":true,"data":hasSubNav,"dataArticle":hasArticle});
        } catch (error) {
            console.log(error);
        }
    });

    //删除
    router.get('/category/del',async(req,res,next)=>{
        try {
            let id = req.query.id;
            let data = await db(res,category.del,[id]);
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });


    //单页 新增
    router.post('/category/page-add',async(req,res,next)=>{
        try {
            let body = req.body;
            //nav
            let nav_name = body.nav_name;
            let nav_info = body.nav_info;
            let pid = body.pid;
            let sort = body.sort;
            let level = body.level;
            let type = 2;
            //content
            let title = body.title;
            let source = body.source;
            let author = body.author;
            let date = body.date;
            let content = body.content;
            
    
            let result = await db(res,category.nextId);
            let _id = result[0].Auto_increment;
       
            let data = await db(res,category.add,[nav_name,nav_info,pid,sort,level,type]);
            let cont = await db(res,category.pageAdd,[_id,title,source,author,content,date]);

            res.json({"code":100,"success":true,"data":data,"cont":cont});
    
        } catch (error) {
            console.error(error);
        }
    });

    //单页栏目 查找
    router.get('/category/queryPageById',async(req,res,next)=>{
        try {
            let data = await db(res,category.queryOne,[req.query.id]);
            let cont = await db(res,category.queryPageOne,[req.query.id]);
            for(let i=0;i<data.length;i++){
                if(typeof data[i].date != 'string'){
                    data[i].date = mkapp.time(data[i].date).default;
                }
            }
            res.json({"code":100,"success":true,"data":data,"cont":cont});
        } catch (error) {
            console.error(error);
        }  
    });

    //单页栏目编辑
    router.post('/category/page-edit',async(req,res,next)=>{
        try {
            let body = req.body;

            let nav_name =req.body.nav_name;
            let nav_info = req.body.nav_info;
            let pid = req.body.pid;
            let sort = req.body.sort;
            let level =  req.body.level;
            let id = req.body.id;

            //content
            let title = body.title;
            let source = body.source;
            let author = body.author;
            let date = body.date;
            let content = body.content;
    
            let data = await db(res,category.update,[nav_name,nav_info,pid,sort,level,id]);
            let cont = await db(res,category.updatePageNav,[content,title,source,author,date,id]);
            res.json({"code":100,"success":true,"data":data,"cont":cont});
    
        } catch (error) {
            console.error(error);
        }
    });

    //单页栏目删除
    router.get('/category/del-page',async(req,res,next)=>{
        try {
            let id = req.query.id;
            let data =  await db(res,category.del,[id]);
            let cont = await db(res,category.delPageNav,[id]);
            res.json({"code":100,"success":true,"data":data,"cont":cont});
        } catch (error) {
            console.error(error);
        }
    });
  


    /**
     * 内容管理
     */

     //获取全部文章条数
    router.get('/article/getAllCount',async(req,res,next)=>{
        try {
            let data = await db(res,all.countById,[])
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });

    //获取单个栏目文章条数
    router.get('/article/getCountByCategory',async(req,res,next)=>{
        try {
            let data =  await db(res,all.countSubNavById(req.query.nav),[]);
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });
    /**
     * 
     * @param {*} pageNo  第几页
     * @param {*} totalCount  总条数
     * @param {*} pagesize 一页几条
     * @description 返回总页数&limt start
     */
    function page(pageNo=1,totalCount,pagesize=10){
         let totalPage = Math.ceil(totalCount / pagesize);
         console.log(totalPage)
         if(pageNo<=0){
             pageNo = 1;
         }
         if(pageNo>totalPage){
            pageNo = totalPage;
         }
         let start = ((pageNo-1) * pagesize)<0?0:((pageNo-1) * pagesize);
         return {totalPage,start}
     }

    router.get('/article/queryArticleByCategoryId',async(req,res,next)=>{
        try {
            
            let count = req.query.count;//总条数
            let pageNo = req.query.pageNo;//当前页码
            let id = req.query.id;
            let pagesize = config.pagesize;//每页显示条数
            
            let pageInfo = page(pageNo,count,pagesize);

            let data = await db(res,all.queryArticleById(id),[pageInfo.start,pagesize]);
          
            
            for(let i=0;i<data.length;i++){
                if(typeof data[i].date != 'string'){
                    data[i].date = mkapp.time(data[i].date).default;
                }
            }

            res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage});
        } catch (error) {
            console.log(error);
        }
    });


    router.get('/article/queryArticle',async(req,res,next)=>{
        try {
            
            let count = req.query.count; //总条数
            let pageNo = req.query.pageNo;//当前页码
            let pagesize = config.pagesize;//每页显示条数
            console.log(count,pageNo,pagesize)
            let pageInfo = page(pageNo,count,pagesize);

            let data = await db(res,all.queryArticleAll,[pageInfo.start,pagesize]);
           
            for(let i=0;i<data.length;i++){
                if(typeof data[i].date != 'string'){
                    data[i].date = mkapp.time(data[i].date).default;
                }
            }
            res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage});
        } catch (error) {
            console.log(error);
        }
    });

    //上传缩略图
    router.post('/article/thumb',(req,res,next)=>{
        saveFiles(req).then((data)=>{
            console.log(data)
            api.data = {'imgUrl':data.data[0]}
            res.json(data)
        });
    });

    //使用模块 
    router.post("/article/upload", (req, res, next)=>{
        console.log(req.url)
        // 获取数据
        saveFiles(req).then((data)=>{
            console.log(data)
            res.json(data)
        });
    });



    //add
    router.post('/article/add',async(req,res,next)=>{
        try {
            let body = req.body;

            const title = body.title;
            const nav = body.nav;
            const attr= Array.isArray(body.attr)?body.attr.join(','):body.attr;
            const tag=body.tag;
            const keyword=body.keyword;
            const thumburl=body.thumburl;
            const source=body.source;
            const author = body.author;
            const info = body.info;
            const content = body.content;
            const comment = body.comment;
            const count = body.count;
            const sort = body.sort;
            const gold = body.gold;
            const readlimit = body.readlimit;
            const date = body.date;
            let data = await db(res,article.add,[title,nav,attr,tag,keyword,thumburl,source,author,info,content,comment,count,sort,gold,readlimit,date]);
    
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error)
        }
        
    });

    //修改
router.get('/article/queryId',async(req,res,next)=>{
    try {
        let data = await db(res,article.queryArticleById,req.query.id);
        console.log(data[0].nav)
        let level = await db(res,category.queryOne,[data[0].nav]);
        if(typeof data[0].date != 'string'){
            data[0].date = mkapp.time(data[0].date).default
        }
        res.json({"code":100,"success":true,"data":data,"level":level});
    } catch (error) {
        console.error(error);
    }
});


router.post('/article/edit',async(req,res,next)=>{
    try {
        let body = req.body;
        const title = body.title;
        const nav = body.nav;
        const attr= Array.isArray(body.attr)?body.attr.join(','):body.attr;
        const tag = body.tag;
        const keyword = body.keyword;
        const thumbnail = body.thumbnail;
        const source = body.source;
        const author = body.author;
        const info = body.info;
        const content = body.content;
        const comment = body.comment;
        const count = body.count;
        const sort = body.sort;
        const gold = body.gold;
        const readlimit = body.readlimit;
        const date = body.date;
        const id = body.id;
        console.log(req.body);
        let data = await db(res,article.update,[title,nav,attr,tag,keyword,thumbnail,source,author,info,content,comment,count,sort,gold,readlimit,date,id]);
        res.json({"code":100,"success":true,"data":data});
       
    } catch (error) {
      console.log(error)  
    }
    
   
});

//删除等级
router.post('/article/del',async(req,res,next)=>{
    try {
        let arr = [];
        let body = req.body;
        let id = body.id;

        /**
         * @param 获取文章的缩略图和内容图片路径
         * @param {*} id 
         */
        async function getImgsByArticleId(id){
            let img = await db(res,article.queryArticleImgById,id);
            if(img.length>0){
                if(img[0].thumbnail){
                    arr.push(img[0].thumbnail)
                }
                let contImgArr = mkapp.getImgUrlFromStr(img[0].content);
                for(let i=0;i<contImgArr.length;i++){
                    arr.push(contImgArr[i])
                }
            }
        }
        
        //获取批量文章缩略图和内容图片路径
        for(let i=0;i<id.length;i++){
            await getImgsByArticleId(id[i])
        }
       
        //过滤外链中的图片
        arr = arr.filter((item)=>{
            return item.includes('/static/upload')
        });

        //批量删除文章缩略图和文章图片
        if(arr.length>0){
            for(let i=0;i<arr.length;i++){
                delUploadImg(arr[i]);
            }
        } 
        
        //删除文章数据
        let data = await db(res,article.del(id));

        res.json({"code":100,"success":true,"data":data});

    }catch (error){
        console.error(error);
    }
});





/**
 * 轮播管理
 */
router.get('/slide/count',async(req,res,next)=>{
    try {
        let data  = await db(res,slide.count,[]);
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/slide/query',async(req,res,next)=>{
    try {
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
       
        //列表
        let data = await db(res,slide.query,[pageInfo.start,pagesize]);
       
        for(let i=0;i<data.length;i++){
            if(typeof data[i].date != 'string'){
                data[i].date = mkapp.time(data[i].date).default;
            }
        }
      
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
       
    } catch (error) {
        console.error(error);
    }
});


router.post('/slide/upload',(req,res,next)=>{
    saveFiles(req).then((data)=>{
        api.data = {'imgUrl':data.data[0]}
        console.log('img',api)
        res.json(data)
   });
});

router.post('/slide/add',async(req,res,next)=>{
    try {
        let body = req.body;
        let img = body.img;
        let url = body.url;
        let title = body.title;
        let info = body.info;
        let state = body.state;

        let data = await db(res,slide.add,[img,url,title,info,state]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/slide/queryById',async(req,res,next)=>{
    try{
        let data = await db(res,slide.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    }catch(error){
        console.error(error);
    };
});

router.post('/slide/update',async(req,res,next)=>{

    try {
        let body = req.body;
        let img = body.img;
        let url = body.url;
        let title = body.title;
        let info = body.info;
        let state = body.state;
        let id = body.id;
       
        let data = await db(res,slide.update,[img,url,title,info,state,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


/**
 * @description 删除上传的图片
 * @param {*} img 字符串
 */
function delUploadImg(img){
    let item = path.join(config.webroot,img);
    //判断文件是否存在
    fs.access(item,function(err){
        if(err){
            console.error(err);
        }else{
            fs.unlink(item,(err)=>{
                if(err){
                    console.error(err);
                }
            });
        }
    })
}

router.post('/slide/del',async(req,res,next)=>{
    try {
        let body = req.body;
        let id = body.id;
        let img = body.img;
      
        let data = await db(res,slide.del(id));
       
        //删除轮播图片
        if(Array.isArray(img)){
            for(let i=0;i<img.length;i++){
                delUploadImg(img[i])
            }
        }else{
            delUploadImg(img)
        }

       res.json({"code":100,"success":true,'data':data});
    } catch (error) {
        console.error(error);
    }
});

/**
 * 广告管理
 */
router.get('/ad/count',async(req,res,next)=>{
    try {
        let data  = await db(res,ad.count,[]);
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/ad/query',async(req,res,next)=>{
    try {
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
       
        //列表
        let data = await db(res,ad.query,[pageInfo.start,pagesize]);
       
        for(let i=0;i<data.length;i++){
            if(typeof data[i].date != 'string'){
                data[i].date = mkapp.time(data[i].date).default;
            }
        }
      
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
       
    } catch (error) {
        console.error(error);
    }
});


router.post('/ad/upload',(req,res,next)=>{
    saveFiles(req).then((data)=>{
        api.data = {'imgUrl':data.data[0]}
        console.log('img',api)
        res.json(data)
   });
});

router.post('/ad/add',async(req,res,next)=>{
    try {
        let body = req.body;
        
        let title = body.title;
        let url = body.url;
        let img = body.img;

        let type = body.type;
        let state = body.state;

        let data = await db(res,ad.add,[title,url,img,type,state]);

        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/ad/queryById',async(req,res,next)=>{
    try{
        let data = await db(res,ad.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    }catch(error){
        console.error(error);
    };
});

router.post('/ad/update',async(req,res,next)=>{

    try {
        let body = req.body;

        let title = body.title;
        let url = body.url;
        let img = body.img;
        let state = body.state;
        let type = body.type;
     
        let id = body.id;
       
        let data = await db(res,ad.update,[title,url,img,state,type,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


router.post('/ad/del',async(req,res,next)=>{
    try {
        let body = req.body;
        let id = body.id;
        let img = body.img;
      
        let data = await db(res,ad.del(id));
       
        //删除轮播图片
        if(Array.isArray(img)){
            for(let i=0;i<img.length;i++){
                img[i] && delUploadImg(img[i]);
            }
        }else{
            img && delUploadImg(img)
        }

       res.json({"code":100,"success":true,'data':data});

    } catch (error) {
        console.error(error);
    }
});

/**
 * 友情链接
 */
router.get('/link/count',async(req,res,next)=>{
    try {
        let data  = await db(res,link.count,[]);
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/link/query',async(req,res,next)=>{
    try {
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
       
        //列表
        let data = await db(res,link.query,[pageInfo.start,pagesize]);
       
        for(let i=0;i<data.length;i++){
            if(typeof data[i].date != 'string'){
                data[i].date = mkapp.time(data[i].date).default;
            }
        }
      
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
       
    } catch (error) {
        console.error(error);
    }
});


router.post('/link/upload',(req,res,next)=>{
    saveFiles(req).then((data)=>{
        api.data = {'imgUrl':data.data[0]}
        console.log('img',api)
        res.json(data)
   });
});

router.post('/link/add',async(req,res,next)=>{
    try {
        let body = req.body;

        let title = body.title;
        let url = body.url;
        let img = body.img;
        let info = body.info;
        let type = body.type;

        let data = await db(res,link.add,[title,url,img,info,type]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/link/queryById',async(req,res,next)=>{
    try{
        let data = await db(res,link.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    }catch(error){
        console.error(error);
    };
});

router.post('/link/update',async(req,res,next)=>{

    try {
        let body = req.body;

        let title = body.title;
        let url = body.url;
        let img = body.img;
        let info = body.info;
        let type = body.type;
     
        let id = body.id;
       
        let data = await db(res,link.update,[title,url,img,info,type,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


router.post('/link/del',async(req,res,next)=>{
    try {
        let body = req.body;
        let id = body.id;
        let img = body.img;
      
        let data = await db(res,link.del(id));
       
        //删除轮播图片
        if(Array.isArray(img)){
            for(let i=0;i<img.length;i++){
                img[i] && delUploadImg(img[i]);
            }
        }else{
            img && delUploadImg(img)
        }

       res.json({"code":100,"success":true,'data':data});

    } catch (error) {
        console.error(error);
    }
});



/**
 * 在线留言
 */
router.get('/ly/count',async(req,res,next)=>{
    try {
        let data  = await db(res,ly.count,[]);
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/ly/query',async(req,res,next)=>{
    try {
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
       
        //列表
        let data = await db(res,ly.query,[pageInfo.start,pagesize]);
       
        for(let i=0;i<data.length;i++){
            if(typeof data[i].date != 'string'){
                data[i].date = mkapp.time(data[i].date).default;
            }
        }
      
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
       
    } catch (error) {
        console.error(error);
    }
});


router.post('/ly/upload',(req,res,next)=>{
    saveFiles(req).then((data)=>{
        api.data = {'imgUrl':data.data[0]}
        console.log('img',api)
        res.json(data)
   });
});

router.post('/ly/add',async(req,res,next)=>{
    try {
        let body = req.body;

        let title = body.title;
        let url = body.url;
        let img = body.img;
        let info = body.info;
        let type = body.type;

        let data = await db(res,ly.add,[title,url,img,info,type]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/ly/queryById',async(req,res,next)=>{
    try{
        let data = await db(res,ly.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    }catch(error){
        console.error(error);
    };
});

router.post('/ly/update',async(req,res,next)=>{

    try {
        let body = req.body;

        let title = body.title;
        let url = body.url;
        let img = body.img;
        let info = body.info;
        let type = body.type;
     
        let id = body.id;
       
        let data = await db(res,ly.update,[title,url,img,info,type,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


router.post('/ly/del',async(req,res,next)=>{
    try {
        let body = req.body;
        let id = body.id;
        let img = body.img;
      
        let data = await db(res,ly.del(id));
       
        //删除轮播图片
        if(Array.isArray(img)){
            for(let i=0;i<img.length;i++){
                img[i] && delUploadImg(img[i]);
            }
        }else{
            img && delUploadImg(img)
        }

       res.json({"code":100,"success":true,'data':data});

    } catch (error) {
        console.error(error);
    }
});


/**
 * 会员模块
 */
router.get('/user/count',async(req,res,next)=>{
    try {
        let data  = await db(res,user.count,[]);
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/user/query',async(req,res,next)=>{
    try {
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
       
        //列表
        let data = await db(res,user.queryAll,[pageInfo.start,pagesize]);
        let arr = ['拉黑会员','初级会员','中级会员','高级会员','VIP会员']
        for(let i=0;i<data.length;i++){
            data[i].state = arr[data[i].state];
        }
      
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
       
    } catch (error) {
        console.error(error);
    }
});

router.post('/user/add',async(req, res, next)=>{
	try {
		let body = req.body;
		let _user = body.user;
		let pass =  mkapp.md5(body.pass +  mkapp.MD5_SUFFIX);
		let email = body.email;
        let tel = body.tel;
        let state = body.state;
        let water = body.water;

		let reUser = await db(res,user.repeatUser,[_user]);
		let reEmail = await db(res,user.repeatEmail,[email]);
		let reTel = await db(res,user.repeatTel,[tel]);

		if(reUser.length != 0){
            res.json({"code":101,"success":false,"msg":'用户名已存在!'});
			return;
		}

		if(reEmail.length != 0){
            res.json({"code":101,"success":false,"msg":'邮箱已被注册!'});
			
			return;
		}
		if(reTel.length != 0){
            res.json({"code":101,"success":false,"msg":'手机号被注册！'});
			return;
        }
        
        let data = await db(res,user.supAdd,[_user,pass,tel,email,state,water]);
        
        res.json({"code":100,"success":true,"data":data});

	} catch (error) {
		console.error(error);
	}
});

router.get('/user/queryId',async(req,res,next)=>{
    try {
        let data = await db(res,user.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


router.post('/user/edit',async(req,res,next)=>{
    try{
    let body = req.body;
   
    let pass = body.pass==''?body.oldpass:mkapp.md5(body.pass +  mkapp.MD5_SUFFIX);
    let tel =  body.tel;
    let email = body.email;
    
    let water = body.water;
    let state = body.state;
    let id = body.id;
   
   
    let data = await db(res,user.update,[pass,tel,email,water,state,id]);
    res.json({"code":100,"success":true,"data":data});
       
    } catch (error) {
        console.error(error);
    }

});

//删除会员
router.post('/user/del',async(req,res,next)=>{
    try {
        let id = req.body.id;
        //通过会员id获取会员用户名
       
        async function delUserRelative(id){
            let username = await db(res,user.queryUserById,[id]);
            if(username.length>0){
                 //删除会员订单
                await db(res,order.delByUserName,[username[0].user]);
                //删除会员评论 
                await db(res,comment.delByUser,[username[0].user]);
            }
            //删除会员站内消息阅读
            await db(res,userMsg.delReadMsg,[id]);
        }
       
       for(let i=0;i<id.length;i++){
         await delUserRelative(id[i]);
       }
         
        //删除会员
        let data = await db(res,user.del(id));

        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


/**
 * 订单模块
 */
router.get('/order/count',async(req,res,next)=>{
    try {
        let data = await db(res,order.count); 
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/order/query',async(req,res,next)=>{
    try{
        
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
    
        let data = await db(res,order.query,[pageInfo.start,pagesize]);
    
        for(let i=0;i<data.length;i++){
            if(typeof data[i].time != 'string'){
                data[i].time = mkapp.time(data[i].time).default;
            }
        }
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
    } catch (error) {
        console.log(error);
    }

});

router.post('/order/add',async(req,res,next)=>{
    
    try {
        let body = req.body;

        let username = body.username;
        let product_name = body.product_name;
        let capacity = body.capacity;
        let product_price = body.product_price;
        let buy_number = body.buy_number;
        let time = body.time;
        let ps_person = body.ps_person;
        let ps_tel = body.ps_tel;
        let score = body.score;

        let reUser = await db(res,user.repeatUser,[username]);
		
		if(reUser.length == 0){
            res.json({"code":101,"success":false,"msg":'会员不存在！'});
            return;
		}
        
        let data = await db(res,order.add,[username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/order/queryId',async(req,res,next)=>{
    try {
        let data = await db(res,order.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});


router.post('/order/update',async(req,res,next)=>{
    try {
        let body = req.body;
        
        let username = body.username;
        let product_name = body.product_name;
        let capacity = body.capacity;
        let product_price = body.product_price;
        let buy_number = body.buy_number;
        let time = body.time;
        let ps_person = body.ps_person;
        let ps_tel = body.ps_tel;
        let score = body.score;
     
        let id = body.id;
      
        let data = await db(res,order.update,[product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

//删除订单
router.post('/order/del',async(req,res,next)=>{
    try {
        let id = req.body.id;
        let data = await db(res,order.del(id));
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

/**
 * 评论管理
 */
router.get('/comment/count',async(req,res,next)=>{
    try {
        let data = await db(res,comment.count); 
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/comment/query',async(req,res,next)=>{
    try{

        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);

		//评论列表
		let data = await db(res,comment.query,[pageInfo.start,config.pagesize]);
		for(let i=0;i<data.length;i++){
			data[i].date = mkapp.time(data[i].date).default;
		}
		
        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage});
        
	}catch(error){
		console.error(error);
	}		
});

//通过
router.get('/comment/stateSure',async(req,res,next)=>{
    try {
     let id = req.query.id;
     let data = await db(res,comment.stateSure,[id]);
     res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.log(error);
    }
 });
 
 //不通过
 router.get('/comment/stateCancel',async(req,res,next)=>{
     try {
      let id = req.query.id;
      let data = await db(res,comment.stateCancel,[id]);
      res.json({"code":100,"success":true,"data":data});
     } catch (error) {
         console.log(error);
     }
  });
 
  //批量审核
  router.post('/comment/updateStates',async(req,res,next)=>{
     try {
         let id = req.body.ids;
         if(req.body.state == 1){
             for(let i=0;i<id.length;i++){
                 await db(res,comment.stateSure,[id[i]]);
             }
         }
 
         if(req.body.state == 0){
             for(let i=0;i<id.length;i++){
                 await db(res,comment.stateCancel,[id[i]]);
             }
         }
 
         res.json({"code":100,"success":true,"data":"操作完成"});
     } catch (error) {
         console.log(error);
     }
  });
 
 //删除
 router.post('/comment/del',async(req,res,next)=>{
     try{
         let id = req.body.id;
         let data = await db(res,comment.del(id));
         res.json({"code":100,"success":true,"data":data});
     }catch(error){
         console.error(error);
     }
    
 });



/**
 * 站内消息
 */
router.get('/msg/count',async(req,res,next)=>{
    try {
        let data = await db(res,msg.count); 
        res.json({"code":100,"success":true,"data":data});
    }catch (error){
        console.error(error);
    }
});

router.get('/msg/query',async(req,res,next)=>{
    try{
       
        let count = req.query.count;//总条数
        let pageNo = req.query.pageNo;//当前页码
        let pagesize = config.pagesize;//每页显示条数

        let pageInfo = page(pageNo,count,pagesize);
    
        let data = await db(res,msg.queryMsg,[pageInfo.start,pagesize]);
        for(let i=0;i<data.length;i++){
            if(typeof data[i].date != 'string'){
                data[i].date = mkapp.time(data[i].date).default;
            }
        }

        res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage})
    } catch (error) {
        console.log(error);
    }

});

router.post('/msg/add',async(req,res,next)=>{
    try {
        let body = req.body;
        let title = body.title;
        let content = body.content;
        let data = await db(res,msg.add,[title,content]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.get('/msg/queryId',async(req,res,next)=>{
    try {
        let data = await db(res,msg.queryOne,[req.query.id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.post('/msg/edit',async(req,res,next)=>{
    try {
        let body = req.body;
        let title = body.title;
        let content = body.content;
        let id = body.id;
     
        let data = await db(res,msg.update,[title,content,id]);
        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error);
    }
});

router.post('/msg/del',async(req,res,next)=>{
    try {
        let id = req.body.id;
        let data = await db(res,msg.del(id));
        let cont = await db(res,msg.delRead(id));

        res.json({"code":100,"success":true,"data":data,'cont':cont});
    } catch (error) {
        console.error(error);
    }
});

//------------------------------------->new add house

     //获取全部文章条数
     router.get('/house/getAllCount',async(req,res,next)=>{
        try {
            let data = await db(res,house.countById,[])
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });

    //获取单个栏目文章条数
    router.get('/house/getCountByCategory',async(req,res,next)=>{
        try {
            let data =  await db(res,house.countSubNavById(req.query.nav),[]);
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error);
        }
    });
  
    router.get('/house/queryArticleByCategoryId',async(req,res,next)=>{
        try {
            
            let count = req.query.count;//总条数
            let pageNo = req.query.pageNo;//当前页码
            let id = req.query.id;
            let pagesize = config.pagesize;//每页显示条数
            
            let pageInfo = page(pageNo,count,pagesize);

            let data = await db(res,house.queryHouseById(id),[pageInfo.start,pagesize]);
          
            
            for(let i=0;i<data.length;i++){
                if(typeof data[i].date != 'string'){
                    data[i].date = mkapp.time(data[i].date).default;
                }
            }

            res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage});
        } catch (error) {
            console.log(error);
        }
    });


    router.get('/house/queryArticle',async(req,res,next)=>{
        try {
            
            let count = req.query.count; //总条数
            let pageNo = req.query.pageNo;//当前页码
            let pagesize = config.pagesize;//每页显示条数
            console.log(count,pageNo,pagesize)
            let pageInfo = page(pageNo,count,pagesize);

            let data = await db(res,house.queryArticleAll,[pageInfo.start,pagesize]);
           
            for(let i=0;i<data.length;i++){
                if(typeof data[i].date != 'string'){
                    console.log()
                    data[i].date = mkapp.time(data[i].date).default;
                }
            }
            res.json({"code":100,"success":true,"data":data,'totalPage':pageInfo.totalPage});
        } catch (error) {
            console.log(error);
        }
    });

    //上传缩略图
    router.post('/house/thumb',(req,res,next)=>{
        saveFiles(req).then((data)=>{
            console.log(data)
            api.data = {'imgUrl':data.data[0]}
            res.json(data)
        });
    });

    //使用模块 
    router.post("/house/upload", (req, res, next)=>{
        console.log(req.url)
        // 获取数据
        saveFiles(req).then((data)=>{
            console.log(data)
            res.json(data)
        });
    });



    //add
    router.post('/house/add',async(req,res,next)=>{
        try {
            let body = req.body;
            
            const title = body.title;
            const nav = body.nav;
            const attr= Array.isArray(body.attr)?body.attr.join(','):body.attr;
            const tag=body.tag;
            const keyword=body.keyword;
            const thumburl=body.thumburl;
            const source=body.source;
            const author = body.author;
            const info = body.info;
            const content = body.content;
            const comment = body.comment;
            const count = body.count;
            const sort = body.sort;
            const gold = body.gold;
            const readlimit = body.readlimit;
            const date = body.date;

            const type = body.type;
            const price = body.price;
            const huxing = body.huxing;
            const mianji = body.mianji;
            const chaoxiang = body.chaoxiang;
            const fengge = body.fengge;
            const xuexiao = body.xuexiao;
            const quyu = body.quyu;
            const addr = body.addr;

            const chuwei = body.chuwei;
            const kaipan_time = body.kaipan_time;
            const zhengjian = body.zhengjian;
            const jiaotong = body.jiaotong;
            const cur_louceng = body.cur_louceng;
            const total_louceng = body.total_louceng;
            const zhuangtai = body.zhuangtai;
           
            let data = await db(res,house.add,[title,nav,attr,tag,keyword,thumburl,source,author,info,content,comment,count,sort,gold,readlimit,date,type,price,huxing,mianji,chaoxiang,fengge,xuexiao,quyu,addr,chuwei,kaipan_time,zhengjian,jiaotong,cur_louceng,total_louceng,zhuangtai]);
    
            res.json({"code":100,"success":true,"data":data});
        } catch (error) {
            console.error(error)
        }
        
    });

    //修改
router.get('/house/queryId',async(req,res,next)=>{
    try {
        let data = await db(res,house.queryArticleById,req.query.id);
        let level = await db(res,category.queryOne,[data[0].nav]);
        if(typeof data[0].date != 'string'){
            data[0].date = mkapp.time(data[0].date).default
        }
        res.json({"code":100,"success":true,"data":data,"level":level});
    } catch (error) {
        console.error(error);
    }
});


router.post('/house/edit',async(req,res,next)=>{
    try {
        let body = req.body;
        const title = body.title;
        const nav = body.nav;
        const attr= Array.isArray(body.attr)?body.attr.join(','):body.attr;
        const tag = body.tag;
        const keyword = body.keyword;
        const thumbnail = body.thumbnail;
        const source = body.source;
        const author = body.author;
        const info = body.info;
        const content = body.content;
        const comment = body.comment;
        const count = body.count;
        const sort = body.sort;
        const gold = body.gold;
        const readlimit = body.readlimit;
        const date = body.date;
        
        const type = body.type;
        const price = body.price;
        const huxing = body.huxing;
        const mianji = body.mianji;
        const chaoxiang = body.chaoxiang;
        const fengge = body.fengge;
        const xuexiao = body.xuexiao;
        const quyu = body.quyu;
        const addr = body.addr;

        const chuwei = body.chuwei;
        const kaipan_time = body.kaipan_time;
        const zhengjian = body.zhengjian;
        const jiaotong = body.jiaotong;
        const cur_louceng = body.cur_louceng;
        const total_louceng = body.total_louceng;
        const zhuangtai = body.zhuangtai;

        const id = body.id;

        let data = await db(res,house.update,[title,nav,attr,tag,keyword,thumbnail,source,author,info,content,comment,count,sort,gold,readlimit,date,type,price,huxing,mianji,chaoxiang,fengge,xuexiao,quyu,addr,chuwei,kaipan_time,zhengjian,jiaotong,cur_louceng,total_louceng,zhuangtai,id]);
        res.json({"code":100,"success":true,"data":data});
       
    } catch (error) {
      console.log(error)  
    }
    
   
});

//删除等级
router.post('/house/del',async(req,res,next)=>{
    try {
        let arr = [];
        let body = req.body;
        let id = body.id;

        /**
         * @param 获取文章的缩略图和内容图片路径
         * @param {*} id 
         */
        async function getImgsByArticleId(id){
            let img = await db(res,house.queryArticleImgById,id);
            console.log(img)
            if(img.length>0){
                if(!!!img[0].thumbnail){
                    arr.push(img[0].thumbnail)
                }
                let contImgArr = mkapp.getImgUrlFromStr(img[0].content);
                for(let i=0;i<contImgArr.length;i++){
                    arr.push(contImgArr[i])
                }
            }
        }
        
        //获取批量文章缩略图和内容图片路径
        for(let i=0;i<id.length;i++){
            await getImgsByArticleId(id[i])
        }
       
        //过滤外链中的图片
        arr = arr.filter((item)=>{
            return item.includes('/static/upload')
        });

        //批量删除文章缩略图和文章图片
        if(arr.length>0){
            for(let i=0;i<arr.length;i++){
                delUploadImg(arr[i]);
            }
        } 
        
        //删除文章数据
        let data = await db(res,house.del(id));

        res.json({"code":100,"success":true,"data":data});

    }catch (error){
        console.error(error);
    }
});





module.exports = router;