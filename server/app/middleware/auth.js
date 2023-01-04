'use strict';
const { getToken } = require('../extend/helper.js');
const config = require('../config/config.js');

module.exports = () => {
  return async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      try {
        await getToken(token, config.token.KEY);
        await next();
      } catch (error) {
        res.status(200).json({
          code: 0,
          msg: error,
        })
      }
    } else {
      res.status(200).json({
        code: 0,
        msg: 'token缺失',
      })
    }
  }
};

