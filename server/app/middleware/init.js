const {tree} = require('../extend/helper.js');
const config = require('../config/config.js');
module.exports = ()=>{
  return async (req,res,next)=>{
    if ('site' in res.locals) {
      await next();
      return;
    }
    // 站点
    const site = await ctx.service[config.apiService].site.find();
    // 导航
    const category = await ctx.service[config.template].home.category();
    const nav =  tree(category);
    // 友情链接
    const friendlink = await ctx.service[config.apiService].friendlink.list();
    res.locals = { site, nav, category, friendlink };
    res.locals.base_url = '/public/template/' + config.template;
    await next();
  }
}