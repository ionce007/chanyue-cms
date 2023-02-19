'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const { success } = require('../../extend/api.js');
const { filterBody } = require('../../extend/helper.js');
const ArticleService = require('../../service/api/article.js');

class ArticleController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.defaultParams.createdAt = dayjs(body.defaultParams.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.defaultParams.updatedAt = dayjs(body.defaultParams.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      body.defaultParams.content = filterBody(body.defaultParams.content);
      const data = await ArticleService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

// 删除
static async delete(req, res, next) {
  try {
    const id = req.query.id;
    const data = await ArticleService.delete(id);
    res.json({ ...success, data: data });
  } catch (error) {
    next(error);
  }
}

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      body.content = filterBody(body.content);
      const data = await ArticleService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 查
  static async find(req, res, next) {
    try {
      const data = await ArticleService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ArticleService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  static async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ArticleService.findSubId(id);
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
      const cid = req.query.cid || 0; // 所属栏目
      const pageSize = req.query.pageSize || 10;
      const data = await ArticleService.search(key, cur, pageSize, +cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await ArticleService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 上传图片
  static async upload(req,res,next) {
    try {
      let file =  req.files;
      const {originalname,filename,path} = file[0];
      res.json({ ...success, data: { link: path.replace('app',''), domain: req.hostname ,originalname,filename,path:path.replace('app','')} });
    } catch (error) {
      next(error);
    }
  }

  static async findField(req,res,next) {
    try {
      const cid = req.query.cid;
      const data = await ArticleService.findField(cid);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  static async tongji(req,res,next) {
    try {
      const data = await ArticleService.tongji();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ArticleController;
