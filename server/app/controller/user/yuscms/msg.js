
const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
const router = express.Router();
const msg = require(`${config.user_model}msg.sql`);

router.get('/',async(req,res,next)=>{
    res.render(`${config.user_template}msg`);
})


//列表
router.get('/list',async(req,res,next)=>{
        try{
            let uid = res.locals.uid;
            let countNum = await db(res,msg.count,[uid]); 
            console.log(countNum);


            let pageNo = req.query.page || 1;
            let pageTotal = Math.ceil(countNum[0].count / config.pagesize);
            console.log(pageTotal)
            if(pageNo<=0){
                pageNo = 1;
            }
            if(pageNo>pageTotal){
                pageNo = pageTotal;
            }
            let start = ((pageNo-1) * config.pagesize)<0?0:((pageNo-1) * config.pagesize);
        
            let msglist = await db(res,msg.query,[uid,start,config.pagesize]);
        
            for(let i=0;i<msglist.length;i++){
                if(typeof msglist[i].date != 'string'){
                    msglist[i].date = mkapp.time(msglist[i].date).default;
                }
            }

            let api={};
            api.pageTotal = pageTotal;
            api.data = msglist;
            res.json(api);
        } catch (error) {
            console.log(error);
        }
});



//删除管理员
router.get('/del',async(req,res,next)=>{
    try {
        //判断阅读表中有没有当前用户的id 和 当前要删除的文章
        let id = req.query.id;
        let uid = res.locals.uid;
        let hasread = await db(res,msg.hasReading,[id,uid]);
        
        if(hasread.length>0){  //已经阅读 就更新 status为2标示该用户已经删除消息
            let updateRead = await db(res,msg.update,[2,id,uid]);
        }else{  //没有阅读记录 新增
            let readmsg = await db(res,msg.readmsg,[id,uid,2]);
        }
      
        res.redirect('/user/msg?page=1');
       
    } catch (error) {
        console.error(error);
        
    }
});


router.get('/:id(\\d+)',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let uid = res.locals.uid;
        let edit = await db(res,msg.queryOne,[id]);
        //判断是否已经读了
        let hasread = await db(res,msg.readMsgStateById,[id,uid]);
        let api = {};
        api.data = {};
        console.log('lalalal')
        if(hasread.length==0){
            let read = await db(res,msg.readmsg,[id,uid,1]);
        }else{
            api.data.status = hasread[0].status;
        }
        api.data.msg = edit[0];
        res.render(`${config.user_template}msg-detail`,api);
    }catch(error){
        console.error(error);
    };
});

router.get('/markRead',async(req,res,next)=>{
    try{
        console.log(req.query)
        let id = req.query.id;
        let uid = res.locals.uid;

        //判断是否已经读了
        for(let i=0,ids;i<id.length;i++){
            ids = parseInt(id[i]);
            let hasread = await db(res,msg.readMsgStateById,[ids]);
            console.log(hasread)
            if(hasread.length==0){
               await db(res,msg.readmsg,[ids,uid,1]);
            }
        }
        api.data = [];
        res.json(api);
    }catch(error){
        console.error(error);
    };
});


module.exports = router;