const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
const index = require(config.web_model + 'index');



var router = express.Router();


/**
 * 首页
 */
router.get('/',async(req,res,next)=>{
	try {
		//当前导航高亮
		console.log(res.locals.nav)
		//轮播图
		let slide = await db(res,index.slideList);
		//顶部头条
		let top = await db(res,index.topOne);
		//顶部头条
		let topList = await db(res,index.topList);
		for(let i=0;i<topList.length;i++){
			topList[i].date = mkapp.time(topList[i].date).default;
		}
		//广告
		let ad = await db(res,index.ad);
		//气功新闻
		let news = {};
		news.tj = await db(res,index.item_tj,[1]);
		news.list= await db(res,index.item_new,[1]);
		for(let i=0;i<news.list.length;i++){
			news.list[i].date = mkapp.time(news.list[i].date).default;
		}
		//学术交流
		let xueshu = {};
		xueshu.tj = await db(res,index.item_tj,[2]);
		xueshu.list= await db(res,index.item_new,[2]);
		for(let i=0;i<xueshu.list.length;i++){
			xueshu.list[i].date = mkapp.time(xueshu.list[i].date).default;
		}

		//体育气功
		let tiyu = {};
		tiyu.tj = await db(res,index.item_tj,[3]);
		tiyu.list= await db(res,index.item_new,[3]);
		for(let i=0;i<tiyu.list.length;i++){
			tiyu.list[i].date = mkapp.time(tiyu.list[i].date).default;
		}

		//医学气功
		let yixue = {};
		yixue.tj = await db(res,index.item_tj,[4]);
		yixue.list= await db(res,index.item_new,[4]);
		for(let i=0;i<yixue.list.length;i++){
			yixue.list[i].date = mkapp.time(yixue.list[i].date).default;
		}

		//养生气功
		let ys = {};
		ys.tj = await db(res,index.item_tj,[5]);
		ys.list= await db(res,index.item_new,[5]);
		for(let i=0;i<ys.list.length;i++){
			ys.list[i].date = mkapp.time(ys.list[i].date).default;
		}

		//气功医案
		let ya = {};
		ya.tj = await db(res,index.item_tj,[8]);
		ya.list= await db(res,index.item_new,[8]);
		for(let i=0;i<ya.list.length;i++){
			ya.list[i].date = mkapp.time(ya.list[i].date).default;
		}

		//气功与书画
		let sh = {};
		sh.tj = await db(res,index.item_tj,[9]);
		sh.list= await db(res,index.item_new,[9]);
		for(let i=0;i<sh.list.length;i++){
			sh.list[i].date = mkapp.time(sh.list[i].date).default;
		}

		//气功人物
		let rw = {};
		rw.tj = await db(res,index.item_tj,[10]);
		rw.list= await db(res,index.item_new,[10]);
		for(let i=0;i<rw.list.length;i++){
			rw.list[i].date = mkapp.time(rw.list[i].date).default;
		}

		//气功实践
		let sj = {};
		sj.tj = await db(res,index.item_tj,[12]);
		sj.list= await db(res,index.item_new,[12]);
		for(let i=0;i<sj.list.length;i++){
			sj.list[i].date = mkapp.time(sj.list[i].date).default;
		}

		//气功纠偏
		let jp = {};
		jp.tj = await db(res,index.item_tj,[13]);
		jp.list= await db(res,index.item_new,[13]);
		for(let i=0;i<jp.list.length;i++){
			jp.list[i].date = mkapp.time(jp.list[i].date).default;
		}

		//热门文章
		let hot = await db(res,index.getMonthHotList);
		
		//太极
		let taiji = await db(res,index.item_aside,[6]);
		//瑜伽
		let yujia = await db(res,index.item_aside,[7]);
		console.log(news);
		res.render(config.web_template + 'index',{slide,top,topList,ad,news,xueshu,tiyu,yixue,ys,ya,sh,rw,sj,jp,hot,taiji,yujia});
		
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;