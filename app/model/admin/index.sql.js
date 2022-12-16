const db = require('../../config/db');
let index = {
    //当前用户 上次登录时间和ip
    'adminInfo':'SELECT last_time,last_ip FROM ys_admin WHERE id=?',
    //管理员总数
    'countAdminNum':'SELECT COUNT(id) as count from ys_admin',
    //注册用户数        
    'countUserNum':'SELECT COUNT(id) as count from ys_user',        
    //文档总数        
    'countArticleNum':'SELECT COUNT(id) as count from ys_article',
    //留言总数
    'countCommentNum':'SELECT COUNT(id) as count from ys_comment',
};

module.exports = index;