const db = require('../../config/db');
let article = {
    
    //增加        
    'add':'INSERT INTO ys_article(title,nav,attr,tag,keyword,thumbnail,source,author,info,content,comment,count,sort,gold,readlimit,date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    'queryArticleById':'SELECT * FROM ys_article WHERE id=?',
    'queryArticleImgById':'SELECT thumbnail,content FROM ys_article WHERE id=?',
    'update':'UPDATE ys_article SET title=?,nav=?,attr=?,tag=?,keyword=?,thumbnail=?,source=?,author=?,info=?,content=?,comment=?,count=?,sort=?,gold=?,readlimit=?,date=? WHERE id=? LIMIT 1',
    'del':(str)=>{ return `DELETE FROM ys_article WHERE id in (${str})`}
    
};

module.exports = article;