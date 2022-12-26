const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const ejs = require('ejs');
//配置文件
const config = require('./app/config/config');
const router = require('./app/router/router');

const app = express();

app.use(morgan('tiny' || 'dev'));
app.use(favicon(path.join(__dirname, './app/static', 'favicon.ico')));

app.use(cookieParser(config.cookieKey));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

//路由
app.use(router);

app.listen(config.port, () => {
	console.log(`server started at localhost:${config.port}`)
});