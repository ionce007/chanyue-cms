const express = require('express');
const config = require('./app/config/config');
const router = require('./app/router/router');
const run = require('./app/middleware/run.js');
const app = express();
app.config = config;
//通用配置
run(app);
//路由
app.use(router);
app.listen(config.port, () => {
	console.log(`server started at localhost:${config.port}`)
});