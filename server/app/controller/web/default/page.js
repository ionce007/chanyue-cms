const config = require('../../../config/config');
const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');

let all = require(config.m_fe_url+'global.sql');
let list = require(config.m_fe_url+'list.sql');
let article = require(config.m_fe_url+'article.sql');
let comment = require(config.m_fe_url+'comment.sql');
var router = express.Router();
/**
 * 内容详情
 */
router.get('/:id(\\d+)',async(req,res,next)=>{
	try{
		var id= req.params.id;
		
			//判断是否有id
			if(!id){
				res.send('非法访问！！！');
				return;
			}
			//累加计数
			let count = await db(res,article.setCountPage,[id]);
			//文章详情
			let articleDetail = await db(res,article.queryArticlePage,[id]);

			if(articleDetail.length==0){
				res.send('此导航不存在');
				return;
			}

			if(typeof articleDetail[0].date !='string'){
				articleDetail[0].date = mkapp.time(articleDetail[0].date).default;
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
			api.data.article = articleDetail[0];   
			api.data.currentNav = curarr;
			
			res.render(config.template+'page',api);
			
	}catch(error){
		console.error(error);
	}		
});

//评论列表
router.get('/comment/list',async(req,res,next)=>{
	try{
		var id= req.query.id;
		var pageNo = parseInt(req.query.page);
		let start = ((pageNo-1) * config.pagesize)<0?0:((pageNo-1) * config.pagesize);
		//此栏目文章总条数
		let count = await db(res,comment.count,[id]);
		//计算总页数
		api.pageTotal = Math.ceil(count[0].count / config.pagesize);
		
		//评论列表
		let commentList = await db(res,comment.query,[id,start,config.pagesize]);

		for(let i=0;i<commentList.length;i++){
			commentList[i].date = mkapp.time(commentList[i].date).default;
		}
		
		api.data = commentList;
		res.json(api);		
	}catch(error){
		console.error(error);
	}		
});
//提交评论
router.post('/comment/add',async(req,res,next)=>{
	try{
		let body = req.body;
		let user = req.cookies.user || '游客';
		let content =  body.content;
		let id =  body.cid;
		
		let add = await db(res,comment.add,[user,content,id]);
		if(add){
			res.json(add)
		}
		
	}catch(error){
		console.error(error);
	}		
});

//点赞
router.get('/zan',async(req,res,next)=>{
	try{
		let id = req.query.id;
		
		let add = await db(res,comment.zan,[id]);
		if(add){
			api.data = add;
			res.json(api)
		}
		
	}catch(error){
		console.error(error);
	}		
});


module.exports = router;