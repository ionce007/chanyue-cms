const config = require('../../../config/config');
const db = require(config.db_url);
let index = {
    //查询所有栏目
    'queryNav':'SELECT id,nav_name FROM ys_nav  ORDER BY sort ASC LIMIT 0,10',
    //最新推荐7条
    'newRecList':`SELECT id,title,date FROM ys_article WHERE attr LIKE '%推荐%' ORDER BY date DESC LIMIT 0,7`,
    //获取本月的热点（点击量），总排行 7条
    'getMonthHotList':`SELECT id,title,date FROM ys_article WHERE MONTH(NOW())=DATE_FORMAT(date,'%c') ORDER BY count DESC LIMIT 0,7`,
    //获取本月的评论，总排行 7条
    'getMonthCommentList':`SELECT a.id,a.title,a.date FROM ys_article a WHERE
     MONTH(NOW())=DATE_FORMAT(a.date,'%c') ORDER BY (SELECT COUNT(*) FROM ys_comment c WHERE c.aid = a.id) DESC LIMIT 0,7`,
    //图文6条    
    'txtPic':`SELECT id,title,thumbnail FROM ys_article WHERE thumbnail<>'' ORDER BY date LIMIT 0,6`,    
    //最新头条
    'topOne':`SELECT id,title,info FROM ys_article WHERE attr LIKE '%头条%' ORDER BY date DESC LIMIT 1`,
    //最新头条(2-5)
    'topList':`SELECT id,title,info FROM ys_article WHERE attr LIKE '%头条%' ORDER BY date DESC LIMIT 1,4`,
    //获取最新10条
    'newsList':`SELECT id,title,date FROM ys_article ORDER BY date DESC LIMIT 0,10`,
    //获取主导航
    'category':'SELECT id,nav_name FROM ys_nav WHERE pid=0 ORDER BY sort ASC LIMIT 0,10',
    //获取每个主导航10条最新文档
    'listByCategoryId':'SELECT id,title,date FROM ys_article WHERE nav IN (SELECT id FROM ys_nav WHERE pid=?) ORDER BY date DESC LIMIT 0,11',
    //轮播列表
    'slideList':`SELECT id,url,title FROM ys_slide WHERE state=1 ORDER BY date DESC LIMIT 0,5`,
    
};

module.exports = index;