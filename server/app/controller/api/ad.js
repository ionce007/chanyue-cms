'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const { md5, setToken } = require('../../extend/helper.js');

const AdService = require('../../service/api/ad.js');

class AdController extends BaseController {
  constructor(props) {
    super(props);
    this.model = 'ad';
  }

  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await AdService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id =  req.query.id;
      const data = await AdService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await AdService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async find(req, res, next) {
    try {
      const id = req.query.id;
      const data = await AdService.find(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await AdService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
 

  // 查子栏目
  async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await AdService.findSubId(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 搜索
  async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = req.query.pageSize || 10;
      const data = await AdService.search(key, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await AdService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 上传图片
  async upload(req,res,next) {
    try {
      let file = req.file;
      const link = { link: res.link.replace(/\\/g, '/') };
      res.json({ ...success, data: { link: link.link, location: link.link }});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdController();
