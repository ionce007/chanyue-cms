'use strict';
const BaseService = require('./base');
const knex = require('../../config/config.knex.js');
class AdminService extends BaseService {
  constructor(props) {
    super(props);
    this.model = 'admin';
  }

  // 登录
  async find(username, password) {
    try {
      const res = await knex(`${this.model}`).where({
        username: `${username}`,
        password: `${password}`
      }).select(['id', 'username', 'status']);
      return res[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 增加
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
      const result = await knex(this.model).where('id', '=', id).del()
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 修改
  async update(body) {
    const {id} = body;
    delete body.id;
    try {
      const result = await knex(this.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 列表
  async list(current = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(this.model).count('id', {as: 'count'});
      const offset = parseInt((current - 1) * pageSize);
      const list = await knex.select('*')
        .from(this.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');

      return {
        count: total[0].count,
        total: Math.ceil(total[0].count / pageSize),
        current: +current,
        list: list,
      };
    } catch (err) {
      console.error(err);
    }
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
      // 查询个数
      const sql = `SELECT COUNT(id) as count FROM ? p  WHERE p.name LIKE '%${key}%'`;
      const total = await knex.raw(sql, [this.model]);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.name,p.mark FROM ? p WHERE p.name LIKE '%${key}%' ORDER BY id DESC LIMIT ?,?`;
      const list = await knex.raw(sql_list, [this.model, offset, parseInt(pageSize)]);
      return {
        count: total[0].count,
        total: Math.ceil(total[0].count / pageSize),
        current: +cur,
        list: list[0],
      };
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = new AdminService();
