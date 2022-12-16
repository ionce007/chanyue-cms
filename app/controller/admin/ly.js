const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');


var router = express.Router();


router.get('/',(req,res,next)=>{
	res.render('admin/ly');
});

router.get('/add',(req,res,next)=>{
	res.render('admin/ly-add');
});

router.get('/edit',(req,res,next)=>{
	res.render('admin/ly-edit');
});

module.exports = router;