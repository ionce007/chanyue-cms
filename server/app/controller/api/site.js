'use strict';

const BaseController = require('./base');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const SiteService = require('../../service/api/site.js');

class SiteController extends BaseController {
  constructor(props) {
    super(props);
  }

  // 查
  static async find(req, res, next) {
    try {
      const data = await SiteService.find();
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }


  // 增 
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SiteService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async updateInfo(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.updateInfo(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  static async updateSeo(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.updateSeo(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SiteService.find(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 获取磁盘信息
  static async runEnv(req, res, next) {
    try {
      const dirname = path.join(__dirname, '../../../../');
      res.json({ ...success, data:{dirname: dirname} });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = SiteController;
