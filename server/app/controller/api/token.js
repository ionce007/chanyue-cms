'use strict';

const BaseController = require('./base');
const {token:{KEY,TIME}} = require('../../config/config.js');
const {setToken,getToken} = require('../../extend/helper.js');
class TokenController extends BaseController {
  constructor(...args) {
    super(...args);
  }

  // 更新token时间
  static async update(res,req,next) {
    try {
      const username = req.locals.username;
      const uid = req.locals.uid;
      const token = setToken({ username, uid },
       KEY,
        TIME);
      this.success({ token });
    } catch (error) {
      this.fail(error);
    }
  }

  // 校验token是否正确
  static async check(req,res,next) {
    try {

      const token = req.query.token;
      const res = await getToken(token, KEY);
      this.success({ ...res });
    } catch (error) {
      this.fail(error);
    }
  }

}

module.exports = TokenController;
