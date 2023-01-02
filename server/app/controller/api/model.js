'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');

const path = require('path');
const { success, fail, } = require('../../extend/api.js');
const { filterBody } = require('../../extend/helper.js');

const ModelService = require('../../service/api/model.js');
class ModelController extends BaseController {

  constructor(props) {
    super(props);
    this.model = 'model';
  }

  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      const has = await ModelService.findByName(body.model_name, body.table_name);
      if (has.length > 0) {
        this.fail({ msg: '模型命名已重复' });
        return;
      }
      const data = await ModelService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const body = req.request.body;
      const data = await ModelService.delete(body.id, body.table_name);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      const data = await ModelService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ModelService.detail(id);
      res.json({ ...success, data: data[0] });
    } catch (error) {
      next(error);
    }
  }


  // 是否被使用
  async hasUse(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ModelService.hasUse(id);
      res.json({ ...success, data: data[0] });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await ModelService.list(cur, pageSize);
      console.log('data--->',data);

      res.json({ ...success, data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ModelController();
