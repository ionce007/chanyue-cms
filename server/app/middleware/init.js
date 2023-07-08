const { tree } = require('../extend/helper.js');
const {template} = require('../config/config.js');
const HomeService = require(`../service/web/${template}/home.js`);
const SiteService = require('../service/api/site.js');
const FriendlinkService = require('../service/api/friendlink');

module.exports = () => {
  return async (req, res, next) => {
    if ('site' in res.locals) {
      await next();
      return;
    }
    // 站点
    const site = await SiteService.find();
    // 导航
    const category = await HomeService.category();
    const nav = tree(category);
    // 友情链接
    const friendlink = await FriendlinkService.list();
    const base_url = `/public/template/${template}`;
    res.locals = { site, nav, category, friendlink, base_url };
    await next();
  }
}