const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
const router = express.Router();
let reg = require(config.user_model+'reg.sql');

//注册
router.get('/',async(req, res, next)=>{
	res.render('user/reg');
});


router.post('/',async(req, res, next)=>{
	try {
		let body = req.body;
		
		let user = body.user;
		let pass =  mkapp.md5(body.pass +  mkapp.MD5_SUFFIX);
		// let email = body.email;
		let smscode = req.body.smscode;
		let tel = body.tel;

		let reUser = await db(res,reg.repeatUser,[user]);
		// let reEmail = await db(res,reg.repeatEmail,[email]);
		let reTel = await db(res,reg.repeatTel,[tel]);

		if(reUser.length != 0){
			res.send('用户名已存在！');
			return;
		}

		// if(reEmail.length != 0){
		// 	res.send('邮箱已被注册');
		// 	return;
		// }

		
		if(smscode != req.session.smscode){
			res.send(`<script>alert('对不起，您输入的验证码不正确哦^_^')</script>`)
		}

		if(reTel.length != 0){
			res.send('此手机号已经被注册！');
			return;
		}
		
		let queryNav = await db(res,reg.add,[user,pass,tel]);

		if(queryNav){
			res.send('注册成功');
		}
		
	} catch (error) {
		console.error(error);
	}
});
module.exports = router;