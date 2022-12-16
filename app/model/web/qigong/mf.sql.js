const db = require('../../../config/db');
let house = {
    'tuijianNew':`SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE attr LIKE '%推荐%' AND nav=2 AND (type=3 OR type=4) ORDER BY date DESC LIMIT 0,3`,
    'jingxuanNew':`SELECT id,title,thumbnail,mianji,type,price,addr FROM m_house WHERE nav=2 AND (type=3 OR type=4) ORDER BY date DESC LIMIT 0,9`,
    'tuijianOld':`SELECT id,title,thumbnail,type,price,addr FROM m_house WHERE attr LIKE '%推荐%' AND nav=3 AND (type=3 OR type=4) ORDER BY date DESC LIMIT 0,3`,
    'jingxuanOld':`SELECT id,title,thumbnail,mianji,type,price,addr FROM m_house WHERE nav=3 AND (type=3 OR type=4) ORDER BY date DESC LIMIT 0,9`,

    'count':`SELECT COUNT('id') as count FROM m_house WHERE type=3 OR type=4`,
    'countNew':`SELECT COUNT('id') as count FROM m_house WHERE nav=2 AND (type=3 OR type=4)`,
    'countOld':`SELECT COUNT('id') as count FROM m_house WHERE nav=3 AND (type=3 OR type=4)`,
    'list': `SELECT id,title,thumbnail,mianji,huxing,type,price,addr FROM m_house WHERE type=3 OR type=4 ORDER BY date DESC LIMIT ?,?`,
    'listNew': `SELECT id,title,thumbnail,mianji,huxing,type,price,addr FROM m_house WHERE nav=2 AND (type=3 OR type=4) ORDER BY date DESC LIMIT ?,?`,
    'listOld': `SELECT id,title,thumbnail,mianji,huxing,type,price,addr FROM m_house WHERE nav=3 AND (type=3 OR type=4) ORDER BY date DESC LIMIT ?,?`,
    'detail':'SELECT * FROM m_house WHERE id=?',
};

module.exports = house;