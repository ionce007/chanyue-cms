'use strict';
const knex = require('../../config/config.knex.js');
const BaseService = require('./base');
const { delImg, filterImgFromStr } = require('../../extend/helper.js');

class ModelService extends BaseService {
  constructor(props) {
    super(props);
    this.model = 'model';
  }

  // 增
  async create(body) {
    try {
      const { model_name, table_name, status } = body;
      await knex.transaction(async trx => {
        // 新建表
        const sql_create = `CREATE TABLE ${table_name} (aid int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8`;
        const createTableStatus = await trx.raw(sql_create, []);
        // 新增内容
        const sql_insert = `INSERT INTO ${this.model} (model_name,table_name,status) VALUES(?,?,?)`;
        const result = await trx.raw(sql_insert, [model_name, table_name, status])
        return {
          insertStatus: result[0],
          createTableStatus: createTableStatus[0],
        };
      });
    } catch (err) {
      console.error(err);
    }
  }

  async hasUse(id) {
    try {
      // 新增内容
      const hasStr = `SELECT COUNT(*) as count FROM  article a LEFT JOIN category c ON c.mid=${id} WHERE a.cid=c.id LIMIT 0,1`;
      const has = await trx.raw(hasStr)
      return {
        has: has[0],
      };
    } catch (err) {
      console.error(err);
    }
  }

  // 删
  async delete(id, table_name) {
    try {
      await knex.transaction(async trx => {
        // 删除模型
        const result = await trx(this.model).where('id', '=', id).del()
        // 删除模型下对应得字段数据
        const delField = await trx(this.model).where('model_id', '=', id).del()
        // 删除模型对应的表
        const delTable = await trx.raw(`drop table ${table_name}`);
        return {
          delModel: result === 1,
          delField: delField === 1,
          delTable: delTable === 1,
        };
      });
    } catch (err) {
      console.error(err);
    }

  }

  // 改
  async update(params) {
    const { id, old_table_name, table_name, model_name, status } = params;
    try {
      await knex.transaction(async trx => {
        const renameTable = await trx.raw(`alter table ${old_table_name} rename to ${table_name}`);
        const result = knex(this.model).where('id', '=', id).update({ table_name, model_name, status });
        return {
          renameStatus: renameTable,
          updateStatus: result,
        };
      })

    } catch (err) {
      console.error(err);
    }
  }


  // 查询是否已存在模型名称
  async findByName(model_name, table_name) {
    try {
      const result = knex.raw(`SELECT model_name,table_name from model WHERE model_name=? or table_name=? LIMIT 0,1`, [model_name, table_name]);
      return result[0];
    } catch (error) {
      console.log(error)
    }
  }

  // 文章列表
  async list(cur = 1, pageSize = 10) {
    try {
      const sql = `SELECT COUNT(id) as count FROM ${this.model}`;
      const total = await knex.raw(sql);
      console.log('total-->', total)
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select(['id', 'model_name', 'table_name', 'status'])
        .from(this.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');
      console.log('list-->', list)
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
  async detail(id) {
    try {
      const data = await knex(this.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new ModelService();
