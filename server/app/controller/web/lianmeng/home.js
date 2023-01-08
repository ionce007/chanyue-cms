'use strict';
const dayjs = require('dayjs');
const { template } = require('../../../config/config.js');
const HomeService = require(`../../../service/web/${template}/home.js`);
const { getChildrenId, treeById, tree } = require('../../../extend/helper.js');
const ArticleService = require('../../../service/api/article.js');
const PageService = require('../../../service/api/page.js');
const SiteService = require('../../../service/api/site.js');

class HomeController {

  // 首页
  async index(req, res, next) {
    try {
      // 广告
      let ad = await HomeService.ad(1, 1);
      const obj = {};
      ad.forEach(item => {
        obj[item.mark] = item;
      });
      ad = obj;

      // 轮播
      const swiper = await HomeService.swiper();
      swiper.forEach(ele => {
        ele.img = ele.img ? ele.img.replace('../', '/public/') : ele.img;
      });

      // 新闻推荐
      const news = await HomeService.list(2, 1, 3);
      news.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });
      const _new = await HomeService.list(2, 3, 3);
      _new.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });
      news.new = _new.list;

      // 健康健美长寿论坛
      const forum = await HomeService.list(3, 0, 8);
     
      forum.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
        item.img = item.img ? item.img.replace('../', '/public/') : item.img;
      });

      // 大健康运动会
      const sports = await HomeService.list(4, 2, 24);
      sports.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
        item.img = item.img ? item.img.replace('../', '/public/') : item.img;
      });

      // 健康产业博览会
      const fair = await HomeService.list(5);
      fair.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      // 学术论文
      const learning = await HomeService.list(12, 0, 8);
      learning.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });
      await res.render(`web/${template}/${res.locals.views}/index.html`, { ad, swiper, news, forum, sports, fair, learning });

    } catch (error) {
      console.error(error)
    }
  }

  // 列表页
  async list(req, res, next) {
    try {

      const page = req.query.page || 1;
      const id = req.params.id;
      const pageSize = 10;

      if (!id) {
        res.redirect('/');
        return;
      }

      // 站点
      const site = await SiteService.find();

      // 导航
      const navSub = getChildrenId(id, res.locals.category);

      // 当前位置
      const position = treeById(id, res.locals.category);

      // 大健康运动会
      const sports = await HomeService.list(4, 1);
      sports.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      // 广告
      let ad = await HomeService.ad(1, 3);
      const obj = {};
      ad.forEach(item => {
        obj[item.mark] = item;
      });
      ad = obj;

      // 文章列表
      let ids;
      if (navSub.ids && navSub.ids.length > 0) {
        ids = navSub.ids.join(',');
      } else {
        ids = id;
      }

      const data = await ArticleService.list(page, pageSize, ids);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      await res.render(`web/${template}/${res.locals.views}/list.html`, { site, list: data, navSub, ad, sports, position });
    } catch (error) {
      console.error(error);
    }
  }

  // 详情页
  async article(req, res, next) {
    try {

      const id = req.params.id || '';
      const pageSize = 10;

      if (!id) {
        req.redirect('/');
        return;
      }

      // 文章列表
      const article = await ArticleService.detail(id);
      if (!article) {
        ctx.redirect('/');
        return;
      }
      // 栏目id
      const cid = article.cid || '';

      article.createdAt = dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss');
      article.updatedAt = dayjs(article.updatedAt).format('YYYY-MM-DD HH:mm:ss');

      // 大健康运动会
      const sports = await HomeService.list(4, 1);
      sports.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      // 广告
      let ad = await HomeService.ad(1, 3);
      const obj = {};
      ad.forEach(item => {
        obj[item.mark] = item;
      });
      ad = obj;

      // 子栏目
      const navSub = getChildrenId(cid, res.locals.category);

      // 当前位置
      const position = treeById(cid, res.locals.category);

      // 点击数量
      await ArticleService.count(id);

      // 上一页
      const pre = await ArticleService.pre(id, cid);

      // 下一页
      const next = await ArticleService.next(id, cid);

      await res.render(`web/${template}/${res.locals.views}/article.html`, { article, navSub, ad, sports, position, pre, next });
    } catch (error) {
      console.error(error);
    }
  }

  // 单页
  async page(req, res, next) {
    try {

      const id = req.params.id;

      if (!id) {
        res.redirect('/');
        return;
      }

      // 大健康运动会
      const sports = await HomeService.list(4, 1);
      sports.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      // 广告
      let ad = await HomeService.ad(1, 3);
      const obj = {};
      ad.forEach(item => {
        obj[item.mark] = item;
      });
      ad = obj;

      // 文章列表
      const article = await PageService.article(id);
      article.createdAt = dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss');
      article.updatedAt = dayjs(article.updatedAt).format('YYYY-MM-DD HH:mm:ss');

      // 当前栏目和当前栏目下所有子导航
      const navSub = getChildrenId(article.cid, res.locals.category);

      // 当前位置
      const position = treeById(article.cid, res.locals.category);

      // 点击数量
      await PageService.count(id);

      await res.render(`web/${template}/${res.locals.views}/page.html`, { article, navSub, ad, sports, position });

    } catch (error) {
      console.error(error);
    }
  }

  // 搜索页
  async search(req, res, next) {
    try {

      const page = req.query.page || 1;
      const keywords = req.query.keywords;
      const pageSize = 10;

      const site = await SiteService.find();

      // 导航
      const category = await HomeService.category();
      const nav = tree(category);

      // 大健康运动会
      const sports = await HomeService.list(4, 1);
      sports.list.forEach(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
      });

      // 广告
      let ad = await HomeService.ad(1, 3);
      const obj = {};
      ad.forEach(item => {
        obj[item.mark] = item;
      });
      ad = obj;
      // 文章列表

      const list = await ArticleService.search(keywords, page, pageSize);
      list.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });

      await res.render(`web/${template}/${res.locals.views}/search.html`, {
        site, keywords, list, nav,
        ad, sports
      });
    } catch (error) {
      console.error(error);
    }
  }


}

module.exports = new HomeController();
