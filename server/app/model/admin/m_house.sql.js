const db = require('../../config/db');
let article = {
    //增加        
    'add':'INSERT INTO m_house(title,nav,attr,tag,keyword,thumbnail,source,author,info,content,comment,count,sort,gold,readlimit,date,type,price,huxing,mianji,chaoxiang,fengge,xuexiao,quyu,addr,chuwei,kaipan_time,zhengjian,jiaotong,cur_louceng,total_louceng,zhuangtai) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    'queryArticleImgById':'SELECT thumbnail,content FROM m_house WHERE id=?',
    'update':'UPDATE m_house SET title=?,nav=?,attr=?,tag=?,keyword=?,thumbnail=?,source=?,author=?,info=?,content=?,comment=?,count=?,sort=?,gold=?,readlimit=?,date=?,type=?,price=?,huxing=?,mianji=?,chaoxiang=?,fengge=?,xuexiao=?,quyu=?,addr=?,chuwei=?,kaipan_time=?,zhengjian=?,jiaotong=?,cur_louceng=?,total_louceng=?,zhuangtai=? WHERE id=? LIMIT 1',
    'del':(str)=>{ return `DELETE FROM m_house WHERE id in (${str})`},
    //查询栏目文章记录总数
    'countById':'SELECT COUNT(id) as count FROM m_house',
    'queryArticleAll':'SELECT a.id,a.title,a.date,a.attr,a.info,a.thumbnail,a.count,n.nav_name FROM m_house a,ys_nav n WHERE a.nav=n.id ORDER BY id DESC LIMIT ?,?',
    'queryArticleById':'SELECT * FROM m_house WHERE id=?',
    'queryHouseById': function(str){
        return 'SELECT a.id,a.title,a.date,a.info,a.thumbnail,a.count,n.nav_name FROM m_house a,ys_nav n WHERE a.nav=n.id AND nav IN ('+str+') ORDER BY id DESC LIMIT ?,?'
    },
    'countSubNavById':function(str){
        return 'SELECT COUNT(id) as count FROM m_house WHERE nav IN ('+str+')'
     }
};

module.exports = article;