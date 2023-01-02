
const {setPath} = require('../utils/utils');
const express = require('express');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const ejs = require('ejs');

module.exports = function(app){

    //console.log('config->',app.config);

    //日志
    app.use(morgan(app.config.logger.level));

    // favicon 图标
    app.use(favicon(setPath(app.config.appRoot,'public/favicon.ico')));

    //cookie
    app.use(cookieParser(app.config.cookieKey));

    //解析接口 json & url
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //配置模板引擎
    app.set('view engine', 'html');
    app.set('views', setPath(app.config.appRoot,'view'));
    app.engine('.html', ejs.__express);

    //使用静态资源
    app.use('/public', express.static(setPath(app.config.appRoot,'public')));
}