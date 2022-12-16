const config = require('../../../config/config');
const db = require(config.db_url);
let article = {
    //查询文章
    'queryArticle':'SELECT id,title,author,source,nav,info,date,tag,count,content FROM ys_article WHERE id=?',
    //查询单页
    'queryArticlePage':'SELECT title,source,author,count,content,date FROM ys_nav_page WHERE nav_id=?',
    //累计文章点击量
    'setCount':'UPDATE ys_article SET count=count+1 WHERE id=? LIMIT 1',
    //单页文章访问量
    'setCountPage':'UPDATE ys_nav_page SET count=count+1 WHERE nav_id=? LIMIT 1',
    //新增评论
    'add':'INSERT INTO ys_comment(user,content,aid,date) VALUES(?,?,?,NOW())',
    //上一篇文章
    'pre':'SELECT id,title FROM ys_article WHERE id<? ORDER BY id DESC LIMIT 1',
    //下一篇文章
    'next':'SELECT id,title FROM ys_article WHERE id>? LIMIT 1'
    
};

module.exports = article;