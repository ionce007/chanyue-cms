const db = require('../../config/db');
let link = {
   
    'add':`INSERT INTO ys_link (title,url,img,info,type,state,date) VALUES (?,?,?,?,?,1,NOW())`,
   
    'query':`SELECT id,url,title,img,type,state FROM ys_link ORDER BY date DESC LIMIT ?,?`,
  
    'count':'SELECT COUNT(id) as count FROM ys_link',
   
   'queryOne':'SELECT id,title,url,img,info,type,state,date FROM ys_link WHERE id=? LIMIT 1',
   
    // 'stateSure':'UPDATE ys_link SET state=1 WHERE id=? LIMIT 1;',

    // 'stateCancel':'UPDATE ys_link SET state=0 WHERE id=? LIMIT 1;',
   
    'del':(str)=>{return `DELETE FROM ys_link WHERE id in (${str})`},
   
    'update':'UPDATE ys_link SET title=?,url=?,img=?,info=?,type=? WHERE id=? LIMIT 1'
};

module.exports = link;