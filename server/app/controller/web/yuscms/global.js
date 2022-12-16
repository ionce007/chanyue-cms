
const mkapp = require(config.mkapp);
const express = require('express');

const db = require(config.db_url);

const slide = require(config.web_model + '/slide.sql');
const ad = require(config.web_model + '/ad.sql');

const index =  require('./index');
const fwtg =  require('./fwtg');
const zf = require('./zf');
const mf = require('./mf');
const about = require('./about');

let router = express.Router();
router.use(async(req,res,next)=>{

    //js css 路径
    res.locals.base_url = '/static/'+ config.web_template;

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
//房屋托管
router.use('/fwtg',fwtg);
//租房
router.use('/zf',zf);
//卖房
router.use('/mf',mf);
//关于我们
router.use('/about',about);

module.exports = router;