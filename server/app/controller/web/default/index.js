const config = require('../../../config/config');
const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
const index = require(config.m_fe_url+'index.sql');

var router = express.Router();
/**
 * 首页
 */
router.get('/',async(req,res,next)=>{
	try {
		
		//主导航下文章
		let categoryList = res.locals.nav;
		for(let i=0;i<categoryList.length;i++){
			let item = await db(res,index.listByCategoryId,categoryList[i].id);
			for(let j=0;j<item.length;j++){
				item[j].date = mkapp.time(item[j].date).default;
			}
			categoryList[i].article = item;
		}

		//推荐
		let newsRec = await db(res,index.newRecList);
		for(let i=0;i<newsRec.length;i++){
			newsRec[i].date = mkapp.time(newsRec[i].date).default;
		}
		//热门
		let newsHot = await db(res,index.getMonthHotList);
		for(let i=0;i<newsHot.length;i++){
			newsHot[i].date = mkapp.time(newsHot[i].date).default;
		}
		//评论排行
		let newsComment = await db(res,index.getMonthCommentList);
		for(let i=0;i<newsComment.length;i++){
			newsComment[i].date = mkapp.time(newsComment[i].date).default;
		}
		//最新图文
		let txtPic = await db(res,index.txtPic);
		for(let i=0;i<txtPic.length;i++){
			txtPic[i].date = mkapp.time(txtPic[i].date).default;
		}

		//最新10条文档
		let newsList = await db(res,index.newsList);
		for(let i=0;i<newsList.length;i++){
			newsList[i].date = mkapp.time(newsList[i].date).default;
		}

		//头条 
		let topOne = await db(res,index.topOne);

		let api={};
		api.data = {};
	
		api.data.newsRec= newsRec;
		api.data.newsHot= newsHot;
		api.data.newsComment= newsComment;
		api.data.txtPic = txtPic;
		api.data.newsList = newsList;
		api.data.topOne = topOne[0];
		api.data.categoryList = categoryList;
		
		res.render(config.template + 'index',api);
	
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;