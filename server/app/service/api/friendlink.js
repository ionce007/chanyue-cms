'use strict';
const knex = require('../../config/config.knex.js');
const BaseService = require('./base');
class FriendlinkService extends BaseService {
  constructor(props) {
    super(props)
    this.model = 'friendlink'
  }
  // 新增
  async create(body) {
    try {
      const result = await knex(this.model).insert(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 删
  async delete(id) {
    try {
      const res = await knex(this.model).where('id', '=', id).del()
      return res ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 修改
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
  async list() {
    try {
      let res = await this.all();
      return res;
    } catch (err) {
      console.error(err);
    }
  }


  // 查
  async detail() {
    try {
      const result = this.detail(id);
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = key ? await knex(this.model).count('id', { as: 'count' })
        : await knex(this.model).whereLike('name', `%${key}%`).count('id', { as: 'count' });
      const offset = parseInt((current - 1) * pageSize);
      const list = key ?
        await knex.select(['id', 'name', 'mark'])
          .from(this.model)
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
        count: total[0].count,
        total: Math.ceil(total[0].count / pageSize),
        current: +current,
        list: list[0],
      };
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = new FriendlinkService();
