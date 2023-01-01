'use strict';
const BaseService = require('./base');
const knex = require('../../config/config.knex.js');
class CategoryService extends BaseService {
  constructor(props) {
    super(props);
    this.model = 'category';
  }

  // 增
  async create(body) {
    const { app } = this;
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

  // 查全部栏目
  async find() {
    try {
      const result = await this.all();
      console.log('result->', result)
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  // 查栏目
  async findId(id) {
    try {
      const result = this.detail(id);
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  // 查子栏目
  async findSubId(id) {
    try {
      const result = await knex(this.model).where('pid', '=', id).select();
      return result[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索栏目
  async search(key) {
    try {
      const result = key ? await knex(this.model).whereLike('name', `%${key}%`).orderBy('id', 'desc', 'sort') 
      : await knex(this.model).orderBy('id', 'desc', 'sort');
      return result;
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = new CategoryService();
