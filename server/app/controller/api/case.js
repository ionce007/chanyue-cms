'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const CaseService = require('../../service/api/case.js');
const {filterBody} = require('../../extend/helper.js');

class CaseController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await CaseService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CaseService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await CaseService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CaseService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 50;
      const data = await CaseService.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  static async has(req, res, next) {
    try {
      const path = req.query.path;
      const data = await CaseService.has(path);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 搜索
  static async search(req, res, next) {
    console.log('req', req.headers)
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = req.query.pageSize || 10;
      const data = await CaseService.search(key, cur, pageSize);
      
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = CaseController;
