const config = require('../../../config/config');
const db = require(config.db_url);
let all = {
    //查询所有主导航
    'queryNav':'SELECT id,nav_name,type FROM ys_nav WHERE pid=0 ORDER BY sort ASC LIMIT 0,10',
    //查询所有子导航
    'queryChildNav':'SELECT id,nav_name,sort FROM ys_nav WHERE pid=? ORDER BY sort ASC',
    //查询单个栏目
    'queryOne':'SELECT id,pid,nav_name,nav_info FROM ys_nav WHERE id=? LIMIT 1',   
    //通过id查找子栏目id
    'queryChildId':'SELECT id FROM ys_nav WHERE pid=?',
    //查询栏目文章记录总数
    'countById':'SELECT COUNT(id) as count FROM ys_article',
   
    'queryArticleAll':'SELECT a.id,a.title,a.date,a.attr,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id ORDER BY id DESC LIMIT ?,?',
    'queryArticleById': function(str){
        return 'SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id AND nav IN ('+str+') ORDER BY id DESC LIMIT ?,?'
    },
    'countSubNavById':function(str){
        return 'SELECT COUNT(id) as count FROM ys_article WHERE nav IN ('+str+')'
     }
};

module.exports = all;