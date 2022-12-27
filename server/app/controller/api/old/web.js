
const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const db = require('../../config/db');
const express = require('express');

const ly = require('../../model/admin/ly.sql');
let router = express.Router();


//首页
router.post('/ly',async(req,res,next)=>{
    try {
        let body = req.body;

        let name = body.name;
        let tel = body.tel;
        let addr = body.addr;
        let xiaoqu = body.xiaoqu;
        let other = body.other;

        let data = await db(res,ly.add,[name,tel,addr,xiaoqu,other]);

        res.json({"code":100,"success":true,"data":data});
    } catch (error) {
        console.error(error)
    }
    
});

module.exports = router;