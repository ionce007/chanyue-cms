

const fs = require('fs');
const path = require('path');
const config = require('../config/config');
const web = require(`../controller/web/${config.controller_web}/global`);
const user = require(`../controller/user/${config.controller_web}/global`);
const admin = require('../controller/admin/global');
const api = require('../controller/api/global');
const express = require('express');

const router = express.Router();
//前台
// router.use('/',web);

// //会员中心
// router.use('/user',user);

// //后台
// router.use('/admin',admin);

// //接口
// router.use('/api',api);

//机器人抓取
router.get('/robots.txt', function (req, res, next) {
	let stream = fs.createReadStream(path.join(__dirname, './app/public/robots.txt'), { flags: 'r' });
	stream.pipe(res);
});

//404处理
router.use((req,res,next)=>{
	res.status(404).send('404 - NOT Found');
});
	
//在所有组件挂在之后处理错误中间件
router.use((err,req,res,next)=>{
	console.log('错误',req.method, req.url);
	console.log('err.message',err.message)
	res.status(err.status || 500).send('服务器貌似有些问题了');
	// res.status(500).json({
	// 	error:err.message
	// })
});

module.exports = router;
