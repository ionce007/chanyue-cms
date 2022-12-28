const express = require('express');
const router = express.Router();
const init = require('../../../middleware/init.js');

// 首页模板
router.get('/', init());

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
//   '/c/:cate3/:cate2/:cate1/:cate/index:current.html' ], init, controller[config.template].home.list);

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
// ], init, controller[config.template].home.article);

// 搜索页
// router.get([
//   '/search/:keywords/index.html',
//   '/search/:keywords/index:id.html' ], init, controller[config.template].home.search);
 
 
  module.exports = router;