const config = require('../config/config');
const web = require(`../controller/web/${config.controller_web}/global`);
const user = require(`../controller/user/${config.controller_web}/global`);
const admin = require('../controller/admin/global');

const api = require('../controller/api/global');
const path = require('path');
module.exports = function(app){

	//会员登录状态
	app.use((req, res, next)=>{
		res.locals.user = req.signedCookies.user;
		res.locals.uid = req.signedCookies.uid;
		next();
	});
	
	//前台
	app.use('/',web);
	
	//会员中心
	app.use('/user',user);

	//后台
	app.use('/admin',admin);

	//接口
	app.use('/api',api);

	app.use((req,res,next)=>{
		res.status(404).send('404 - NOT Found');
	});

	app.use((err,req,res,next)=>{
		console.error(`${req.originalUrl}`,err);
		res.status(err.status || 500).send('服务器貌似有些问题了');
	});
};