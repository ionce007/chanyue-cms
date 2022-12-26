const express = require('express');
const cookieParser = require('cookie-parser');

const favicon = require('serve-favicon');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const config = require('./app/config/config');
const router = require('./app/router/router');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny' || 'dev'));
app.use(favicon(path.join(__dirname, './app/static', 'favicon.ico')));
//解析cookie 签名
app.use(cookieParser(config.cookieKey));

//配置解析表单请求体：application/json
// function json(options){
// 	return (req,res,next)=>{
// 	}
// }

// app.use(json({
// 	message:'hello'
// }))
app.use(express.json());
//解析表单请求体：application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));//parse application/x-www-form-urlencoded
//express.row()  application/octet-stream
// express.text()
//express.static()
//app.use(multer({dest:config.upload}).any());
//配置模板引擎
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './app/view'));
app.engine('.html', ejs.__express);
//使用静态资源
app.use('/public', express.static(path.join(__dirname, './app/public')));
//机器人抓取
app.get('/robots.txt', function (req, res, next) {
	let stream = fs.createReadStream(path.join(__dirname, './app/static/robots.txt'), { flags: 'r' });
	stream.pipe(res);
});
//记录日志 不区分路由和方法，全局匹配 中间件顺序很重要
//路由限定规则的中间件，use全局中间件
// app.use((req,res,next)=>{
// 	console.log(req.method, req.url, Date.now());
// 	//交出执行权，继续往后匹配执行
// 	next()
// })
//路由
app.use(router);
app.listen(config.port, () => {
	console.log(`server started at localhost:${config.port}`)
});