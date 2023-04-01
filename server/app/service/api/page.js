'use strict';
const knex = require('../../config/config.knex.js');
const BaseService = require('./base');
const {delImg,filterImgFromStr} = require('../../extend/helper.js');

const path = require('path');
async function getImgsByPageId(id, arr, ctx) {
  const imgStr = ` SELECT content FROM page WHERE id=${id}`;
  const img =  await knex.raw(imgStr, []);
  if (img[0].length > 0) {
    const contImgArr =  filterImgFromStr(img[0].content);
    for (let i = 0; i < contImgArr.length; i++) {
      arr.push(contImgArr[i]);
    }
  }
}


class PageService extends BaseService {
  static model = 'page';
  constructor(props) {
    super(props)
  }


    // 增
    static async create(body) {
      const { app } = this;
      try {
        const result = await BaseService.insert(PageService.model,body);
        return result ? 'success' : 'fail';
      } catch (error) {
        console.error(error)
      }
    }

  

  // 删
  static async delete(id) {

    try {
      const ids = id.split(',');
      let arr = [];
      for (let i = 0, item; i < ids.length; i++) {
        item = ids[i];
        // 获取批量页面缩略图和内容图片路径
        await getImgsByPageId(item, arr, ctx);
      }
      // 过滤外链中的图片
      arr = arr.filter(item => {
        return item.includes('public/uploads');
      });

      // 批量删除页面图片
      if (arr.length > 0) {
        for (let i = 0, item; i < arr.length; i++) {
          item = arr[i];
          delImg(path.join(__dirname, '../../' + item));
        }
      }

      // 批量删除页面
      const delPageStr = `DELETE FROM ${PageService.model} WHERE id IN(${id})`;
      const delPage = await knex.raw(delPageStr, [])

      return delPage ? 'success' : 'fail';
    } catch (err) {
      console.error(err);
     
    }

  }


  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(PageService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

// 列表
static async list(cur = 1, pageSize = 10) {
  try {
    // 查询个数
    const total = await knex(PageService.model).count('id', {as: 'count'});
    const offset = parseInt((cur - 1) * pageSize);
    const list = await knex.select('*')
      .from(PageService.model)
      .limit(pageSize)
      .offset(offset)
      .orderBy('id', 'desc');
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


  // 查
  static async detail(id) {
    try {
      const data = await knex(PageService.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }

  // 文章内容
  static async article(cid) {
    try {
      // 通过栏目id查找模型id
      const res = await knex(PageService.model).where('cid', '=', cid).select().limit(1);
      return res[0];

    } catch (error) {
      console.error(error)
    }
  }


  // 增加计数器
  static async count(id) {
    try {
      const result = await knex.raw(`UPDATE page SET pv=pv+1 WHERE id=? LIMIT 1`, [id]);
      return result[0].affectedRows ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const sql = `SELECT COUNT(*) as count FROM  page p LEFT JOIN category c ON p.cid=c.id WHERE p.title LIKE '%${key}%'`;
      const total = await knex.raw(sql, []);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.title,p.cid,p.pv,p.updatedAt,p.status,c.name FROM ${this.model} p LEFT JOIN category c ON p.cid=c.id WHERE p.title LIKE '%${key}%' LIMIT ${offset},${parseInt(pageSize)}`;
      const list = await knex.raw(sql_list, []);
      const count = total[0][0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list[0],
      };
      
    } catch (err) {
      console.error(err)
    }

  }

}

module.exports = PageService;
