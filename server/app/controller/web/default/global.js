const config = require('../../../config/config');
const mkapp = require('../../../utils/mkapp');
const express = require('express');

const db = require(config.db_url);
let all = require( config.web_model+'/global.sql');

const index =  require('./index');
const list =  require('./list');
const article = require('./article');
const search = require('./search');
const page = require('./page');
let router = express.Router();
router.use(async(req,res,next)=>{
    //顶部导航
    res.locals.nav = (!!res.locals.nav)?res.locals.nav:await db(res,all.queryNav);
    //js css 路径
    res.locals.base_url = '/static/'+ config.template
    next();
})

//首页
router.use('/',index);
//列表页
router.use('/list',list);
//详情页
router.use('/article',article);
//搜索页
router.use('/search',search);
//page
router.use('/page',page);

router.get('/contact',(req,res,next)=>{
    res.render(config.template+'contact');
});

router.get('/job',(req,res,next)=>{
    res.render(config.template+'job');
});

module.exports = router;