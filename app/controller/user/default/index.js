const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');

// let index = require('../../model/web/index.sql');
let order = require('../../model/user/order.sql');
const express = require('express');
const router = express.Router();

//管理首页
router.get('/',async(req, res, next)=>{
	try{
		let countNum = await db(res,order.count,[req.signedCookies.user]); 
		let pageNo = req.query.page || 1;
		let pageTotal = Math.ceil(countNum[0].count / config.pagesize);
		if(pageNo<=0){
			pageNo = 1;
		}
		if(pageNo>pageTotal){
			pageNo = pageTotal;
		}
		let start = ((pageNo-1) * config.pagesize)<0?0:((pageNo-1) * config.pagesize);
	
	
		let slidelist = await db(res,order.query,[req.signedCookies.user,start,config.pagesize]);
	
		for(let i=0;i<slidelist.length;i++){
			if(typeof slidelist[i].time != 'string'){
				slidelist[i].time = mkapp.time(slidelist[i].time).default;
			}
		}

		let score = await db(res,order.score,[req.signedCookies.user]);
		let water = await db(res,order.queryWater,[req.signedCookies.user]);
		let api={};
		api.pageTotal = pageTotal;
		api.data = slidelist;
		api.score = score[0].score;
		api.face = water[0].face;
		console.log(score)
		api.water = water[0].water;
		
		res.render('user/index',api);
		
	} catch (error) {
		console.log(error);
	}
	
});


module.exports = router;