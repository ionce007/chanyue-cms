const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');

let all = require(config.web_model + 'global.sql');
let list = require(config.web_model + 'list.sql');

let router = express.Router();
/**
 * 文章列表 待优化
 */
router.get('/:id',async(req,res,next)=>{
	try {
			let id= req.params.id;
		
			//判断是否有id
			if(!id){
				res.send('非法访问！！！');
				return;
			}
			
			//获取当前位置
			let curarr = [];
			async function getNavName(id){
				var hasNav = await db(res,all.queryOne,[id]);
				if(hasNav.length==0){
					res.send('此导航不存在');
					return;
				}
				curarr.push({'id':hasNav[0].id,'pid':hasNav[0].pid,'nav_name':hasNav[0].nav_name});
				if(hasNav[0].pid!=0){
					await getNavName(hasNav[0].pid)
				}
			}

			await getNavName(id);

			let api={};
			api.data = {};
			api.data.position = curarr.reverse();
		
			//右侧子导航
			let subNav = await db(res,all.queryChildNav,[id]);
			api.data.subNav = subNav;

			//所有子导航
			let allSubNavArr = [];
			allSubNavArr.push(id);
			async function getAllSubNav(id){
				let allSubNav = await db(res,all.queryChildNav,[id]);
				if(allSubNav.length>0){
					for(let i=0;i<allSubNav.length;i++){
						allSubNavArr.push(allSubNav[i].id);
						await getAllSubNav(allSubNav[i].id)
					}
				}
			}
			await getAllSubNav(id);
			
			//此栏目文章总条数
			let count = await db(res,all.countSubNavById(allSubNavArr.toString()),[]);

			//计算总页数 和开始limt
			let pageNo = req.query.page || 1;
			let pageTotal = Math.ceil(count[0].count / config.pagesize);
			if(pageNo<=0){
				pageNo = 1;
			}
			if(pageNo>pageTotal){
				pageNo = pageTotal;
			}
			let start = ((pageNo-1) * config.pagesize)<0?0:(pageNo-1) * config.pagesize;
			api.pageTotal = pageTotal;
			let listData = await db(res,list.queryList(allSubNavArr.toString()),[start,config.pagesize]);
			for(let i=0;i<listData.length;i++){
				if(typeof listData[i].date != 'string'){
					listData[i].date = mkapp.time(listData[i].date).default;
				}
			}
			//本类本月推荐
			let articleRec = await db(res,list.getMonthNavRec,[id]);
			for(let i=0;i<articleRec.length;i++){
				articleRec[i].date = mkapp.time(articleRec[i].date).default;
			}
			//本类本月热门
			let articleHot = await db(res,list.getMonthNavHot,[id])
			for(let i=0;i<articleHot.length;i++){
				articleHot[i].date = mkapp.time(articleHot[i].date).default;
			}
			//本类本月图文
			let articlePic = await db(res,list.getMonthNavPic,[id])
			for(let i=0;i<articlePic.length;i++){
				articlePic[i].date = mkapp.time(articlePic[i].date).default;
			}
			api.data.articlelist = listData;
			api.data.articleRec = articleRec;
			api.data.articleHot = articleHot;
			api.data.articlePic = articlePic;
			res.render(config.web_template + 'list',api);
	} catch (error) {
		console.error(error);
	}
});



module.exports = router;