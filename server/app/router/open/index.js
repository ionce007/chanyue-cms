const express = require('express');
const router = express.Router();
const OpenController = require('../../controller/open/index.js');

//60秒读懂世界 
router.get('/60s', OpenController.news60s);

module.exports = router;