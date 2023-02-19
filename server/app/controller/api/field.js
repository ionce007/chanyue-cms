'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail, } = require('../../extend/api.js');
const { filterBody } = require('../../extend/helper.js');
const FieldService = require('../../service/api/field.js');

class FieldController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const has = await FieldService.findByName(body.field_cname, body.field_ename);

     
      if (has.length > 0) {
        res.json({ ...fail, msg: '字段命名已重复' });
        return;
      }
      const data = await FieldService.create(body);

      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await FieldService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await FieldService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await FieldService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表 
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const model_id = req.query.model_id;
      const pageSize = 10;
      const data = await FieldService.list(model_id, cur, pageSize);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FieldController;
