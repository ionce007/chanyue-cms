const express = require('express');
const router = express.Router();
const init = require('../../../middleware/init.js');
const ua = require('../../../middleware/ua.js');
const { template } = require('../../../config/config.js');
const HomeController = require(`../../../controller/web/${template}/home.js`);

//首页模板
router.get('/', ua(), init(), HomeController.index);
//列表
router.get('/list/:id', ua(), init(),  HomeController.list);
// 文章页
router.get('/article/:id', ua(), init(),  HomeController.article);
// 搜索页
router.get('/search', ua(), init(),  HomeController.search);
//单页
router.get('/page/:id', ua(), init(),  HomeController.page);

module.exports = router;