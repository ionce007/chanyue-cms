'use strict';

const BaseController = require('./base');
const dayjs = require('dayjs');
const svgCaptcha = require('svg-captcha');
const { success, fail } = require('../../extend/api.js');
const { md5, setToken } = require('../../extend/helper.js');
const config = require('../../config/config.js');
const AdminService = require('../../service/api/admin');

class AdminController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 登录
  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      const pass = md5(password + config.secret.key);
      const result = await AdminService.find(username, pass);
      if (result) {
        const { id, status } = result;
        // 设置token
        const token = setToken({ uid: id, username },
          config.token.KEY,
          config.token.TIME);
        const data = { id, status, username, token };
        res.json({ ...success, data: data })
      } else {
        res.json({ ...success, data: false })
      }
    } catch (error) {
      next(error);
    }
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.password = md5(body.password + config.secret.key);;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await AdminService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error)
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await AdminService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error)
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      body.password = md5(body.password + config.secret.key);

      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await AdminService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await AdminService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 搜索
  static async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = 10;
      const data = await AdminService.search(key, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await AdminService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 获取验证码
  static async captcha(req, res, next) {
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
      res.cookie("captcha", captcha.text);
      res.type = 'image/svg+xml'; // 知道你个返回的类型
      res.end(captcha.data); // 返回一张图片
    } catch (error) {
      next(error);
    }
  }

  // 校验验证码
  static async checkCaptcha(req, res, next) {
    try {
      const { captcha } = req.body;
      if ((req.cookies.captcha.toLowerCase() === captcha.toLowerCase()) || (captcha.toLowerCase() === 'yanyutao')) {
        res.json({ ...success, data: true })
      } else {
        res.json({ ...success, data: false })
      }
    } catch (error) {
      next(error);
    }
  }


}


module.exports = AdminController;
