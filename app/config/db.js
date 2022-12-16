/**
 * 连接池是一种创建产管理 连接的技术
 * 1. 减少连接时间
 * 2. 简化编程模型
 * 3. 资源受控制
 */
const conf = require('./config');
const mysql = require('mysql');
const pool = mysql.createPool({
    host:conf.db_host,
    user:conf.db_user,
    password:conf.db_password, 
    database:conf.database,
   // connectionLimit:5
});



//传入res，防止数据库报错，减少代码判断
const query = (res,sql,arr=[])=>{
    console.log(sql,arr);
    return new Promise(function(resolve,reject){
        pool.getConnection((err,conn)=>{
            if(err){
                reject(err);
                console.error(err,'数据库连接失败！');
                res.status(500).send('数据库连接失败！');
            }else{
                conn.query(sql,arr,(err,result)=>{
                    if(err){
                        reject(err);
                        console.error(err,'数据库查询失败');
                        res.status(500).send('数据库查询失败');
                    }else{
                        resolve(result);
                    }
                    conn.release();
                });
            }
        });
    });
};

module.exports = query;