const express = require('express');
const {port} = require('./app/config/config');
const router = require('./app/router/router');
const run = require('./app/middleware/run.js');
const app = express();
//通用配置
run(app);
//路由
app.use(router);
app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
});