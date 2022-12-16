const mkapp = require(config.mkapp);
const db = require(config.db_url);

const express = require('express');

let zf = require(config.web_model+'/zf.sql');
let router = express.Router();
/**
 * 租房
 */
router.use((req, res, next) => {
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

router.get('/', async (req, res, next) => {
	try {
		let tj = await db(res, zf.tuijian);
		let zz = await db(res, zf.zhengzu);
		let hz = await db(res, zf.hezu);
		let data = { tj, zz, hz }
		res.render(config.web_template + 'zf-default', data);
	} catch (error) {
		console.log(error);
	}
});

router.get('/list', async (req, res, next) => {
	try {
		let count = await db(res, zf.count);//总条数
		let pageNo = req.query.page;//当前页码
		let pagesize = config.pagesize;//每页显示条数
		let pageInfo = page(pageNo, count[0].count, pagesize);

		let list = await db(res, zf.list, [pageInfo.start, pagesize]);
		let totalpage = pageInfo.totalPage;
		let data = { list, count, totalpage };
		console.log(data)
		res.render(config.web_template + 'zf-list', data);
	} catch (error) {
		console.log(error);
	}

});

router.get('/detail/:id(\\d+)', async (req, res, next) => {
	try {
		let id = req.params.id;
		let detail = await db(res, zf.detail, [id]);
		let data = {detail};
		console.log(data);
		res.render(config.web_template + 'zf-detail',data);
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;