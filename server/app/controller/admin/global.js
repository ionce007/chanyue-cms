const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const express = require('express');

//引入数据库
const db = require('../../config/db');
const dbadmin = require('../../model/admin/Admin.sql');
const dblevel = require('../../model/admin/Level.sql');

//基本模块
const login = require('./login');
const index =  require('./index');
const info =  require('./info');
const web =  require('./web');
const category =  require('./category');
const article =  require('./article');
const slide =  require('./slide');
const ad =  require('./ad');
const link =  require('./link');
const admin =  require('./admin');
const level =  require('./level');

//会员模块
const user =  require('./user');
const order = require('./order');
const comment = require('./comment');
const msg = require('./msg');

//host
const ly = require('./ly');
const house = require('./m_house');

let router = express.Router();

//检查登录状态
router.use((req, res, next)=>{
	if(!req.signedCookies.aid && req.url != '/login'){
		res.redirect('/admin/login');
	}else{
		next();
	}
});

//登录
router.use('/login',login);

//获取管理员常用信息
router.use(async(req, res, next)=>{
	let id = req.signedCookies.aid;
	let admin_user = await db(res,dbadmin.queryOne,[id]);
	let data = await db(res,dblevel.queryOne,[admin_user[0].level]);
	res.locals.admin = {
		name:admin_user[0].admin_user,
		level_name:data[0].level_name,
		permission:data[0].permission
	};
	
	next();
});

//首页
router.use('/index',index);
//基本信息
router.use('/info',info);
//站点信息
router.use('/web',web);
//栏目
router.use('/category',category);
//文章
router.use('/article',article);
//轮播
router.use('/slide',slide);
//广告
router.use('/ad',ad);
//友情链接
router.use('/link',link);
//管理员管理
router.use('/admin',admin);
//等级管理
router.use('/level',level);
//会员
router.use('/user',user);
//订单
router.use('/order',order);
//评论管理
router.use('/comment',comment);
//站内消息
router.use('/msg',msg);
//留言
router.use('/ly',ly);
//房产管理
router.use('/house',house);

module.exports = router;