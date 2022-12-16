const config = require('../../../config/config');
const db = require(config.db_url);
let index = {
    //查询所有子导航
    'queryChildNav':'SELECT id,nav_name,sort FROM ys_nav WHERE pid=? ORDER BY sort ASC',
    'queryList': function(str){
                    return 'SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM ys_article a,ys_nav n WHERE a.nav=n.id AND nav IN ('+str+') ORDER BY a.date DESC LIMIT ?,?'
                },
     //获取本月、本类、推荐排行榜，10条
     'getMonthNavRec':"SELECT id,title,date FROM ys_article WHERE attr LIKE'%推荐%' AND MONTH(NOW())=DATE_FORMAT(date,'%c') AND nav IN (?) ORDER BY date DESC LIMIT 0,10",
      //获取本月、本类、图文排行榜，10条
      'getMonthNavPic':"SELECT id,title,date FROM ys_article WHERE thumbnail<>'' AND MONTH(NOW())=DATE_FORMAT(date,'%c') AND nav IN (?) ORDER BY date DESC LIMIT 0,10",
      //获取本月、本类、hot排行榜，10条
      'getMonthNavHot':`SELECT 
                            a.id,
                            a.title,
                            a.date 
                        FROM 
                            ys_article a 
                        WHERE 
                           MONTH(NOW())=DATE_FORMAT(date,'%c') 
                        AND 
                            nav IN (?) 
                        ORDER BY 
                            (SELECT 
                                COUNT(*) 
                            FROM 
                                ys_comment c 
                            WHERE 
                                c.aid = a.id) DESC 
                       LIMIT 0,10`
     
    
};

module.exports = index;