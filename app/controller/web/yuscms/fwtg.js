
const express = require('express');
let router = express.Router();
/**
 * 房屋托管
 */
router.get('/',(req,res,next)=>{
	//导航高亮
	
	res.locals.nav_url = 'fwtg';
	res.render(config.web_template + 'fwtg');
});

module.exports = router;