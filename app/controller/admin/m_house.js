
const mkapp = require(config.mkapp);
const db = require(config.db_url);
const express = require('express');

var router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/house');
});

router.get('/add',(req,res,next)=>{
	res.render('admin/house-add');
});

router.get('/edit',(req,res,next)=>{
	res.render('admin/house-edit');
});

module.exports = router;