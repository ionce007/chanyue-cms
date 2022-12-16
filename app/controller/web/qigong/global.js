
const mkapp = require(config.mkapp);
const express = require('express');

const db = require(config.db_url);

const slide = require(config.web_model + '/slide.sql');
const ad = require(config.web_model + '/ad.sql');
const Mindex = require(config.web_model + '/index');

const index =  require('./index');
const list =  require('./list');
const article = require('./article');
const search = require('./search');

let router = express.Router();
router.use(async(req,res,next)=>{

    //js css 路径
    res.locals.base_url = '/static/'+ config.web_template;

    //通用nav
    if(!!!res.locals.nav){
        res.locals.nav = await db(res,Mindex.queryNav);
    }

    //通用banner
    if(!!!res.locals.banner){
        res.locals.banner = await db(res,slide.query);
    }
    //通用ad
    if(!!!res.locals.ad){
        res.locals.ad = await db(res,ad.query);
    }

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

module.exports = router;