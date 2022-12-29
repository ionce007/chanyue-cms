const {tree} = require('../extend/helper.js');
const config = require('../config/config.js');
const SiteService = require('../service/api/site.js');
const HomeService = require('../service/qigong/home.js');
const FriendlinkService = require('../service/api/friendlink');

module.exports = ()=>{
  return async (req,res,next)=>{
    if ('site' in res.locals) {
      await next();
      return;
    }
    // 站点
    const site = await SiteService.find();
    // 导航
     const category = await HomeService.category();
     const nav =  tree(category);
     // 友情链接
     const friendlink = await FriendlinkService.list();
     const base_url = '/public/template/' + config.template;
     res.locals = { site, nav, category, friendlink,base_url };
     await next();
  }
}