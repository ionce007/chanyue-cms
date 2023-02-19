'use strict';
const path = require('path');
const dayjs = require('dayjs');
const axios = require('axios');

const BaseController = require('./base');
const { success, fail } = require('../../extend/api.js');
const { md5, setToken } = require('../../extend/helper.js');
const { weixin } = require('../../config/config.js');

class WeiXinController extends BaseController {
  constructor(props) {
    super(props);
    this.model = 'weixin';
  }

  static async login(req, res, next){
    try {
        const {code,userInfo} = req.body;
        const {appid,secret} = weixin;
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
        const result = await axios.default.get(url);
        // 加密返回token,获取token解密然后通过openid或者unionid来查询
        res.json({
            code: 0,
            msg: 'success',
            data:{
                ...result.data,
                userInfo
            }
        })
    } catch (error) {
        next(error);
    }
  }

}

module.exports =  WeiXinController;
