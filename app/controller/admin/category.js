const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');


var router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/category');
});
router.get('/add',(req,res,next)=>{
	res.render('admin/category-add');
});
router.get('/edit',(req,res,next)=>{
	res.render('admin/category-edit');
});

router.get('/page-add',(req,res,next)=>{
	res.render('admin/category-page-add');
});
router.get('/page-edit',(req,res,next)=>{
	res.render('admin/category-page-edit');
});
module.exports = router;