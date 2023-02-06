'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const { md5, setToken } = require('../../extend/helper.js');
const WXBizDataCrypt = require('../../extend/WXBizDataCrypt.js');
const { weixin } = require('../../config/config.js');
const axios = require('axios');
class WeiXinController extends BaseController {
  constructor(props) {
    super(props);
    this.model = 'weixin';
  }

  async login(req, res, next){
    try {
        console.log(req.body)
        const {code,userInfo} = req.body;
        const {appid,secret} = weixin;
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
        const result = await axios.default.get(url);
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

module.exports = new WeiXinController();
