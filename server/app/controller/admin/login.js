const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');

//数据库查询
const admin = require('../../model/admin/Admin.sql');


const express = require('express');

let router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('admin/login');
});

router.post('/',async(req, res, next)=>{
	try {
		let body = req.body;
		let admin_user = body.admin_user;
		let admin_pass =  mkapp.md5(body.admin_pass +  mkapp.MD5_SUFFIX);
        let login = await db(res,admin.hasAdmin,[admin_user,admin_pass]);
		if(login.length == 0){
            res.send({"code":101,"success":false,"msg":'用户名或密码不正确！'});
		}else{
            //记录用户登录信息
            await db(res,admin.updateLoginInfo,[req.ip.substring(7),admin_user]);
            res.cookie('aid',login[0].id,{httpOnly: true,signed: true});
            res.send({"code":100,"success":true,"msg":'登录成功'});
		}
	} catch (error) {
		console.error(error);
	}

});

router.get('/equit',(req,res,next)=>{
    res.clearCookie('aid');
    res.send({"code":100,"success":true,"msg":'请重新登录！'});
});


router.get('/islogin',(req,res,next)=>{
    
    if(req.signedCookies.aid){
        res.send({"code":100,"success":true,"msg":'已登录'});
    }else{
        res.send({"code":101,"success":false,"msg":'请重新登录！'});
    }
});

module.exports = router;