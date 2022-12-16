const config = require('../../../config/config');
const db = require(config.db_url);
let comment = {

    //新增评论
    'add':'INSERT INTO ys_comment(user,content,aid,date) VALUES(?,?,?,NOW())',
    //查询评论
    'query':'SELECT c.user,c.id,c.content,c.date,c.zan,u.face FROM ys_comment c LEFT JOIN ys_user u ON c.user = u.user WHERE c.state=1 AND c.aid=? ORDER BY c.date DESC LIMIT ?,?',
    //最新三条评论
    'queryNew':'SELECT c.user,c.content,c.date,c.zan,u.face FROM ys_comment c LEFT JOIN ys_user u ON c.user = u.user WHERE c.state=1 AND c.aid=? ORDER BY c.date DESC LIMIT 0,3',
    //最火三条评论 zan>0
    'queryNew':'SELECT c.user,c.content,c.date,c.zan,u.face FROM ys_comment c LEFT JOIN ys_user u ON c.user = u.user WHERE c.state=1 AND c.aid=? AND c.zan>0 ORDER BY c.zan DESC LIMIT 0,3',
    //获取总排行榜，文章的总评论量 从大到小，20条
    'queryTwentyComment':'SELECT a.id,a.title FROM ys_article a ORDER BY (SELECT COUNT(*) FROM ys_comment c WHERE c.state=1 AND c.aid = a.id) DESC LIMIT 0,20',
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_comment WHERE aid=? AND state=1',
    //点赞
    'zan':'UPDATE ys_comment SET zan=zan+1 WHERE id=? LIMIT 1'
    
};

module.exports = comment;