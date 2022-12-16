const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
const router = express.Router();
const reg = require(`${config.user_model}reg.sql`);


//管理首页
router.get('/',async(req, res, next)=>{
	try {
		let user = await db(res,reg.queryOne,[res.locals.uid]);
		let api={};
		api.data = user[0];
		res.render(`${config.user_template}safe`,api);
	} catch (error) {
		console.error(error);
	}
});

//更新手机号
router.post('/updateTel',async(req, res, next)=>{
	try {
		let tel = req.body.tel;
		let smscode = req.body.smscode;
		if(smscode != req.session.smscode){
			res.send(`<script>alert('对不起，您输入的验证码不正确哦^_^')</script>`)
		}else{
			let user = await db(res,reg.updateTel,[tel,res.locals.uid]);
			res.redirect('/user/safe');
		}
		
	} catch (error) {
		console.error(error);
	}
});

//更新密码
router.post('/updatePass',async(req, res, next)=>{
	
	try {
		let body = req.body;
		let smscode = req.body.smscode;
		console.log(body)
		if(smscode != req.session.smscode){
			res.send(`<script>alert('对不起，您输入的验证码不正确哦^_^')</script>`)
		}else{
			let pass =  mkapp.md5(body.pass +  mkapp.MD5_SUFFIX);
			let _pass = await db(res,reg.updatePass,[pass,res.locals.uid]);
			if(_pass){
				res.clearCookie('user');
				delete req.session.level_name;
				res.redirect('/user/login');
			}
		}
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;