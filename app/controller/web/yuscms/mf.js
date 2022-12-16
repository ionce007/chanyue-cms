
const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');
let mf = require(config.web_model+'/mf.sql');
let router = express.Router();
/**
 * 卖房
 */
router.use((req,res,next)=>{
	res.locals.nav_url = 'zf';
	next();
});
/**
	* 
	* @param {*} pageNo  第几页
	* @param {*} totalCount  总条数
	* @param {*} pagesize 一页几条
	* @description 返回总页数&limt start
	*/
	function page(pageNo = 1, totalCount, pagesize = 10) {
		let totalPage = Math.ceil(totalCount / pagesize);
		if (pageNo <= 0) {
			pageNo = 1;
		}
		if (pageNo > totalPage) {
			pageNo = totalPage;
		}
		let start = ((pageNo - 1) * pagesize) < 0 ? 0 : ((pageNo - 1) * pagesize);
		return { totalPage, start }
	}


router.get('/',async(req,res,next)=>{
	let type = req.query.type;
	var tj,jx;
	if(type == 'new'){
		res.locals.nav_url = 'mf-new';
		tj = await db(res, mf.tuijianNew);
		jx = await db(res, mf.jingxuanNew);
	}else if(type == 'old'){
		res.locals.nav_url = 'mf-old';
		tj = await db(res, mf.tuijianOld);
		jx = await db(res, mf.jingxuanOld);
	}

	let data = { tj, jx,type }
	res.render(config.web_template + 'mf-default',data);
});

router.get('/list',async(req,res,next)=>{
	try {
		let type = req.query.type;
		let list,count,totalpage;
		if(type=='old'){
			count = await db(res, mf.countOld);//总条数
			let pageNo = req.query.page;//当前页码
			let pagesize = config.pagesize;//每页显示条数
			let pageInfo = page(pageNo, count[0].count, pagesize);
			list = await db(res, mf.listOld, [pageInfo.start, pagesize]);
			totalpage = pageInfo.totalPage;
		}else if(type=='new'){
			count = await db(res, mf.countNew);//总条数
			let pageNo = req.query.page;//当前页码
			let pagesize = config.pagesize;//每页显示条数
			let pageInfo = page(pageNo, count[0].count, pagesize);
			list = await db(res, mf.listNew, [pageInfo.start, pagesize]);
			totalpage = pageInfo.totalPage;
		}else{
			count = await db(res, mf.count);//总条数
			let pageNo = req.query.page;//当前页码
			let pagesize = config.pagesize;//每页显示条数
			let pageInfo = page(pageNo, count[0].count, pagesize);
			list = await db(res, mf.list, [pageInfo.start, pagesize]);
			totalpage = pageInfo.totalPage;
		}
		let data = { list, count, totalpage,type};
		
		res.render(config.web_template + 'mf-list', data);
	} catch (error) {
		console.log(error);
	}
});

router.get('/detail/:id(\\d+)',async(req,res,next)=>{
	try {
		let id = req.params.id;
		let detail = await db(res, mf.detail, [id]);
		let data = {detail};
		console.log(data);
		res.render(config.web_template + 'mf-detail',data);
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;