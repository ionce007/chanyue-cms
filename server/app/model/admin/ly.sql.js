const db = require('../../config/db');
let ly = {
   
    'add':`INSERT INTO ys_ly (name,tel,addr,xiaoqu,other,date) VALUES (?,?,?,?,?,NOW())`,
   
    'query':`SELECT id,name,tel,addr,xiaoqu,other FROM ys_ly ORDER BY date DESC LIMIT ?,?`,
  
    'count':'SELECT COUNT(id) as count FROM ys_ly',
   
   'queryOne':'SELECT id,name,tel,addr,xiaoqu,other FROM ys_ly WHERE id=? LIMIT 1',
      
    'del':(str)=>{return `DELETE FROM ys_ly WHERE id in (${str})`},
   
    'update':'UPDATE ys_ly SET title=?,url=?,img=?,info=?,type=? WHERE id=? LIMIT 1'
};

module.exports = ly;