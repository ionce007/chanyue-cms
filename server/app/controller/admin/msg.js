const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');

let router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/msg');
});
router.get('/add',(req,res,next)=>{
	res.render('admin/msg-add');
});
router.get('/edit',(req,res,next)=>{
	res.render('admin/msg-edit');
});
module.exports = router;