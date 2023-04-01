'use strict';
const BaseService = require('./base');
const path = require('path');
const knex = require('../../config/config.knex.js');
const { delImg, filterImgFromStr } = require('../../extend/helper.js');

class FragService extends BaseService {
  static model = 'frag';
  constructor(props) {
    super(props);
    
  }
  // 新增
  static async create(body) {
    try {
      const result = await knex(FragService.model).insert(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(FragService.model).where('id', '=', id).del()
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(FragService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(FragService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select('*')
        .from(FragService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');
        const count = total[0][0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err);
    }
  }


  // 查
  static async detail(id) {
    try {
      const data = await knex(FragService.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {

    try {
      // 查询个数
      const total = key ? await knex(FragService.model).whereLike('name', `%${key}%`).count('id', { as: 'count' })
        : await knex(FragService.model).count('id', { as: 'count' });
      // 查询个数
      const offset = parseInt((cur - 1) * pageSize);
      const list = key ? 
      await knex.select(['id', 'name', 'mark'])
        .from(FragService.model)
        .whereLike('name', `%${key}%`)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc') 
        : await knex.select(['id', 'name', 'mark'])
          .from(FragService.model)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc');
        

      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports =  FragService;
