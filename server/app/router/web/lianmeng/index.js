const express = require('express');
const router = express.Router();
const init = require('../../../middleware/init.js');
const ua = require('../../../middleware/ua.js');
const { template } = require('../../../config/config.js');
const HomeController = require(`../../../controller/web/${template}/home.js`);

//首页模板
router.get('/',  init(), ua(),HomeController.index);
//列表
router.get('/list/:id',  init(), ua(), HomeController.list);
// 文章页
router.get('/article/:id',  init(), ua(), HomeController.article);
// 搜索页
router.get('/search',  init(), ua(), HomeController.search);
//单页
router.get('/page/:id', init(),  ua(), HomeController.page);

module.exports = router;