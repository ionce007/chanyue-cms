'use strict';
const BaseController = require('./base');
const { success } = require('../../extend/api.js');
const CategoryService = require('../../service/api/category.js');
class CategoryController extends BaseController {

  constructor(props) {
    super(props);
    this.model = 'category';
  }
  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      const data = await CategoryService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CategoryService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      const data = await CategoryService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async find(req, res, next) {
    try {
      const data = await CategoryService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CategoryService.findId(id);
      res.json({ ...success, data: data});
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await CategoryService.findSubId(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 搜索栏目
  async search(req, res, next) {
    try {
      const q = req.query.q;
      const data = await CategoryService.search(q);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new CategoryController();
