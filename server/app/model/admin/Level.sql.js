const db = require('../../config/db');
let level = {
    //管理员级别
    'query':'SELECT id,level_name,level_info,permission FROM ys_level ORDER BY id ASC',
    //查询一条数据    
    'queryOne':'SELECT id,level_name,level_info,permission FROM ys_level WHERE id=? LIMIT 1',
    //增加前先判断是否占用
    'isrepeat':'SELECT level_name FROM ys_level WHERE level_name=? LIMIT 1',
    //增加        
    'add':'INSERT INTO ys_level(level_name,level_info,permission) VALUES(?,?,?)',
    //删除
    'del':'DELETE FROM ys_level WHERE id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_level SET level_name=?,level_info=?,permission=? WHERE id=? LIMIT 1',
    //有管理员使用当前权限等级，则不能删除
    'isDel':'SELECT level FROM ys_admin WHERE level=? LIMIT 1'
};

module.exports = level;