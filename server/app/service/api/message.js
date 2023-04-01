'use strict';
const BaseService = require('./base');
const knex = require('../../config/config.knex.js');

class MessageService extends BaseService {
  static model = 'message';
  constructor(props) {
    super(props);
    
  }

  // 新增
  static async create(body) {
    try {
      const result = await knex(MessageService.model).insert(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(MessageService.model).where('id', '=', id).del()
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
      const result = await knex(MessageService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(MessageService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select('*')
        .from(MessageService.model)
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


  // 查
  static async detail(id) {
    try {
      const data = await knex(MessageService.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {

    try {
      // 查询个数
      const total = key ? await knex(MessageService.model).count('id', { as: 'count' })
        : await knex(MessageService.model).whereLike('name', `%${key}%`).count('id', { as: 'count' });
      // 查询个数
      const offset = parseInt((cur - 1) * pageSize);
      const list = key ?
        await knex.select(['id', 'name', 'mark'])
          .from(MessageService.model)
          .whereLike('name', `%${key}%`)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc')
        : await knex.select(['id', 'name', 'mark'])
          .from(this.model)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc');

      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list[0],
      };
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = MessageService;
