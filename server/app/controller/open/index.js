'use strict';
const OpenService = require("../../service/open/index.js");
const { success } = require("../../extend/api.js");

class OpenController{
  //60秒读懂世界 
  static async news60s(req,res,next) {
    const result = await OpenService.news60s();
    const {name,time,data} = result;
    res.render(`web/open/60s.html`, { name,time,data });
  }
}

module.exports = OpenController;

