const config = require('../../config/config');
const mkapp = require('../../utils/mkapp');
const express = require('express');
const db = require('../../config/db');
let navsql = require('../../model/admin/Nav.sql');

//阿里云短信发送
const SMSClient = require('@alicloud/sms-sdk');
const accessKeyId = 'LTAIhtWft30Izqhc';
const secretAccessKey = 'aAWnC5oY4XCH9OqRYTsFdWq1s2V5u8';
const SignName = '京鹏寻泉';
const TemplateCode = 'SMS_109405105';

//api 入口
const user = require('./user');
const admin = require('./admin');
const web = require('./web');

let router = express.Router();

/**
 * 生成随机码
 */
function createCode(){
	let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let code = '';
	for(let i=0;i<4;i++){
		code +=  charset.charAt(Math.floor(Math.random() * 62))
	}
	return code;
};

function createSmsCode(){
	let charset = '0123456789';
	let code = '';
	for(let i=0;i<4;i++){
		code +=  charset.charAt(Math.floor(Math.random() * 10))
	}
	return code;
};

router.use((req,res,next)=>{
	req.session.code = createCode();
	req.session.smscode = createSmsCode();
	next();
});

//图像验证码
router.get('/code',function(req,res){
	res.json({data:'凡有所相，皆为虚妄。'+req.session.code})
});

//短信验证码
router.get('/sms-code',async function(req,res){
	try {
		let tel = req.query.tel;
		if(tel.length!=11){
			res.json({Code:'error',Message:'请正确发送手机号'});
			return;
		}
		//初始化sms_client
		let smsClient = new SMSClient({accessKeyId, secretAccessKey})
		
		//发送短信
		let smsResult = await smsClient.sendSMS({
			PhoneNumbers: req.query.tel,
			SignName: SignName,
			TemplateCode: TemplateCode,
			TemplateParam: `{"code":"${req.session.smscode}"}`
		});
		console.log('----------',smsResult)
		res.json(smsResult)
	} catch (error) {
		console.log(error)
	}
});



//后台
router.use('/admin',admin);
//会员
router.use('/user',user);
//前台
router.use('/web',web);
module.exports = router;