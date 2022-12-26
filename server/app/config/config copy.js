const path = require('path');
let template = 'qigong';

let map = new Map();

map.set('dev', {
	db_host: '127.0.0.1', //数据库地址
	db_port: 3306, //数据库端口号
	db_user: 'root',//数据库用户名
	db_password: 'root',//数据库密码 123456 jb51.net  online  
	database: `qigong`, //数据库
	port: 8080, //网站端口
})

map.set('prd', {
	db_host: '127.0.0.1', //数据库地址
	db_port: 3306, //数据库端口号
	db_user: 'root',//数据库用户名
	database: `qigong`, //数据库
	db_password: 'root',//数据库密码 123456 jb51.net  online  
	port: 80, //网站端口
})

let _conf = map.get(process.env.NODE_ENV || 'prd');

module.exports = {

	db_host: _conf.db_host, //数据库地址
	db_port: _conf.db_port, //数据库端口号
	db_user: _conf.db_user,//数据库用户名
	database: _conf.database, //数据库
	db_password: _conf.db_password,//数据库密码 123456 jb51.net  online  
	port: _conf.port, //网站端口

	//cookie签名防止篡改
	cookieKey: 'chanyue-cms',
	//session加密
	sessionKey: function () {
		var arr = [];
		for (let i = 0; i < 100000; i++) {
			arr.push('keys_' + Math.random());
		}
		return arr;
	},

	db_url: path.join(__dirname, 'db'),//数据库链接配置文件
	pagesize: 9, //分页条数
	navsize: 10, //导航个数
	upload: './static/upload', //文件上传目录
	web_template: `web/${template}/`, //前端 页面模板
	user_template: `user/${template}/`,//会员 页面模板
	web_model: path.join(__dirname, `../model/web/${template}/`), //默认前端sql文件路径,
	admin_model: path.join(__dirname, `../model/admin/`),
	user_model: path.join(__dirname, `../model/user/${template}/`),
	controller_web: `${template}`, //默认前端控制器模块
	mkapp: path.join(__dirname, '../utils/mkapp'), //mkapp插件
	webroot: path.join(__dirname, '../') //前端样式路径
};
