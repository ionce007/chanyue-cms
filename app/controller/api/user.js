
const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');

const admin = require('../../model/admin/Admin.sql');
const level = require('../../model/admin/Level.sql');
let router = express.Router();


//首页
router.get('/index',async(req,res,next)=>{
    try {
        res.send('api');
    } catch (error) {
        console.error(error);
    }  
});

router.use((req,res,next)=>{
    let perm = req.session.permission
    if(perm &&perm.includes(',2')){
        next();
    }else{
        res.send('对不起，您没有这个权限！')
    }
});

//新增管理员
router.get('/add',(req,res,next)=>{
    db(res,level.query,[]).then((data)=>{
        api.data = data;
        res.render('admin/admin_add',api);
    }).catch((err)=>{
         console.error(err);
    });
});

router.get('/isrepeat',(req,res,next)=>{
    db(res,admin.isrepeat,[req.query.admin_user]).then((data)=>{
        api.data = data;
        res.json(api);
    }).catch((err)=>{
        console.error(err);
    });
});

router.post('/add',(req,res,next)=>{

    let admin_user = req.body.admin_user;
    let admin_pass =  mkapp.md5(req.body.password +  mkapp.MD5_SUFFIX);
    let _level = req.body.level;
    
    db(res,admin.add,[admin_user,admin_pass,_level]).then((data)=>{
        req.flash('info','添加成功');
        res.redirect('/admin/admin');
    }).catch((err)=>{
        console.error(err);
    });

});

//修改管理员
router.get('/edit',(req,res,next)=>{

    let queryEdit = db(res,admin.queryOne,[req.query.id]);
    let _level = db(res,level.query,[]);

    Promise.all([queryEdit,_level]).then((data)=>{
       api.data = {};
       api.data.edit = data[0];
       api.data.level = data[1];
       res.render('admin/admin_edit',api);
    }).catch((err)=>{
        console.error(err);
    });

});

router.post('/edit',(req,res,next)=>{
    let admin_pass = mkapp.md5(req.body.admin_pass +  mkapp.MD5_SUFFIX);

    db(res,admin.update,[admin_pass,req.body.level,req.body.id]).then((data)=>{
        req.flash('info','修改成功');
        res.redirect('/admin/admin');
    }).catch((err)=>{
        console.error(err);
    });
        
});

//删除管理员
router.get('/del',(req,res,next)=>{
    db(res,admin.del,[req.query.id]).then((data)=>{
        req.flash('info','删除成功');
        res.redirect('/admin/admin');
    }).catch((err)=>{
        console.error(err);
    });
});

module.exports = router;