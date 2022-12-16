const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');


var router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/level');
});
router.get('/add',(req,res,next)=>{
	res.render('admin/level-add');
});
router.get('/edit',(req,res,next)=>{
	res.render('admin/level-edit');
});
module.exports = router;