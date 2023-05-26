"use strict";
const knex = require("../../../config/config.knex.js");
const BaseService = require("../../api/base.js");

class AppointmentService  {
  static model = 'appointment'
  constructor() {
  }

  // 网站栏目
  static async create(body) {
    try {
      const result = await BaseService.insert(AppointmentService.model, body)
      return result ? 'success' : 'fail'
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = AppointmentService;
