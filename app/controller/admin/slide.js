const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');


var router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/slide');
});
router.get('/add',(req,res,next)=>{
	res.render('admin/slide-add');
});
router.get('/edit',(req,res,next)=>{
	res.render('admin/slide-edit');
});

module.exports = router;