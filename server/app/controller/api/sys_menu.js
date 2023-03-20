'use strict';
const BaseController = require('./base');
const { success } = require('../../extend/api.js');
const SysMenuService = require('../../service/api/sys_menu.js');
class SysMenuController extends BaseController {

  constructor(props) {
    super(props);
  }
  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await SysMenuService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SysMenuService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await SysMenuService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async find(req, res, next) {
    try {
      const data = await SysMenuService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SysMenuService.findId(id);
      res.json({ ...success, data: data});
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  static async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SysMenuService.findSubId(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 搜索栏目
  static async search(req, res, next) {
    try {
      const q = req.query.q;
      const data = await SysMenuService.search(q);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = SysMenuController;
