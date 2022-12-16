const db = require('../../config/db');
let admin = {
    //查询所有管理员
    'query':'SELECT a.id,a.admin_user,a.login_count,a.last_ip,a.last_time,l.level_name FROM' +
            ' ys_admin a,ys_level l ' +
            'WHERE l.id=a.level ' +
            'ORDER BY id DESC' +
            ' LIMIT ?,?',
    //判断管理员是否存在        
    
    'hasAdmin':'SELECT admin_user,id,admin_pass,login_count FROM ys_admin WHERE admin_user=? AND admin_pass=? LIMIT 1',        
    //通过id查找管理员        
    'queryOne':'SELECT id,admin_user,level FROM ys_admin WHERE id=? LIMIT 1',
    'isrepeat':'SELECT admin_user FROM ys_admin WHERE admin_user=? LIMIT 1',
    //增加        
    'add':'INSERT INTO ys_admin(admin_user,admin_pass,level,reg_time) VALUES(?,?,?,NOW())',
    //删除
    'del':'DELETE FROM ys_admin WHERE id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_admin SET admin_pass=?,level=? WHERE id=? LIMIT 1',
    //查询记录总数
    'count':'SELECT COUNT(id) as count FROM ys_admin',
    //记录每次登陆信息 登录次数 登录ip 登录时间
    'updateLoginInfo':'UPDATE ys_admin SET login_count=login_count+1,last_ip=?,last_time=NOW() WHERE admin_user=? LIMIT 1'
  
    
};

module.exports = admin;