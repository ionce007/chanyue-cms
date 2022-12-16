const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const fs = require('fs');
const ejs = require('ejs');
const clearLog = require('./app/utils/timer');
global.config = require('./app/config/config');

const router = require('./app/router/router');

let app = express();

app.listen(config.port,()=>{
	console.log(`server started at localhost:${config.port}`)
});

//0.清除
//网站图标
app.use(favicon(path.join(__dirname, './app/static', 'favicon.ico')));

//2.解析cookie 签名
app.use(cookieParser(config.cookieKey));

//3.使用session store制定存储数据库 secure为true 特别消耗性能
app.use(session({
	secret: config.sessionKey(),
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false,maxAge:20*60*1000}
}));

//4.post数据
app.use(bodyParser.json({limit:'500kb'}));//parse application/json 
app.use(bodyParser.urlencoded({limit:'5mb',extended: false }));//parse application/x-www-form-urlencoded
//app.use(multer({dest:config.upload}).any());

//5.配置模板引擎
app.set('view engine', 'html');
app.set('views',path.join(__dirname, './app/views'));
app.engine('.html',ejs.__express);

//6.使用静态资源
app.use('/static',express.static(path.join(__dirname, './app/static')));

//7.机器人抓取
app.get('/robots.txt', function (req, res, next) {
    let stream = fs.createReadStream(path.join(__dirname, './app/static/robots.txt'), {flags: 'r'});
    stream.pipe(res);
});

//8.路由
router(app);


