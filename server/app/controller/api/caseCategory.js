'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const CaseCateogryService = require('../../service/api/caseCategory.js');
const {filterBody} = require('../../extend/helper.js');

class CaseCateogryController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await CaseCateogryService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CaseCateogryService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await CaseCateogryService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CaseCateogryService.detail(id);
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
      const data = await CaseCateogryService.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  static async has(req, res, next) {
    try {
      const name = req.query.name;
      const data = await CaseCateogryService.has(name);
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
      const pageSize = req.query.pageSize || 10;
      const data = await CaseCateogryService.search(key, cur, pageSize);
      
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = CaseCateogryController;
