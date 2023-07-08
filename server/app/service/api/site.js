"use strict";
const knex = require("../../config/config.knex.js");
const BaseService = require("./base");
class SiteService extends BaseService {
  static model = "site";
  constructor(props) {
    super(props);
  }

  // 基本信息
  static async find() {
    try {
      let res = await BaseService.all(SiteService.model);
      return res[0];
    } catch (error) {
      console.error(error);
    }
  }

  // 更新基本信息
  static async updateInfo(body) {
    const { id } = body;
    delete body.id;

    try {
      if (id) {
        const result = await knex(SiteService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
      } else {
        const result = await BaseService.insert(SiteService.model,body);
        return result ? "success" : "fail";
      }
    } catch (error) {
      console.error(error);
    }
  }

  //  更新seo
  static async updateSeo(body) {
    const { id } = body;
    delete body.id;
    try {
      if (id) {
        const result = await knex(SiteService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
      } else {
        const result = await BaseService.insert(SiteService.model,body);
        return result ? "success" : "fail";
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = SiteService;
