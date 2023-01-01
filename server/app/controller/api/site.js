'use strict';

const BaseController = require('./base');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const SiteService = require('../../service/api/site.js');

class SiteController extends BaseController {
  constructor(props) {
    super(props);
    this.model = 'site';
  }

  // 查
  async find(req, res, next) {
    try {
      const data = await SiteService.find();
      res.json({ ...success, data: data[0] })
    } catch (error) {
      next(error);
    }
  }


  // 增 
  async create(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id = req.body.id;
      const data = await SiteService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async updateInfo(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.updateInfo(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  async updateSeo(req, res, next) {
    try {
      const body = req.body;
      const data = await SiteService.updateSeo(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SiteService.find(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 获取磁盘信息
  async runEnv(req, res, next) {
    try {
      const dirname = path.join(__dirname, '../../../../');
      console.log('dirname-->',dirname);

      res.json({ ...success, data:{dirname: dirname} });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new SiteController();
