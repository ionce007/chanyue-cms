const express = require('express');

let router = express.Router();
/**
 * 关于我们
 */
router.get('/',async(req,res,next)=>{
	res.locals.nav_url = 'about';
	res.render(config.web_template + 'about');
});

module.exports = router;