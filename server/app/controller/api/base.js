'use strict';

const svgCaptcha = require('svg-captcha');
class BaseController {

  success(res) {
    res.json({
      code: 200,
      msg: '成功',
      data: res,
    })
  }

  fail(err) {
    const { msg } = err;
    res.json({
      code: 500,
      msg,
      error: err,
    })
	console.error(err);
  }

  // 获取验证码
  async captcha(req,res,next) {
    try {
     
      const captcha = svgCaptcha.create({
        size: 4,
        fontSize: 50,
        width: 100,
        height: 40,
        ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
        noise: 5,
        // background: '#cc9966',
      });
      res.cookie("captcha",captcha.text);
      res.type = 'image/svg+xml'; // 知道你个返回的类型
      res.end(captcha.data); // 返回一张图片
    } catch (error) {
      console.error(error);
    }
  }

  // 校验验证码
  async checkCaptcha(req,res,next) {
    const { ctx } = this;
    const { captcha } = req.body;
    if (req.cookie.captcha.toLowerCase() === captcha.toLowerCase()) {
      this.success({ data: true });
    } else {
      this.success({ data: false });
    }
  }

}

module.exports = BaseController;
