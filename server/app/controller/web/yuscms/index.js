const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');

var router = express.Router();
/**
 * 首页
 */
router.get('/',async(req,res,next)=>{
	try {
		//当前导航高亮
		res.locals.nav_url = 'index';
		
		res.render(config.web_template + 'index');
		
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;