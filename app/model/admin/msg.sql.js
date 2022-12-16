const db = require('../../config/db');
let msg = {
    //add
    'add':`INSERT INTO ys_msg (title,content,date) VALUES (?,?,NOW())`,
    //会员使用站内消息
    'query':`SELECT m.id,m.title,m.content,m.date,r.status FROM ys_msg m LEFT JOIN ys_msgread r ON r.user_id=? AND m.id=r.msg_id ORDER BY date DESC LIMIT ?,?`,
    'queryMsg':'SELECT id,title,content,date FROM ys_msg ORDER BY date DESC LIMIT ?,?',
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_msg',
    //查找单一广告
   'queryOne':'SELECT id,title,content,date FROM ys_msg WHERE id=? LIMIT 1',
    //删除
    'del':(str)=> `DELETE FROM ys_msg WHERE id in (${str})`,
    //删除阅读表数据
    'delRead':(str)=> `DELETE FROM ys_msgread WHERE msg_id in (${str})`,
    //更新
    'update':'UPDATE ys_msg SET title=?,content=? WHERE id=? LIMIT 1',
    
    'readmsg':'INSERT INTO ys_msgread (msg_id,user_id,status) VALUES (?,?,?)',
    'readMsgStateById':'SELECT msg_id,status FROM ys_msgread WHERE msg_id=? AND (status=1 OR status=2) LIMIT 1'
};

module.exports = msg;