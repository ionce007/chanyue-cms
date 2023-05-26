"use strict";
const knex = require("../../../config/config.knex.js");

class CaseCategoryService  {
  constructor() {
  }

  static async list(id, current, pageSize) {
    try {
      // let ids = [];
      // const start = parseInt((current - 1) * pageSize);
      // // 获取所有id
      // if (id) {
      //   const res = await knex.raw("SELECT id FROM category WHERE pid=?", [id]);
      //   ids = [id];
      //   if (res[0].length > 0) {
      //     res[0].forEach((item) => {
      //       item.id && ids.push(item.id);
      //     });
      //   }
      // }

      // let idString = ids.join(",");
      // // 查询个数
      // let sql1 = `SELECT COUNT(id) as count FROM article WHERE cid IN (?)`;
      // let sql2 = `SELECT a.id,a.title,a.short_title,a.img,a.description,a.createdAt,a.author,a.pv,c.pinyin,c.name,c.path from article AS a LEFT JOIN category as c ON a.cid = c.id WHERE a.cid IN (?) ORDER BY createdAt DESC LIMIT ?,?`;
      // const total = await knex.raw(sql1, [ids]);
      // const result = await knex.raw(sql2, [ids, start, pageSize]);
      // const count = total[0].count || 1;
      // return {
      //   count,
      //   total: Math.ceil(count / pageSize),
      //   current: +current,
      //   list: result[0],
      // };
      return await knex('case_category').select()
    } catch (err) {
      console.error(`id->${id} current->${current} pageSize->${pageSize}`, err);
    }
  }
}

module.exports = CaseCategoryService;
