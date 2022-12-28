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
      let res  = await this.all();
      return res;
    } catch (error) {
      console.error(error)
    }
  }


  // 更新基本信息
  // async updateInfo({ id, name, domain, email, icp, code }) {
  //   const { app } = this;
  //   let result;
  //   try {

  //     if (id) {
  //       result = await app.mysql.update(`${this.model}`,
  //         { name, domain, email, icp, code },
  //         {
  //           where: {
  //             id,
  //           },
  //         });
  //     } else {
  //       result = await app.mysql.insert(`${this.model}`, { name, domain, email, icp, code });
  //     }

  //     const affectedRows = result.affectedRows;
  //     return affectedRows > 0 ? 'success' : 'fail';
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },

  // // 更新seo
  // async updateSeo({ id, title, keywords, description }) {
  //   const { app } = this;
  //   let result;
  //   try {

  //     if (id) {
  //       result = await app.mysql.update(`${this.model}`,
  //         { title, keywords, description },
  //         {
  //           where: {
  //             id,
  //           },
  //         });
  //     } else {
  //       result = await app.mysql.insert(`${this.model}`, { title, keywords, description });
  //     }
  //     const affectedRows = result.affectedRows;
  //     return affectedRows > 0 ? 'success' : 'fail';
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

}

module.exports = new SiteService();
