const db = require('../../config/db');
let system = {
    
    'query':`SELECT id,webname,keyword,description,weburl,email,copyright,code FROM ys_system`,
    'add':'INSERT INTO ys_system (webname,keyword,description,weburl,email,copyright,code) VALUES (?,?,?,?,?,?,?)',
    'update':'UPDATE ys_system SET webname=?,keyword=?,description=?,weburl=?,email=?,copyright=?,code=? WHERE id=? LIMIT 1'
};

module.exports = system;