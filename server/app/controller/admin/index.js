const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');


var router = express.Router();
/**
 * 首页
 */
router.get('/',(req,res,next)=>{
	res.render('admin/index');
});

module.exports = router;