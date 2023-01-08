'use strict';
const knex = require('../../../config/config.knex.js');

const BaseService = require('./base');

class HomeService extends BaseService {
  constructor(props) {
    super(props);
    this.model = 'home';
  }

  // 网站栏目
  async category() {
    try {
      let res = await knex('category').select(['id','pid','name','sort','target','status','type']);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  
   // 广告
  async ad(platform = 1, position = 1) {
    try {
      let res = await knex('ad').where({
        platform: `${platform}`,
        position: `${position}`,
        status: '1'
      }).select(['id', 'title', 'mark', 'imgUrl', 'link']);
      return res;
    } catch (err) {
      console.error(`platform-> ${platform} position->${position}`, err);
    }
  }

  // 轮播图 1头条 2推荐 3最新 4热门
  async swiper(attr = 2) {
    try {
      const imgStr = `SELECT id,cid,title,short_title,img FROM article where attr LIKE \'%?%\' AND img!=\'\' ORDER BY createdAt DESC LIMIT 0,5`;
      const swiper = await knex.raw(imgStr,[attr]);
      return swiper[0];
    } catch (err) {
      console.error(err);
    }
  }


  // 栏目列表 1头条 2推荐 3最新 4热门
  async list(id, attr, len = 5) {
   
    try {

      // 获取所有id
      const res = await knex.raw('SELECT id FROM category WHERE pid=?', [id]);
      let ids = [id];
      res[0].forEach(item => {
        ids.push(item.id);
      });
      ids = ids.join(',');

      // 获取栏目
      const category = await knex.raw('SELECT id,name FROM category WHERE id=?', [id]);

      let sql,
        result;
      if (attr) {
        sql = `SELECT id,title,short_title,img,description,createdAt from article WHERE cid IN (?) AND attr LIKE \'%?%\'  ORDER BY createdAt DESC LIMIT 0,${len}`;
        result = await knex.raw(sql, [ids, attr]);
      } else {
        sql = `SELECT id,title,short_title,img,createdAt from article WHERE cid IN (?) ORDER BY createdAt DESC LIMIT 0,${len}`;
        result = await knex.raw(sql, [ids]);
      }
      // 提交事务
      return { category: category[0][0], list: result[0] };
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = new HomeService();
