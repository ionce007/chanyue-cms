const db = require(config.db_url);
let order = {
    //add
    'add':`INSERT INTO ys_order (username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score) VALUES (?,?,?,?,?,?,?,?,?)`,
    //查找会员订单
    'query':`SELECT id,username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score FROM ys_order WHERE username=? ORDER BY date DESC LIMIT ?,?`,
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_order WHERE username=?',
    //总积分
    'score':'SELECT SUM(score) as score FROM ys_order WHERE username=?',
    //会员剩余水量
    'queryWater':'SELECT water,face FROM ys_user WHERE user=?',
    //查找订单详情
   'queryOne':'SELECT id,username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score FROM ys_order WHERE id=? LIMIT 1',
   
    //删除
    'del':'DELETE FROM ys_order WHERE id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_order SET product_name=?,capacity=?,product_price=?,buy_number=?,time=?,ps_person=?,ps_tel=?,score=? WHERE id=? LIMIT 1'
};

module.exports = order;