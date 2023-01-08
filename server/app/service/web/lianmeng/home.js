'use strict';
const BaseService = require('./base');

class HomeService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'home';
  }

  // 网站栏目
  async category() {
    const {
      app,
    } = this;
    // 初始化事务
    const conn = await app.mysql.beginTransaction();
    try {
      const navStr = 'SELECT id,pid,name,sort,target,status,type FROM category';
      const nav = await conn.query(navStr);
      // 提交事务
      await conn.commit();
      return nav;
    } catch (err) {
      console.error(err);
      await conn.rollback();
      throw err;
    }
  }

  // 广告
  async ad(platform = 1, position = 1) {
    const {
      app,
    } = this;
    // 初始化事务
    const conn = await app.mysql.beginTransaction();
    try {
      const adStr = `SELECT id,title,mark,imgUrl,link FROM ad WHERE platform=${platform} AND position=${position} AND status=1`;
      const ad = await conn.query(adStr);
      // 提交事务
      await conn.commit();
      return ad;
    } catch (err) {
      console.error(err);
      await conn.rollback();
      throw err;
    }

  }

  // 轮播图 1头条 2推荐 3最新 4热门
  async swiper(attr = 2) {
    try {
      const swiper = await this.app.mysql.query('SELECT id,cid,title,short_title,img FROM article where attr LIKE \'%?%\' AND img!=\'\' ORDER BY createdAt DESC LIMIT 0,5', [attr]);
      return swiper;
    } catch (error) {
      console.error(error);
    }
  }

  // 栏目列表 1头条 2推荐 3最新 4热门
  async list(id, attr, len = 5) {
    const {
      app,
    } = this;
    // 初始化事务
    const conn = await app.mysql.beginTransaction();
    try {

      // 获取所有id
      const res = await conn.query('SELECT id FROM category WHERE pid=?', [id]);
      let ids = [id];
      res.forEach(item => {
        ids.push(item.id);
      });
      ids = ids.join(',');

      // 获取栏目
      const category = await conn.query('SELECT id,name FROM category WHERE id=?', [id]);

      let sql,
        result;
      if (attr) {
        sql = `SELECT id,title,short_title,img,description,createdAt from article WHERE cid IN (?) AND attr LIKE \'%?%\'  ORDER BY createdAt DESC LIMIT 0,${len}`;
        result = await this.app.mysql.query(sql, [ids, attr]);
      } else {
        sql = `SELECT id,title,short_title,img,createdAt from article WHERE cid IN (?) ORDER BY createdAt DESC LIMIT 0,${len}`;
        result = await this.app.mysql.query(sql, [ids]);
      }
      // 提交事务
      await conn.commit();
      return { category: category[0], list: result };
    } catch (err) {
      console.error(err);
      await conn.rollback();
      throw err;
    }
  }

}

module.exports = HomeService;
