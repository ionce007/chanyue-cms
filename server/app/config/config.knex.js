const config = require('./config');

const { mysql: { host, port, user, password, database } } = config;
let debug = process.env.NODE_ENV === 'prd' ? false : true;

// 连接数据库
const knex = require('knex')({
    client: "mysql2",
    connection: {
        host,
        port,
        user,
        password,
        database,
        charset: 'utf8mb4'
    },
    debug: debug || true, //指明是否开启debug模式，默认为true表示开启
    pool: { //指明数据库连接池的大小，默认为{min: 2, max: 10}
        min: 0,
        max: 2,
    },
});

module.exports = knex;