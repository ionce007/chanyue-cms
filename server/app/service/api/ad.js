'use strict';
const BaseService = require('./base');
const path = require('path');
const knex = require('../../config/config.knex.js');
const { delImg } = require('../../extend/helper.js');
class AdService extends BaseService {
  constructor(props) {
    super(props);
    this.model = 'ad';
  }

  // 增
  async create(body) {
    try {
      const result = await this.insert(body);
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 删
  async delete(id) {
    try {
      // 删除图片
      const imgStr = ` SELECT imgUrl FROM ad WHERE id=${id}`;
      const img = await knex.raw(imgStr);
      const imgUrl = img[0][0].imgUrl;
      if (imgUrl) {
        delImg(path.join(__dirname, '../../' + imgUrl));
      }
      // 删除广告
      const delAdStr = `DELETE FROM ${this.model} WHERE id IN(${id})`;
      const delAd = await knex.raw(delAdStr);
      return delAd ? 'success' : 'fail';
    } catch (err) {
      console.error(err);
    }
  }

  // 改
  async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(this.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 文章列表
  async list(cur = 1, pageSize = 10) {
    // 查询个数
    const total = await knex(this.model).count('id', { as: 'count' });
    const offset = parseInt((cur - 1) * pageSize);
    const list = await knex.select('*')
      .from(this.model)
      .limit(pageSize)
      .offset(offset)
      .orderBy('id', 'desc');

    return {
      count: total[0].count,
      total: Math.ceil(total[0].count / pageSize),
      current: +cur,
      list: list,
    };
  }

  // 查
  async detail(id) {
    try {
      const data = await knex(this.model).where('id', '=', id).select(['id', 'username', 'createdAt', 'updatedAt', 'status'])
      return data[0];
    } catch (error) {
      console.log(error)
    }
  }

  // 搜索
  async search(key = '', cur = 1, pageSize = 10) {

    try {
      const sql = `SELECT COUNT(id) as count FROM ${this.model}`;
      const total = await knex.raw(sql);
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select(['id', 'model_name', 'table_name', 'status'])
        .from(this.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');
      return {
        count: total[0][0].count,
        total: Math.ceil(total[0][0].count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AdService();
