const db = require('../../config/db');
let comment = {

    //评论列表
    'query':`SELECT c.id,c.aid,c.user,c.content,c.state,a.title FROM ys_comment c,ys_article a WHERE c.aid=a.id ORDER BY c.date DESC LIMIT ?,?`,
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_comment',
    //点赞
    'zan':'UPDATE ys_comment SET zan=zan+1 WHERE id=? LIMIT 1',
    //通过审核
    'stateSure':'UPDATE ys_comment SET state=1 WHERE id=? LIMIT 1;',
    //取消审核
    'stateCancel':'UPDATE ys_comment SET state=0 WHERE id=? LIMIT 1;',
    'del':(str) => `DELETE FROM ys_comment WHERE id in (${str})`,
    //通过会员用户名进行对这个会员所有数据进行删除操作
    'delByUser':'DELETE FROM ys_comment WHERE user=?'
};

module.exports = comment;