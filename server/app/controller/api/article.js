'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');

const path = require('path');

class ArticleController extends BaseController {


  constructor(props) {
    super(props);
    this.model = 'article';
  }

  // 增
  async create() {
    try {
      const { ctx, service } = this;
      const body = ctx.request.body;
      body.defaultParams.createdAt = dayjs(body.defaultParams.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.defaultParams.updatedAt = dayjs(body.defaultParams.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      body.defaultParams.content = ctx.helper.filterBody(body.defaultParams.content);
      const data = await service[this.config.apiService][this.model].create({ ...body });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 删除
  async delete() {
    try {
      const { ctx, service } = this;
      const id = ctx.query.id;
      const data = await service[this.config.apiService][this.model].delete(id);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 改
  async update() {
    try {
      const { ctx, service } = this;
      const body = ctx.request.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      body.content = ctx.helper.filterBody(body.content);
      const data = await service[this.config.apiService][this.model].update({ ...body });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 查
  async find() {
    try {
      const { ctx, service } = this;
      ctx.logger.debug('ctx', ctx);
      const data = await service[this.config.apiService][this.model].find();
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 查
  async detail() {
    try {
      const { ctx, service } = this;
      const id = ctx.query.id;
      const data = await service[this.config.apiService][this.model].detail(id);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 查子栏目
  async findSubId() {
    try {
      const { ctx, service } = this;
      const id = ctx.query.id;
      const data = await service[this.config.apiService][this.model].findSubId(id);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 搜索
  async search() {
    try {
      const { ctx, service } = this;
      const cur = ctx.query.cur;
      const key = ctx.query.keyword;
      const cid = ctx.query.cid || 0; // 所属栏目
      const pageSize = ctx.query.pageSize || 10;
      const data = await service[this.config.apiService][this.model].search(key, cur, pageSize, cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 列表
  async list() {
    try {
      const { ctx, service } = this;
      const cur = ctx.query.cur;
      const pageSize = 10;
      const data = await service[this.config.apiService][this.model].list(cur, pageSize);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }

  // 上传图片
  async upload(req,res,next) {
    try {
      let file = req.file;
      this.success({ link: file.path, domain: '//' + ctx.host });
    } catch (error) {
      this.fail(error);
    }
  }

  async findField() {
    try {
      const { ctx, service } = this;
      const cid = ctx.query.cid;
      const data = await service[this.config.apiService][this.model].findField(cid);
      this.success(data);
    } catch (error) {
      this.fail(error);
    }

  }

  async tongji() {
    try {
      const { service } = this;
      const data = await service[this.config.apiService][this.model].tongji();
      this.success(data);
    } catch (error) {
      this.fail(error);
    }
  }
}

module.exports = new ArticleController();
