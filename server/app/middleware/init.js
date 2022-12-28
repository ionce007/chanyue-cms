const {tree} = require('../extend/helper.js');
const config = require('../config/config.js');

const SiteService = require('../service/api/site.js');
const HomeService = require('../service/qigong/home.js')
console.log(SiteService)
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
     //const nav =  tree(category);
    // // 友情链接
    // const friendlink = await ctx.service[config.apiService].friendlink.list();
    // res.locals = { site, nav, category, friendlink };
    // res.locals.base_url = '/public/template/' + config.template;
    res.status(200).send(category);
    //await next();
  }
}