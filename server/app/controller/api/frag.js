'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');

const { success, fail } = require('../../extend/api.js');
const { md5, setToken } = require('../../extend/helper.js');
const config = require('../../config/config.js');
const FragService = require('../../service/api/frag.js');

class FragController extends BaseController {

  constructor(props) {
    super(props);
    this.model = 'frag';
  }

  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await FragService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await FragService.delete(id);
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
      const data = await FragService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async find(req, res, next) {
    try {
      const data = await FragService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await FragService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await FragService.findSubId(id);
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
      const pageSize = 10;
      const data = await FragService.search(key, cur, pageSize);
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
      const data = await FragService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new FragController();
