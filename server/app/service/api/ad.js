"use strict";
const BaseService = require("./base");
const path = require("path");
const knex = require("../../config/config.knex.js");
const { delImg } = require("../../extend/helper.js");
class AdService extends BaseService {

  static model = 'ad'

  constructor(props) {
    super(props);
  }

  // 增
  static async create(body) {
    try {
      const result = await BaseService.insert(AdService.model,body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 删
  static async delete(id) {
    try {
      // 删除图片
      const imgStr = ` SELECT imgUrl FROM ad WHERE id=${id}`;
      const img = await knex.raw(imgStr);
      const imgUrl = img[0][0].imgUrl;
      if (imgUrl) {
        delImg(path.join(__dirname, "../../" + imgUrl));
      }
      // 删除广告
      const delAdStr = `DELETE FROM ${AdService.model} WHERE id IN(${id})`;
      const delAd = await knex.raw(delAdStr);
      return delAd ? "success" : "fail";
    } catch (err) {
      console.error(err);
    }
  }

  // 改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(AdService.model).where("id", "=", id).update(body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    // 查询个数
    const total = await knex(AdService.model).count("id", { as: "count" });
    const offset = parseInt((cur - 1) * pageSize);
    const list = await knex
      .select("*")
      .from(AdService.model)
      .limit(pageSize)
      .offset(offset)
      .orderBy("id", "desc");
      const count = total[0][0].count || 1;
    return {
      count: count,
      total: Math.ceil(count / pageSize),
      current: +cur,
      list: list,
    };
  }

  // 查
  static async detail(id) {
    try {
      const data = await knex(AdService.model).where("id", "=", id).select();
      return data[0];
    } catch (error) {
      console.log(error);
    }
  }

  // 搜索
  static async search(key = "", cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(AdService.model).count("id", { as: "count" });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex
        .select("*")
        .from(AdService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy("id", "desc");
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
}

module.exports = AdService;
