const db = require('../../../config/db');
let house = {
    'tuijian':`SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE attr LIKE '%推荐%' AND type=1 OR type=2 ORDER BY date DESC LIMIT 0,3`,
    'zhengzu':`SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE type=1 ORDER BY date DESC LIMIT 0,3`,
    'hezu':`SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE type=2 ORDER BY date DESC LIMIT 0,3`,
    

    'count':`SELECT COUNT('id') as count FROM m_house WHERE type=1 OR type=2`,
    'list': `SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE type=1 OR type=2 ORDER BY date DESC LIMIT ?,?`,
    'detail':'SELECT * FROM m_house WHERE id=?',
};

module.exports = house;