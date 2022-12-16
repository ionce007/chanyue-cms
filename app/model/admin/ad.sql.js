const db = require('../../config/db');
let ad = {
    //add 
    'add':'INSERT INTO ys_ad (title,url,img,type,state,date) VALUES (?,?,?,?,?,NOW())',
    //广告列表
    'query':'SELECT id,url,title,img,type,state FROM ys_ad ORDER BY date DESC LIMIT ?,?',
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_ad',
    //查找单一广告
   'queryOne':'SELECT id,title,url,img,type,state,date FROM ys_ad WHERE id=? LIMIT 1',
    //开启广告
    'stateSure':'UPDATE ys_ad SET state=1 WHERE id=? LIMIT 1;',
    //关闭广告
    'stateCancel':'UPDATE ys_ad SET state=0 WHERE id=? LIMIT 1;',
    //删除
    'del':(str)=>{ return `DELETE FROM ys_ad WHERE id in (${str})`},
    //更新
    'update':'UPDATE ys_ad SET title=?,url=?,img=?,state=?,type=? WHERE id=? LIMIT 1'
};

module.exports = ad;