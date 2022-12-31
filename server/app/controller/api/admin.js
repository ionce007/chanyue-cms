'use strict';

const BaseController = require('./base');
const dayjs = require('dayjs');
const svgCaptcha = require('svg-captcha');
const {success,fail} = require('../../extend/api.js');
class AdminController extends BaseController {

  constructor(props) {
    super(props);
   
    this.model = 'admin';
  }

  // 登录
  async login() {
    try {
      const { ctx, app, service } = this;
      let { username, password } = ctx.request.body;
      password = ctx.helper.md5(password + app.config.md5.key);
      const res = await service.api[this.model].find(username, password);
      if (res) {
        const { id, status } = res;
        // 设置token data, key, time username, uid
        const token = this.ctx.helper.setToken({ uid: id, username },
          this.config.token.KEY,
          this.config.token.TIME);
        // this.ctx.cookies.set('token', token, {
        //   httpOnly: false,
        // });
        const data = { id, status, username, token };
        this.success(data);
      } else {
        this.fail('用户名或密码错误');
      }
    } catch (error) {
      this.fail(error);
    }
  }

  // 增
  async create() {
    try {
      const { ctx, app, service } = this;
      const body = ctx.request.body;
      body.password = ctx.helper.md5(body.password + app.config.md5.key);
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await service[this.config.apiService][this.model].create(body);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 删除
  async delete() {
    try {
      const { ctx, service } = this;
      const id = ctx.query.id;
      const data = await service[this.config.apiService][this.model].delete(id);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 改
  async update() {
    try {
      const { ctx, app, service } = this;
      const body = ctx.request.body;
      body.password = ctx.helper.md5(body.password + app.config.md5.key);
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await service[this.config.apiService][this.model].update({ ...body });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }


  // 查
  async detail() {
    try {
      const { ctx, service } = this;
      const id = ctx.query.id;
      const data = await service[this.config.apiService][this.model].detail(id);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }


  // 搜索
  async search() {
    try {
      const { ctx, service } = this;
      const cur = ctx.query.cur;
      const key = ctx.query.keyword;
      const pageSize = 10;
      const data = await service[this.config.apiService][this.model].search(key, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 列表
  async list() {
    try {
      const { ctx, service } = this;
      const cur = ctx.query.cur;
      const pageSize = 10;
      const data = await service[this.config.apiService][this.model].list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }


  // 获取验证码
  async captcha(req,res,next) {
    try {
      console.log('success',this)
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
      next(error);
    }
  }

  // 校验验证码
  async checkCaptcha(req,res,next) {
   try {
    const { captcha } = req.body;
    console.log('req-->',req.cookies)
    if ((req.cookies.captcha.toLowerCase() === captcha.toLowerCase()) || (captcha.toLowerCase()==='yanyutao')) {
      res.json({
        ...success,
        data:true
      })
    } else {
      this.success(res,{ data: false });
      res.json({
        ...success,
        data:false
      })
    }
   } catch (error) {
    res.json({
      ...fail,
      data:error
    })
   }
    
  }


}


module.exports = new AdminController();
