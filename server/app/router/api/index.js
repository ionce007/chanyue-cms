const express = require('express');
const router = express.Router();
const upload = require('../../extend/upload.js');
const AdminController = require('../../controller/api/admin.js');
const ArticleController = require('../../controller/api/article.js');

const auth = require('../../middleware/auth.js');

// 验证码
router.get('/captcha', AdminController.captcha); // 验证码
router.post('/checkCaptcha', AdminController.checkCaptcha);

// copy 爬虫
// router.get('/copy', controller.copy.home.index);
// router.get('/copy/ruiwen', controller.copy.home.ruiwen);

// 登录
router.post('/admin/login', AdminController.login);
router.post('/admin/create', AdminController.create);
router.get('/admin/list', AdminController.list);
router.get('/admin/search', AdminController.search);
router.get('/admin/detail', AdminController.detail);
router.post('/admin/create', auth(), AdminController.create);
router.get('/admin/delete', auth(), AdminController.delete);
router.post('/admin/update', auth(), AdminController.update);

// 站点信息
// router.get('/site/find', auth, controller.api.site.find);
// router.post('/auth/site/updateInfo', auth, controller.api.site.updateInfo);
// router.post('/auth/site/updateSeo', auth, controller.api.site.updateSeo);
// router.get('/site/runEnv', controller.api.site.runEnv);

// 网站栏目
// router.get('/category/find', controller.api.category.find);
// router.get('/category/findId', controller.api.category.findId);
// router.get('/category/findSubId', controller.api.category.findSubId);
// router.get('/category/search', controller.api.category.search);
// router.get('/auth/category/delete', auth, controller.api.category.delete);
// router.post('/auth/category/update', auth, controller.api.category.update);
// router.post('/auth/category/create', auth, controller.api.category.create);

// 文章栏目
// router.get('/article/list', controller.api.article.list);
// router.get('/article/tongji', controller.api.article.tongji);
// router.get('/article/search', controller.api.article.search);
// router.get('/article/detail', controller.api.article.detail);
// router.get('/article/findField', auth, controller.api.article.findField);
// router.post('/article/create', auth, controller.api.article.create);
// router.get('/article/delete', auth, controller.api.article.delete);
// router.post('/article/update', auth, controller.api.article.update);
// router.post('/upload', auth, controller.api.article.upload);

// router.post('/upload', upload, ArticleController.upload);

// 页面管理
// router.get('/page/list', controller.api.page.list);
// router.get('/page/search', controller.api.page.search);
// router.get('/page/detail', controller.api.page.detail);
// router.post('/page/create', auth, controller.api.page.create);
// router.get('/page/delete', auth, controller.api.page.delete);
// router.post('/page/update', auth, controller.api.page.update);

// 模型管理
// router.get('/model/list', controller.api.model.list);
// router.get('/model/detail', controller.api.model.detail);
// router.get('/model/hasUse', auth, controller.api.model.hasUse);
// router.post('/model/create', auth, controller.api.model.create);
// router.post('/model/delete', auth, controller.api.model.delete);
// router.post('/model/update', auth, controller.api.model.update);

// 字段管理
// router.get('/field/list', controller.api.field.list);
// router.get('/field/detail', controller.api.field.detail);
// router.post('/field/create', auth, controller.api.field.create);
// router.get('/field/delete', auth, controller.api.field.delete);
// router.post('/field/update', auth, controller.api.field.update);

// 碎片管理
// router.get('/frag/list', controller.api.frag.list);
// router.get('/frag/search', controller.api.frag.search);
// router.get('/frag/detail', controller.api.frag.detail);
// router.post('/frag/create', auth, controller.api.frag.create);
// router.get('/frag/delete', auth, controller.api.frag.delete);
// router.post('/frag/update', auth, controller.api.frag.update);

// tag标签管理
// router.get('/tag/list', controller.api.tag.list);
// router.post('/tag/create', auth, controller.api.tag.create);
// router.get('/tag/detail', controller.api.tag.detail);
// router.get('/tag/has', controller.api.tag.has);
// router.get('/tag/search', controller.api.tag.search);
// router.get('/tag/delete', auth, controller.api.tag.delete);
// router.post('/tag/update', auth, controller.api.tag.update);

// 友情链接
// router.get('/friendlink/list', controller.api.friendlink.list);
// router.get('/friendlink/detail', controller.api.friendlink.detail);
// router.post('/friendlink/create', auth, controller.api.friendlink.create);
// router.get('/friendlink/delete', auth, controller.api.friendlink.delete);
// router.post('/friendlink/update', auth, controller.api.friendlink.update);

// 广告管理
// router.get('/ad/list', controller.api.ad.list);
// router.get('/ad/search', controller.api.ad.search);
// router.get('/ad/detail', controller.api.ad.detail);
// router.post('/ad/create', auth, controller.api.ad.create);
// router.get('/ad/delete', auth, controller.api.ad.delete);
// router.post('/ad/update', auth, controller.api.ad.update);
// router.post('/upload', auth, controller.api.ad.upload);

// 留言管理
// router.get('/message/list', controller.api.message.list);
// router.get('/message/search', controller.api.message.search);
// router.get('/message/detail', controller.api.message.detail);
// router.post('/message/create', auth, controller.api.message.create);
// router.get('/message/delete', auth, controller.api.message.delete);
// router.post('/message/update', auth, controller.api.message.update);


module.exports = router;