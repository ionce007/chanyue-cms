'use strict';
const BaseService = require('./base');
const knex = require('../../config/config.knex.js');
class AdminService extends BaseService {
  static model = 'admin';

  constructor(props) {
    super(props);
   
  }

  // 登录
  static async find(username, password) {
    try {
      const res = await knex(`${AdminService.model}`).where({
        username: `${username}`,
        password: `${password}`
      }).select(['id', 'username', 'status']);
      return res[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 增加
  static async create(body) {
    try {
      const result = await BaseService.insert(AdminService.model,body);
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(AdminService.model).where('id', '=', id).del()
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 修改
  static async update(body) {
    const {id} = body;
    delete body.id;
    try {
      const result = await knex(AdminService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(AdminService.model).count('id', {as: 'count'});
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select(['id','username','createdAt','updatedAt','status'])
        .from(AdminService.model)
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
      const data = await knex(AdminService.model).where('id', '=', id).select(['id', 'username', 'createdAt', 'updatedAt', 'status'])
      return data[0];
    } catch (error) {
      console.log(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const sql = `SELECT COUNT(id) as count FROM ? p  WHERE p.name LIKE '%${key}%'`;
      const total = await knex.raw(sql, [AdminService.model]);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.name,p.mark FROM ? p WHERE p.name LIKE '%${key}%' ORDER BY id DESC LIMIT ?,?`;
      const list = await knex.raw(sql_list, [AdminService.model, offset, parseInt(pageSize)]);
      const count = total[0][0].count || 1;
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

module.exports =  AdminService;
