const db = require('../../config/db');
let slide = {

    //add
    'add':`INSERT INTO ys_slide (img,url,title,info,state,date) VALUES (?,?,?,?,?,NOW())`,
    //轮播列表
    'query':`SELECT id,url,title,state,img FROM ys_slide ORDER BY state DESC,date DESC LIMIT ?,?`,
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_slide',
    //查找单一轮播
   'queryOne':'SELECT id,img,url,title,info,state,date FROM ys_slide WHERE id=? LIMIT 1',
    //开启轮播
    'stateSure':'UPDATE ys_slide SET state=1 WHERE id=? LIMIT 1;',
    //关闭轮播
    'stateCancel':'UPDATE ys_slide SET state=0 WHERE id=? LIMIT 1;',
    //删除
    'del': (str) => { return `DELETE FROM ys_slide WHERE id in (${str})`},
    //?
    'update':'UPDATE ys_slide SET img=?,url=?,title=?,info=?,state=? WHERE id=? LIMIT 1'
};

module.exports = slide;