'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const TagService = require('../../service/api/tag.js');
const {filterBody} = require('../../extend/helper.js');

class TagController extends BaseController {

  constructor(props) {
    super(props);
    this.model = 'tag';
  }

  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      body.content = filterBody(body.content);
      const data = await TagService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id = req.body.id;
      const data = await TagService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      const data = await TagService.updateInfo(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await TagService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 50;
      const data = await FragService.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  async has(req, res, next) {
    try {
      const path = req.query.path;
      const data = await FragService.has(path);
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
      const data = await FragService.search(key, cur, pageSize);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new TagController();
