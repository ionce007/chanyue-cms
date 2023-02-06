const express = require('express');
const router = express.Router();
const WeiXinController = require('../../controller/weixin/index.js');

router.post('/login', WeiXinController.login);

module.exports = router;