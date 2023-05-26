const express = require('express');
const router = express.Router();
const init = require('../../../middleware/init.js');
const { template } = require('../../../config/config.js');
const HomeController = require(`../../../controller/web/${template}/home.js`);

// 首页模板
router.get('/', init(), HomeController.index);
router.get('/customercase', init(), HomeController.customercase);
router.get('/news', init(), HomeController.news);
router.get('/about', init(), HomeController.about);

// 分类
// router.get([
//   '/list/:cid',
//   '/c/:cate/index.html',
//   '/c/:cate/index:current.html',
//   '/c/:cate1/:cate/index.html',
//   '/c/:cate1/:cate/index:current.html',
//   '/c/:cate2/:cate1/:cate/index.html',
//   '/c/:cate2/:cate1/:cate/index:current.html',
//   '/c/:cate3/:cate2/:cate1/:cate/index.html',
//   '/c/:cate3/:cate2/:cate1/:cate/index:current.html'], init(), HomeController.list);

// 文章页
// router.get([
//   '/article/:id',
//   '/article/:id.html',
//   '/a/:id.html',
//   '/a/:cate/:id.html',
//   '/a/:cate1/:cate/:id.html',
//   '/a/:cate2/:cate1/:cate/:id.html',
//   '/a/:cate2/:cate1/:cate/:id.html',
//   '/a/:cate3/:cate2/:cate1/:cate/:id.html',
// ], init(), HomeController.article);

// 搜索页
// router.get([
//   '/search/:keywords/index.html',
//   '/search/:keywords/index:id.html'], init(), HomeController.search);

// router.get('/page/:id', init(), HomeController.page);
router.post('/front/formAppointment', HomeController.formAppointment)
router.post('/front/form', HomeController.form)

module.exports = router;