const db = require('../../config/db');
let order = {
    //add
    'add':`INSERT INTO ys_order (username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score) VALUES (?,?,?,?,?,?,?,?,?)`,
    //所有会员订单
    'query':`SELECT id,username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score FROM ys_order ORDER BY date DESC LIMIT ?,?`,
    //总条数
    'count':'SELECT COUNT(id) as count FROM ys_order',
    //查找订单详情
   'queryOne':'SELECT id,username,product_name,capacity,product_price,buy_number,time,ps_person,ps_tel,score FROM ys_order WHERE id=? LIMIT 1',
    //删除
    'del':(str)=>`DELETE FROM ys_order WHERE id in (${str}) `,
    //通过用户名删除订单
    'delByUserName':'DELETE FROM ys_order WHERE username=?',
    //更新
    'update':'UPDATE ys_order SET product_name=?,capacity=?,product_price=?,buy_number=?,time=?,ps_person=?,ps_tel=?,score=? WHERE id=? LIMIT 1'
};

module.exports = order;