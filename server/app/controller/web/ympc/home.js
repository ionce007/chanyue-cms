'use strict';
const dayjs = require('dayjs');
const { template } = require('../../../config/config.js');
const AppointmentService = require(`../../../service/web/${template}/appointment.js`);
const CaseService = require(`../../../service/web/${template}/case.js`);
const CaseCategoryService = require(`../../../service/web/${template}/caseCategory.js`);
const { success, fail } = require('../../../extend/api.js');

class HomeController {
  constructor() {
  }

  static async index(req, res, next) {
    try {
      res.render(`web/${template}/index.html`, {  });
    } catch (error) {
      console.error(error);
    }
  }

  static async customercase(req, res, next) {
    try {
      const caseList = await CaseService.list()
      const caseCategoryList = await CaseCategoryService.list()
      console.log('caseCategoryList', caseCategoryList)
      res.render(`web/${template}/customercase.html`, { 
        caseList: caseList.map(item => {
          return {
            ...item,
            keywords: item.keywords.split(',')
          }
        }),
        caseCategoryList
       });
    } catch (error) {
      console.error(error);
    }
  }

  static async news(req, res, next) {
    try {
      res.render(`web/${template}/news.html`, {  });
    } catch (error) {
      console.error(error);
    }
  }

  static async about(req, res, next) {
    try {
      res.render(`web/${template}/about.html`, {  });
    } catch (error) {
      console.error(error);
    }
  }

  static async formAppointment(req, res, next) {
    try {
      console.log(req.body)
      const { phone, source } = req.body
      const data = await AppointmentService.create({ phone, source })
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  static async form(req, res, next) {
    try {
      console.log(req.body)
      const { name, phone, company, product, remarks, source } = req.body
      const data = await AppointmentService.create({ name, phone, company, product, remarks, source })
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

}

module.exports = HomeController;
