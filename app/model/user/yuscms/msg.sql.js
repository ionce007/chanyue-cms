const db = require(config.db_url);
let msg = {
    
    //会员使用站内消息
    'query':`select id,title,content,date,status FROM (SELECT m.id,m.title,m.content,m.date,r.status FROM ys_msg m LEFT JOIN ys_msgread r ON r.user_id=? AND m.id=r.msg_id) t WHERE status !=2 OR status is null ORDER BY date DESC LIMIT ?,?`,
    //总条数
    'count':'SELECT COUNT(*) as count FROM (SELECT m.id,m.title,m.content,m.date,r.status FROM ys_msg m LEFT JOIN ys_msgread r ON r.user_id=? AND m.id=r.msg_id) t WHERE status !=2 OR status is null',
    //查找单一广告
    'queryOne':'SELECT id,title,content,date FROM ys_msg WHERE id=? LIMIT 1',
    //删除
    'del':'DELETE FROM ys_msg WHERE id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_msgread SET status=? WHERE msg_id=? AND user_id=? LIMIT 1',
    //新增阅读
    'readmsg':'INSERT INTO ys_msgread (msg_id,user_id,status) VALUES (?,?,?)',
    //判断会员是否已读这边文章
    'hasReading':'SELECT msg_id,user_id FROM ys_msgread WHERE msg_id=? AND user_id=? LIMIT 1',
    //判断会员是否已读
    'readMsgStateById':'SELECT msg_id,user_id,status FROM ys_msgread WHERE msg_id=? AND user_id=? AND status=1 LIMIT 1',
    //删除会员所有阅读记录《删除数据表》
    'delReadMsg':'DELETE FROM ys_msgread WHERE user_id=?'
};

module.exports = msg;