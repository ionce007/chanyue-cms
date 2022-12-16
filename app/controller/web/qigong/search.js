const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');

let all = require(config.web_model+'global.sql');
let list = require(config.web_model+'list.sql');
let search = require(config.web_model+'search.sql');
let router = express.Router();
/**
 * 文章列表 待优化
 */
router.get('/',async(req,res,next)=>{
	try {
        let keyword = req.query.keyword;
        let type = req.query.type;
			//顶部导航
			let allNav = await db(res,all.queryNav);
			let api = {};
        	api.data = {};
			api.data.nav = allNav;
		
            //此栏目文章总条数
        	let count,listData;
            if(type==1){
                count = await db(res,search.countByTitle(keyword),[]);
            }
			if(type==2){
                count = await db(res,search.countByKeyWord(keyword),[]);
            }
            if(type==3){
                count = await db(res,search.countByTag(keyword),[]);
            }
								
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
            
            if(type==1){
               listData = await db(res,search.searchByTitle(keyword),[start,config.pagesize]);
            }
            
            if(type==2){
                listData = await db(res,search.searchByKeyWord(keyword),[start,config.pagesize]);
            }

            if(type==3){
                listData = await db(res,search.searchByTag(keyword),[start,config.pagesize]);
            }
            

			for(let i=0;i<listData.length;i++){
				if(typeof listData[i].date != 'string'){
					listData[i].date = mkapp.time(listData[i].date).default;
				}
				
			}
			
			api.data.articlelist = listData;
			api.keyword = keyword;
			res.render(config.web_template + 'search',api);
	} catch (error) {
		console.error(error);
	}
	
});

module.exports = router;