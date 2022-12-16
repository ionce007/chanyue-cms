const db = require('../../config/db');
let nav = {
    //查询所有栏目 
    'queryAll':'SELECT id,pid,nav_name,type,sort,level FROM ys_nav ORDER BY pid,sort',
    //查询单个栏目
    'queryOne':'SELECT id,pid,nav_name,nav_info,sort,level FROM ys_nav WHERE id=? LIMIT 1',  
    //查询页面单个栏目
    'queryPageOne':'SELECT nav_id,title,source,author,content,date FROM ys_nav_page WHERE nav_id=? LIMIT 1',       
    //查询记录总数
    'count':'SELECT COUNT(id) as count FROM ys_nav',
    //查看是否有子栏目
    'hasSubNav':'SELECT nav_name FROM ys_nav WHERE pid=? LIMIT 1',
    'hasArticle':'SELECT a.id FROM ys_article a,ys_nav n WHERE n.id = a.nav AND n.id=? LIMIT 1',
    //查看栏目是否存在
    'hasNav':'SELECT nav_name FROM ys_nav WHERE nav_name=? LIMIT 1',
    //增加        
    'add':'INSERT INTO ys_nav(nav_name,nav_info,pid,sort,level,type) VALUES(?,?,?,?,?,?)',
    
    'pageAdd':'INSERT INTO ys_nav_page(nav_id,title,source,author,content,date) VALUES(?,?,?,?,?,?)',
    //删除
    'del':'DELETE FROM ys_nav WHERE id=? LIMIT 1',
    'delPageNav':'DELETE FROM ys_nav_page WHERE nav_id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_nav SET nav_name=?,nav_info=?,pid=?,sort=?,level=? WHERE id=? LIMIT 1',
    'updatePageNav':'UPDATE ys_nav_page SET content=?,title=?,source=?,author=?,date=? WHERE nav_id=? LIMIT 1',
    'nextId':"SHOW TABLE STATUS LIKE 'ys_nav'",
    //更新sort
    'updateSort':'UPDATE ys_nav SET sort=? WHERE id=? LIMIT 1'
    
};

module.exports = nav;