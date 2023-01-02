'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');

const path = require('path');

const { success, fail } = require('../../extend/api.js');
const { md5, setToken,filterBody } = require('../../extend/helper.js');
const config = require('../../config/config.js');
const ArticleService = require('../../service/api/article.js');

class ArticleController extends BaseController {


  constructor(props) {
    super(props);
    this.model = 'article';
  }

  // 增
  async create(req, res, next) {
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
async delete(req, res, next) {
  try {
    const id = req.query.id;
    const data = await ArticleService.delete(id);
    res.json({ ...success, data: data });
  } catch (error) {
    next(error);
  }
}

  // 改
  async update(req, res, next) {
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
  async find(req, res, next) {
    try {
      const data = await ArticleService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ArticleService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await ArticleService.findSubId(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }


  // 搜索
  async search(req, res, next) {
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
  async list(req, res, next) {
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
  async upload(req,res,next) {
    try {
      let file =  req.files;
      const {originalname,filename,path} = file[0];
      res.json({ ...success, data: { link: path.replace('app',''), domain: req.hostname ,originalname,filename,path:path.replace('app','')} });
    } catch (error) {
      next(error);
    }
  }

  async findField(req,res,next) {
    try {
      const cid = req.query.cid;
      const data = await ArticleService.findField(cid);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  async tongji(req,res,next) {
    try {
      const data = await ArticleService.tongji();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ArticleController();
