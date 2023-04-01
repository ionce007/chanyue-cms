'use strict';
const knex = require('../../config/config.knex.js');
const BaseService = require('./base');
class FriendlinkService extends BaseService {
  static model = 'friendlink';
  constructor(props) {
    super(props)
   
  }
  // 新增
  static async create(body) {
    try {
      const result = await knex(FriendlinkService.model).insert(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 删
  static async delete(id) {
    try {
      const res = await knex(FriendlinkService.model).where('id', '=', id).del()
      return res ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(FriendlinkService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }



  // 列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(FriendlinkService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select('*')
        .from(FriendlinkService.model)
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
  


  // 查
  static async detail(id) {
    try {
      const data = await knex(FriendlinkService.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = key ? await knex(FriendlinkService.model).count('id', { as: 'count' })
        : await knex(FriendlinkService.model).whereLike('name', `%${key}%`).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = key ?
        await knex.select(['id', 'name', 'mark'])
          .from(FriendlinkService.model)
          .whereLike('name', `%${key}%`)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc')
        : await knex.select(['id', 'name', 'mark'])
          .from(FriendlinkService.model)
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

module.exports =  FriendlinkService;
