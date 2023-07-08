"use strict";
const { success } = require("../../extend/api.js");
const { setToken } = require("../../extend/helper.js");
const config = require("../../config/config.js");
const WeiXinService = require("../../service/weixin/index");

class WeiXinController {
  constructor(props) {
    this.model = "weixin";
  }

  //微信小程序登录
  static async login(req, res, next) {
    try {
      const { code, userInfo } = req.body;
      const { appid, secret } = config.weixin;
      const { avatarUrl, nickName } = userInfo;

      const { openid, session_key, unionid } = await WeiXinService.login(
        appid,
        secret,
        code
      );
      // 设置token
      const token = setToken(
        { openid: openid },
        config.token.KEY,
        config.token.TIME
      );

      // console.log(req.headers)
      // 加密返回token,获取token解密然后通过openid或者unionid来查询
      // openid: "oy9xU5F3p5UPSRv3D8lhEfJkbqGI"
      // userInfo:
      // avatarUrl: ""
      // city: ""
      // country: ""
      // gender: 0
      // language: "zh_CN"
      // nickName: "明空"
      // province: ""

      res.json({
        ...success,
        data: {
          openid,
          token,
          avatarUrl,
          nickName,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = WeiXinController;