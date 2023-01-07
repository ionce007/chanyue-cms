'use strict';
const knex = require('../../config/config.knex.js');
const BaseService = require('./base');
class SiteService extends BaseService {

  constructor(props) {
    super(props)
    this.model = 'site'
  }

  // 基本信息
  async find() {
    try {
      let res = await this.all();
      return res[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 更新基本信息
  async updateInfo(body) {
    const { id } = body;
    delete body.id;
    
    try {
      if (id) {
        const result = await knex(this.model).where('id', '=', id).update(body)
        return result ? 'success' : 'fail';
      } else {
        const result = await this.insert(body);
        return result ? 'success' : 'fail';
      }
    } catch (error) {
      console.error(error)
    }
  }

  //  更新seo
  async updateSeo(body) {
    const { id } = body;
    delete body.id;
    try {
      if (id) {
        const result = await knex(this.model).where('id', '=', id).update(body)
        return result ? 'success' : 'fail';
      } else {
        const result = await this.insert(body);
        return result ? 'success' : 'fail';
      }
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = new SiteService();
