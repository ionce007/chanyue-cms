"use strict";
const BaseService = require("./base");
const knex = require("../../config/config.knex.js");
class SysMenuService extends BaseService {
  static model = "sys_menu";
  constructor(props) {
    super(props);
  }

  // 增
  static async create(body) {
    const { app } = this;
    try {
      const result = await BaseService.insert(SysMenuService.model, body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(SysMenuService.model)
        .where("id", "=", id)
        .del();
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(SysMenuService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 查全部栏目
  static async find() {
    try {
      const result = await BaseService.all(SysMenuService.model);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // 查栏目
  static async findId(id) {
    try {
      const data = await knex(SysMenuService.model)
        .where("id", "=", id)
        .select();
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }

  // 查子栏目
  static async findSubId(id) {
    try {
      const result = await knex(SysMenuService.model)
        .where("pid", "=", id)
        .select();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // 搜索栏目
  static async search(key) {
    try {
      const result = key
        ? await knex(SysMenuService.model)
            .whereLike("name", `%${key}%`)
            .orderBy("id", "desc", "sort")
        : await knex(SysMenuService.model).orderBy("id", "asc", "sort");
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = SysMenuService;
