'use strict';
const { pc } = require('../extend/helper.js');
module.exports = () => {
    return async (req, res, next) => {
        const userAgent = req.headers['user-agent'];
        // 放入中间件
        if (!pc(userAgent)) {
            res.locals.views = 'h5';
        } else {
            res.locals.views = 'pc';
        }
       
        await next();
    }
};