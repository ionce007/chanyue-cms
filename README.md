# 💒<center>禅悦内容管理系统介绍（`chanyue-cms`）</center> 
------
 禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统。常用企业网站，图片网站，新闻资讯，软件下载网站，博客，文章等诸多类型网站开发，也适用于前端二次开发。


## 🌈系统特色

* 轻量
* 稳定
* 妥妥服务于`seo`，伪静态`html`和拼音导航，栏目页面都支持单独设置`seo`关键词
* 基于`SqlBuilder`,高防`sql`注入，接口权限校验，为安全提供保障。
* 专门服务于前端爱好者
* 通过模型扩展，字段配置，可动态生成表，超强扩展，可进行多领域网站开发，博客，新闻，资讯，下载，视频，图片，书籍等网站开发。
* 长期维护更新，不是`KPI`项目
* 支持微信小程序登录和api调用


## ⛱️软件架构

后台管理client技术栈

* vue3 
* vue-router
* pina 
* element-plus 
* vite3
* tinymce

服务端技术栈

* nodejs v16.15.1
* express 4.18+
* mysql v5.7.26
* ejs
* pm2   v5.2.2
* jwt 
* pm2 (prd)
* nodemon (dev)
  
## 🚧功能介绍

* 站点信息
* 管理员登模块
* 无限极栏目分类
* 文章模块
* 单页模块
* 扩展模型
* 标签管理
* 碎片管理
* 广告模块
* 友情链接模块
* 在线留言模块
* 微信小程序登录（doing）

### 🍅️案例


[世界气功网](http://www.shijieqigong.com/) `http://www.shijieqigong.com/`

[世界大健康运动联盟](http://www.worldhealthgames.com/) `http://www.worldhealthgames.com/`



## ⚡ 👈本地开发运行

* 1 导入数据库文件 
    ```
    chanyue.sql(back文件夹里面)
    ```
* 2 修改数据库配置文件
    
    ```
    server/config/config.default.js
    ```
* 3 进入server 文件夹
    设置npm源安装依赖
    ```
    npm config set registry https://registry.npmmirror.com
    npm i 
    npm run dev 
    ```
    后访问 http://localhost:81 ，完成网站启动。

*  4.后台管理界面  
   ```
    http://localhost:81/public/admin/index.html 
    ```
   默认账号密码：**chanyue**  **123456**

* 5.后端管理界面开发指南（不开发忽略这一步）

    进入client文件夹
    ```
    执行npm i,npm run dev  
    ```
    后访问 http://localhost:3000 后台管理界面开发，
    功能开发完成后执行npm run build即可。
    


## 🕊 linux服务器部署

* 1 安装`BT`运维管理工具
* 2 安装 `nginx` `mysql5.6`  `pm2`管理器 
* 3 创建`mysql`，导入本地数据库，修改数据库配置文件
* 4 创建网站,绑定域名和设置反向代理,上传代码,
    ```
    npm i ,npm run start启动即可。
    ```
* 5 安装`pm2` ,执行`npm run app` 启动。
* 6 配置`https`


## ❤️项目关注     
* 码云：   https://gitee.com/yanyutao0402/chanyue-cms
* github: https://github.com/yanyutao/chanyue-cms

**走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,🤝🤝🤝🤝🤝,🙏🙏🙏🙏🙏**