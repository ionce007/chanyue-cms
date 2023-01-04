

const fs = require('fs');
const path = require('path');
const api = require('./api/index.js');
const web = require(`./web/index.js`);
const express = require('express');
const router = express.Router();

//前台
router.use('/', web);

//接口
 router.use('/api', api);

//机器人抓取
router.get('/robots.txt', function (req, res, next) {
	let stream = fs.createReadStream(path.join(__dirname, './app/public/robots.txt'), { flags: 'r' });
	stream.pipe(res);
});

//404处理
router.use((req, res, next) => {
	res.status(404).send('404 - NOT Found');
});

//在所有组件挂在之后处理错误中间件
router.use((err, req, res, next) => {
	console.log('错误', req.method, req.url);
	console.log('err.message', err.message)
	res.status(500).send('服务器貌似有些问题了'+ err.message);
});

module.exports = router;
