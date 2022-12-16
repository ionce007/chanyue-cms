const db = require('../../config/db');
let user = {
   
    //注册添加        
    'add':'INSERT INTO ys_user(user,pass,tel,date) VALUES(?,?,?,?,NOW())',
    //后台添加
    'supAdd':'INSERT INTO ys_user(user,pass,tel,email,state,water,date) VALUES(?,?,?,?,?,?,NOW())',
    //用户名是否重复
    'repeatUser':'SELECT user FROM ys_user WHERE user=? LIMIT 1',
    //邮箱是否重复
    'repeatEmail':'SELECT email FROM ys_user WHERE email=? LIMIT 1',
    //电话是否重复
    'repeatTel':'SELECT tel FROM ys_user WHERE tel=? LIMIT 1',
    //用户密码是否正确
    'hasUser':'SELECT id,user,pass FROM ys_user WHERE user=? AND pass=? LIMIT 1',
    //注册和登录时更新最近的 登录时间
    'updateTime':'UPDATE ys_user SET time=? WHERE id=? LIMIT 1',
    //获取6条最近登录的会员
    'listUserByTime':'SELECT user,face FROM ys_user ORDER BY time DESC LIMIT 0,6',
    //会员列表
    'queryAll':'SELECT id,user,tel,email,sex,state,address,water FROM ys_user ORDER BY id DESC LIMIT ?,?',
    //会员总条数
    'count':'SELECT COUNT(id) as count FROM ys_user',
    //删除
    'del':(str)=>`DELETE FROM ys_user WHERE id in (${str})`,
    //通过会员id查找会员名
    'queryUserById':'SELECT user FROM ys_user WHERE id=?',
    //查找单一会员
    'queryOne':'SELECT id,user,pass,tel,email,state,face,province,city,area,address,sex,workplace,water FROM ys_user WHERE id=? LIMIT 1',
    //更新
    'update':'UPDATE ys_user SET pass=?,tel=?,email=?,water=?,state=? WHERE id=? LIMIT 1',
    //更新个人资料
    'updateMy':'UPDATE ys_user SET sex=?,face=?,workplace=?,tel=?,province=?,city=?,area=?,address=? WHERE id=? LIMIT 1',
    //更新密码
    'updatePass':'UPDATE ys_user SET pass=? WHERE id=? LIMIT 1',
    //更新手机
    'updateTel':'UPDATE ys_user SET tel=? WHERE id=? LIMIT 1',
  
};

module.exports = user;