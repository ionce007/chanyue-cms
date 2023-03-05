const express = require('express');
const router = express.Router();
const WeiXinController = require('../../controller/weixin/index.js');

//微信小程序登录
router.post('/login', WeiXinController.login);

module.exports = router;