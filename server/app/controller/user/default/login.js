const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');
const router = express.Router();
const reg = require('../../model/user/reg.sql');


//登录
router.get('/',(req, res)=>{
	if(!!res.locals.user){
		res.redirect('/index')
	}else{
		res.render('user/login');
	}
	
});

router.post('/',async(req, res, next)=>{
	try {
		let body = req.body;
		let user = body.user;
		let pass =  mkapp.md5(body.pass +  mkapp.MD5_SUFFIX);
		let code = body.code;
		let hasUser = await db(res,reg.hasUser,[user,pass]);
		if(hasUser.length==0){
			res.send('用户名或密码不正确！');
		}else{
			//更新登录时间
			let updateTime = await db(res,reg.updateTime,[new Date().getTime(),hasUser[0].id]);
			let _user = hasUser[0].user;
			let uid = hasUser[0].id;
			res.cookie('user',_user,{httpOnly: true,signed: true});
			res.cookie('uid',uid,{httpOnly: true,signed: true});
			res.redirect('/user/index');
		}
		
	} catch (error) {
		console.error(error)
	}


});

//退出登陆
router.get('/logout',(req,res,next)=>{
	res.clearCookie('user');
	res.clearCookie('uid');
	res.redirect('/');
});


module.exports = router;