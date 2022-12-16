const db = require('../../../config/db');
let tag = {
    //新增
    'add':'INSERT INTO ys_tag (tagname) VALUES (?)',
    //发现一个
    'findOne':'SELECT id FROM ys_tag WHERE tagname=?',
    //更新
    'update':'UPDATE ys_tag SET count=count+1 WHERE tagname=?',

    'query':'SELECT tagname,count FROM ys_tag ORDER BY count DESC LIMIT 0,5'
    
    
};

module.exports = tag;