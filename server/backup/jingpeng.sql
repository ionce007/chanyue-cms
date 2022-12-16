/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : jingpeng

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-06-12 13:59:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ys_ad
-- ----------------------------
DROP TABLE IF EXISTS `ys_ad`;
CREATE TABLE `ys_ad` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(20) DEFAULT NULL COMMENT '标题',
  `img` varchar(100) DEFAULT NULL COMMENT '图片',
  `url` varchar(100) DEFAULT NULL COMMENT '链接',
  `type` varchar(1) DEFAULT '0' COMMENT '类型',
  `state` varchar(255) DEFAULT '0' COMMENT '是否是前台广告',
  `info` varchar(255) DEFAULT NULL COMMENT '描述',
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_ad
-- ----------------------------
INSERT INTO `ys_ad` VALUES ('25', '撒旦法上放大', '/static/upload/20171819.png', '暗室逢灯ASFASF', '1', '1', null, '2017-12-28 14:37:26');
INSERT INTO `ys_ad` VALUES ('26', 'safd', '/static/upload/20180224-11-15-37_12954_RTX截图未命名.jpg', 'http://www.360doc.com/content/14/0718/18/21412_395329210.shtml', '2', '0', null, '2018-02-24 11:15:43');

-- ----------------------------
-- Table structure for ys_admin
-- ----------------------------
DROP TABLE IF EXISTS `ys_admin`;
CREATE TABLE `ys_admin` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `admin_user` varchar(20) NOT NULL COMMENT '管理员账号',
  `admin_pass` char(40) NOT NULL COMMENT '管理员密码',
  `level` tinyint(1) NOT NULL DEFAULT '1' COMMENT '管理员等级',
  `login_count` smallint(5) NOT NULL DEFAULT '0' COMMENT '登录次数',
  `last_ip` varchar(20) CHARACTER SET utf32 NOT NULL DEFAULT '0' COMMENT '最后一次IP',
  `last_time` datetime NOT NULL COMMENT '最后一次登录的时间',
  `reg_time` datetime NOT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_admin
-- ----------------------------
INSERT INTO `ys_admin` VALUES ('51', '闫宇韬', '7f3d09845ebe9b8c37e808f80cca780e', '2', '10288', '', '2018-03-20 18:11:18', '2017-09-21 15:46:40');
INSERT INTO `ys_admin` VALUES ('69', 'sfdassafd', '39d2a77f0ba74b619660d4d1904c11e6', '2', '0', '0', '2017-11-28 16:53:33', '2017-09-26 14:05:18');
INSERT INTO `ys_admin` VALUES ('75', 'test', '7f3d09845ebe9b8c37e808f80cca780e', '2', '2', '172.17.64.156', '2017-11-24 09:56:32', '2017-11-22 14:03:18');
INSERT INTO `ys_admin` VALUES ('76', 'admin', '7f3d09845ebe9b8c37e808f80cca780e', '2', '10136', '111.201.233.92', '2018-06-03 23:16:19', '2017-09-21 15:46:40');
INSERT INTO `ys_admin` VALUES ('77', 'wudashao', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '2017-11-21 16:56:47', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('78', '李四', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '2017-11-14 16:56:51', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('79', '王五', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '2017-11-23 16:56:55', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('80', '赵六', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '2017-11-15 16:56:58', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('81', '周八', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('82', '段九', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('83', '杨十', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('84', '孙一', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('87', '安云芳', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '2018-01-02 11:40:04');
INSERT INTO `ys_admin` VALUES ('88', 'zhangsan', '4f5e8f889cf4b6fecb70b0cb3524013e', '7', '0', '0', '0000-00-00 00:00:00', '2018-02-24 11:44:27');
INSERT INTO `ys_admin` VALUES ('89', 'yuscms', '7f3d09845ebe9b8c37e808f80cca780e', '2', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for ys_article
-- ----------------------------
DROP TABLE IF EXISTS `ys_article`;
CREATE TABLE `ys_article` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `nav` mediumint(8) NOT NULL COMMENT '栏目id',
  `attr` varchar(30) DEFAULT NULL COMMENT '自定义属性 头条 推荐 加粗 跳转',
  `tag` varchar(30) DEFAULT NULL COMMENT 'tag标签',
  `keyword` varchar(30) DEFAULT NULL COMMENT '关键词',
  `thumbnail` varchar(100) DEFAULT NULL COMMENT '缩略图',
  `source` varchar(20) DEFAULT NULL COMMENT '来源',
  `author` varchar(10) DEFAULT NULL COMMENT '作者',
  `info` varchar(200) DEFAULT NULL COMMENT '内容摘要',
  `content` text COMMENT '文章内容',
  `comment` tinyint(1) DEFAULT '1' COMMENT '是否允许评论',
  `count` smallint(6) DEFAULT '0' COMMENT '浏览次数',
  `gold` smallint(6) DEFAULT '0' COMMENT '默认金币',
  `sort` tinyint(1) DEFAULT '0',
  `readlimit` tinyint(4) DEFAULT NULL COMMENT '阅读权限',
  `date` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_article
-- ----------------------------
INSERT INTO `ys_article` VALUES ('1', '你好', '0', null, null, null, null, null, null, null, null, '1', '0', '0', '0', null, '2017-10-02 18:07:58');
INSERT INTO `ys_article` VALUES ('41', '省食药监局发布食品安全监督抽检公告 9批次不合格样品中8批次为饮用水', '13', '头条', '新闻', '新闻', 'http://img.fengyunbike.com/data/attachment/forum/201201/24/183028r2c9jvhjih9rc9nj.jpg', '新华网', 'admin', '省食药监局发布食品安全监督抽检公告 9批次不合格样品中8批次为饮用水', '<p align=\"left\"><font color=\"#000000\" face=\"宋体\"><b>本报讯</b>（记者秦洋）省食品药品监督管理局12月11日发布2017年第46期食品安全监督抽检信息公告，本期公布170批次食品监督抽检结果，其中，不合格样品9批次。<br>　　不合格方便食品1批次，大同市华林有限责任公司振华南街超市销售的标称桂林周氏顺发食品有限公司生产的手工纯香黑芝麻糊霉菌超标。<br></font></p><div><font color=\"#000000\" face=\"宋体\"><div adtype=\"rightAd\" requesturl=\"https://nex.163.com/q?app=7BE0FC82&amp;c=news&amp;l=133&amp;site=netease&amp;affiliate=news&amp;cat=article&amp;type=logo300x250&amp;location=12\"></div><a href=\"javascript:;\" target=\"_self\"></a></font></div><p data-v-3781daec=\"\"><font color=\"#000000\" face=\"宋体\"><br>　　不合格饮料8批次，分别为：临猗县峨嵋润泽泉纯净水厂生产的桶装饮用纯净水、稷山县黄花源饮用水有限公司生产的饮用纯净水、稷山县秦井天然饮品有限公司生产的天然饮用水、晋中津美饮业有限公司生产的饮用纯净水、运城市方大银蝶泉饮品有限公司生产的饮用纯净水、夏县怡鑫源饮品有限公司生产的泗交山泉包装饮用水均检出铜绿假单胞菌。临县观音圣泉饮品有限公司生产的观音泉水、夏县禹洋水业有限公司生产的饮用纯净水均检出大肠菌群和铜绿假单胞菌。<br>　　针对上述抽检中发现的不合格产品，省食药监局已责成相关市局及时进行核查处置，采取封存、下架、召回不合格产品等措施防控食品安全风险，督促企业查找原因，消除隐患。消费者如果在市场上发现被通报的不合格食品，可拨打12331投诉举报。</font></p><p></p><p align=\"right\">(原标题：省食药监局发布食品安全监督抽检公告 9批次不合格样品中8批次为饮用水)</p>', '1', '19', '0', '0', '0', '2017-12-10 12:53:25');
INSERT INTO `ys_article` VALUES ('46', '我就是用来测试的你晓得不', '0', '', '', '', '', '网络', 'admin', '', '<p data-v-2c17a26e=\"\">欢迎使用 <b data-v-2c17a26e=\"\">y</b><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span><span style=\"display: inline !important;\">我就是用来测试的你晓得不</span></p>', '1', '0', '0', '1', '0', '2017-12-28 08:55:01');
INSERT INTO `ys_article` VALUES ('47', '萨芬的', '0', '', '', '', '', '网络', 'admin', '', '<p data-v-2c17a26e=\"\">欢迎使用 <b data-v-2c17a26e=\"\">yuscms</b> 系统!</p><p>暗室逢灯的萨菲撒旦法</p>', '1', '0', '0', '1', '0', '2017-12-28 08:55:31');
INSERT INTO `ys_article` VALUES ('48', '有人的地方就有江湖', '13', '', '', '', '/static/upload/20180223-17-25-21_16232_RTX截图未命名.jpg', '网络', 'admin', '', '<p>欢迎使用 <b>yuscms</b> 系统!</p><pre><code>git log -p article-edit.vue</code></pre><p><img src=\"/static/upload/20180223-17-24-22_11520_RTX截图未命名.jpg\" style=\"max-width:100%;\"><br></p>', '1', '2', '0', '1', '0', '2018-02-23 08:28:12');
INSERT INTO `ys_article` VALUES ('52', '集合计看好看', '13', '', '', '士大夫撒', '/static/upload/20180223-17-33-56_10416_RTX截图未命名.jpg', '网络', 'admin', '士大夫撒大阿萨德饭', '是的发生士大夫撒', '1', '9', '0', '1', '0', '2018-02-23 09:32:50');

-- ----------------------------
-- Table structure for ys_comment
-- ----------------------------
DROP TABLE IF EXISTS `ys_comment`;
CREATE TABLE `ys_comment` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `aid` int(8) DEFAULT NULL,
  `user` varchar(20) DEFAULT NULL COMMENT '评论者',
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `state` varchar(1) DEFAULT '0' COMMENT '状态',
  `date` datetime DEFAULT NULL,
  `zan` int(10) DEFAULT '0' COMMENT '评论点赞数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_comment
-- ----------------------------
INSERT INTO `ys_comment` VALUES ('3', '42', '游客', '引起腰酸背痛。只要慢慢养成饮水习惯，膀胱接收惯了，上厕所的频率自然也渐渐减少。但每天喝八杯水，上厕所七至八次亦属正常，是新陈代谢必须的更替。切记饮水之道，并不在乎满足喉干颈渴，口干时才', '1', '2018-01-02 15:09:02', '0');
INSERT INTO `ys_comment` VALUES ('4', '42', '游客', '颈渴，口干时才喝一口水', '1', '2018-01-02 15:09:10', '0');
INSERT INTO `ys_comment` VALUES ('5', '42', '游客', '水的水性太酸，容易伤害身体，对肾脏较弱的人士则更为不利)，可选择优质的矿泉', '1', '2018-01-02 15:09:17', '0');

-- ----------------------------
-- Table structure for ys_level
-- ----------------------------
DROP TABLE IF EXISTS `ys_level`;
CREATE TABLE `ys_level` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `level` tinyint(2) unsigned NOT NULL COMMENT '等级编号',
  `level_name` varchar(20) NOT NULL COMMENT '等级名称',
  `level_info` varchar(200) NOT NULL,
  `permission` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_level
-- ----------------------------
INSERT INTO `ys_level` VALUES ('2', '6', '超级管理员', '可以使用所有后台功能', '4,5,6,7,8,9,10,3,11,12,2,1');
INSERT INTO `ys_level` VALUES ('3', '4', '编辑管理员', '可以对栏目、文章、广告、轮播、友连等经常变更信息处理。', '1,5,6,3,4');
INSERT INTO `ys_level` VALUES ('7', '0', '普通管理员', '除了管理员、等级、权限之外左右功能使用。', '1,5,6,8,9,10,13,4,2,3,7,11');
INSERT INTO `ys_level` VALUES ('8', '0', '游客', '不能修改任何数据', '');

-- ----------------------------
-- Table structure for ys_link
-- ----------------------------
DROP TABLE IF EXISTS `ys_link`;
CREATE TABLE `ys_link` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(20) DEFAULT NULL COMMENT '网站名称',
  `url` varchar(100) DEFAULT NULL COMMENT '网址',
  `img` varchar(100) DEFAULT NULL COMMENT 'logo网址',
  `type` varchar(1) DEFAULT '0' COMMENT '类型 0文字 1logo',
  `info` varchar(20) DEFAULT NULL COMMENT '备注：联系方式',
  `state` int(11) DEFAULT '1' COMMENT '是否开启',
  `date` datetime DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_link
-- ----------------------------
INSERT INTO `ys_link` VALUES ('16', '百度', 'http://www.baidu.com', '/static/upload/bd_logo1.png', null, '搜索引擎', '1', '2017-12-28 15:01:49');
INSERT INTO `ys_link` VALUES ('17', 'google', 'http://www.google.com.cn', '', null, 'google', '1', '2017-12-28 15:03:01');
INSERT INTO `ys_link` VALUES ('18', 'agsdasfd', 'asfdsafd', '/static/upload/bd_logo1.png', null, 'sdfdasdasda', '1', '2017-12-28 15:04:00');
INSERT INTO `ys_link` VALUES ('19', 'asdf', 'asdf', '', '0', 'asf', '1', '2018-02-24 11:35:30');

-- ----------------------------
-- Table structure for ys_ly
-- ----------------------------
DROP TABLE IF EXISTS `ys_ly`;
CREATE TABLE `ys_ly` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL COMMENT '姓名',
  `tel` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `addr` varchar(255) DEFAULT NULL COMMENT '房屋地址',
  `xiaoqu` varchar(255) DEFAULT NULL COMMENT '小区',
  `other` varchar(255) DEFAULT NULL COMMENT '其他情况',
  `date` int(13) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_ly
-- ----------------------------

-- ----------------------------
-- Table structure for ys_msg
-- ----------------------------
DROP TABLE IF EXISTS `ys_msg`;
CREATE TABLE `ys_msg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) DEFAULT NULL COMMENT '信息标题',
  `content` varchar(255) DEFAULT NULL COMMENT '信息内容',
  `date` datetime DEFAULT NULL COMMENT '//添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='站内消息';

-- ----------------------------
-- Records of ys_msg
-- ----------------------------
INSERT INTO `ys_msg` VALUES ('1', 'yuscms内容管理系统上线了！', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！', '2017-10-25 12:59:00');
INSERT INTO `ys_msg` VALUES ('4', '欢迎提bug2', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！3', '2017-10-25 22:59:29');
INSERT INTO `ys_msg` VALUES ('5', '欢迎提bug3', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！2', '2017-10-25 15:23:29');
INSERT INTO `ys_msg` VALUES ('6', '欢迎提bug4', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！w', '2017-10-25 15:59:22');
INSERT INTO `ys_msg` VALUES ('7', '欢迎提bug5', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！s', '2017-10-25 15:12:29');
INSERT INTO `ys_msg` VALUES ('11', '欢迎提bug9', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！e', '2017-10-25 11:17:29');
INSERT INTO `ys_msg` VALUES ('18', '欢迎提bug16', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！d', '2017-10-25 12:12:47');
INSERT INTO `ys_msg` VALUES ('19', '欢迎提bug17', 'yuscms内容管理系统上线了！欢迎大家前来测试哦！r', '2017-10-25 12:45:49');

-- ----------------------------
-- Table structure for ys_msgread
-- ----------------------------
DROP TABLE IF EXISTS `ys_msgread`;
CREATE TABLE `ys_msgread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `msg_id` int(11) DEFAULT NULL COMMENT '消息id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `status` int(11) DEFAULT NULL COMMENT '1阅读 2删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_msgread
-- ----------------------------
INSERT INTO `ys_msgread` VALUES ('58', '18', '10', '1');
INSERT INTO `ys_msgread` VALUES ('59', '4', '10', '2');
INSERT INTO `ys_msgread` VALUES ('60', '1', '10', '2');
INSERT INTO `ys_msgread` VALUES ('61', '11', '25', '2');
INSERT INTO `ys_msgread` VALUES ('62', '6', '25', '2');
INSERT INTO `ys_msgread` VALUES ('63', '5', '25', '2');
INSERT INTO `ys_msgread` VALUES ('64', '4', '25', '2');
INSERT INTO `ys_msgread` VALUES ('65', '1', '25', '1');
INSERT INTO `ys_msgread` VALUES ('66', '18', '25', '1');
INSERT INTO `ys_msgread` VALUES ('67', '7', '25', '1');
INSERT INTO `ys_msgread` VALUES ('68', '19', '25', '1');

-- ----------------------------
-- Table structure for ys_nav
-- ----------------------------
DROP TABLE IF EXISTS `ys_nav`;
CREATE TABLE `ys_nav` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `nav_name` varchar(20) NOT NULL COMMENT '导航名称',
  `nav_info` varchar(200) NOT NULL DEFAULT '0' COMMENT '导航描述',
  `pid` mediumint(8) NOT NULL DEFAULT '0' COMMENT '父导航',
  `sort` mediumint(8) NOT NULL DEFAULT '1' COMMENT '排序',
  `type` tinyint(1) DEFAULT '1' COMMENT '//栏目类型 type=1为栏目 type=2为单页',
  `level` tinyint(1) DEFAULT '1' COMMENT '栏目层级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_nav
-- ----------------------------
INSERT INTO `ys_nav` VALUES ('1', '会员中心', '会员中心q', '0', '2', '1', '1');
INSERT INTO `ys_nav` VALUES ('13', '新闻资讯', '新闻资讯', '0', '1', '1', '1');
INSERT INTO `ys_nav` VALUES ('15', '品鉴京鹏', '品鉴京鹏', '0', '3', '1', '1');
INSERT INTO `ys_nav` VALUES ('19', '公司介绍', '公司介绍', '0', '19', '2', '1');
INSERT INTO `ys_nav` VALUES ('20', '人才招聘', '人才招聘', '0', '4', '2', '1');
INSERT INTO `ys_nav` VALUES ('22', '联系我们', '', '0', '5', '2', '1');

-- ----------------------------
-- Table structure for ys_nav_page
-- ----------------------------
DROP TABLE IF EXISTS `ys_nav_page`;
CREATE TABLE `ys_nav_page` (
  `nav_id` int(11) NOT NULL,
  `title` varchar(40) DEFAULT NULL,
  `source` varchar(8) DEFAULT NULL,
  `author` varchar(8) DEFAULT NULL,
  `count` int(8) DEFAULT '0',
  `content` text COMMENT '单页内容',
  `date` datetime DEFAULT NULL COMMENT '//发布时间',
  PRIMARY KEY (`nav_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_nav_page
-- ----------------------------
INSERT INTO `ys_nav_page` VALUES ('19', null, null, null, null, '<p>欢迎使用 <b>yuscms</b> 系统!</p><p><img src=\"/public/upload/QQ截图20171005213111.jpg\"><img src=\"/public/upload/b1ee767d54876d5eba2ddd231461088c.jpg\">szdfa</p>', null);
INSERT INTO `ys_nav_page` VALUES ('20', '人才招聘', 'asdfx', 'asfdx', '63', '<p><b>职位描述</b></p><p>求职人员请您尽可能打电话咨询：13810666811，联系人振远张队长，手机号同步微信，工作真实可靠。</p><p>请您记住北京有很多黑中介跟骗子，找工作只要交钱或扣押证件都不靠谱，正规单位不会扣押任何证件，更不需要交任何费用与押金。</p><p>北京振远护卫中心直招银行保安武装押运，手机导航-北京振远护卫中心南十里居43号-振远总部大厦面试当天安排入职上班。</p><p><b>一、应聘岗位</b></p><p>1、武装押运：净身高170以上，年龄20-34周岁。工资待遇包食宿3100-5400元，每天上班6-8小时。</p><p>2、银行保安：净身高170以上。年龄18-35周岁，工资待遇管住不管吃3850-4850元，每天上班4-6小时。</p><p>3、企事业单位保安：身高165以上，年龄18-40周岁，工资待遇包食宿2750-3300元，每天上班4-6小时。</p><p>应聘以上岗位人员：必须是无纹身，无烟疤，性格稳重，能够服从领导管理，遵守工作制度。退伍优先!</p><p><b>二、银行保安、企事业单位保安。</b></p><p>1、【招商银行薪资】18-35岁，身高：170cm以上。管住不管吃4000元-4850元以上;工作地点：北京各个招商银行，室内岗，冬暖夏凉，每天上班6小时，可就近分配。</p><p>2、【包商银行薪资】18-32岁，身高170cm以上。2800-3500管吃住，自助餐，每天6小时银行大厅站岗巡逻岗或中控坐岗，工作单位，北京市各大包商银行。</p><p>3、【光大银行薪资】18-32岁，身高：170cm以上。3870-4600管住，下面支行百分之三十管一顿或两顿饭，或着给300-500元补贴，退役军人为主。每天6小时大厅巡逻岗站岗，工作地点：北京各个光大银行，室内岗，冬暖夏凉，可就近分配。</p><p>4、【渤海银行薪资】18-35岁，身高168cm以上。3750-4500管住不管吃或2900管吃住，每天6小时大厅巡逻岗，工作地点：北京各个渤海银行，室内岗，冬暖夏凉，可就近分配。</p><p>5、【农业银行】18-35岁，身高168以上。每周休一天，2750-3350管吃住，每天6小时大厅巡逻岗站岗，工作地点：北京各个农业银行，室内岗，冬暖夏凉，可就近分配。</p><p>6、【市政机关】18-42岁，身高168cm以上。2900-3500管吃住，自助餐，每天6小时站岗巡逻岗，工作地点：北京各个市政机关，每天上班6小时，可就近分配。</p><p>7、【企事业单位】18-42岁，身高165cm以上。2500-3000管吃住，华能电厂，航天211运载火箭，财政局，中央新影等，24小时，6小时班轮班倒，每人每天不超6小时，白班夜班商量调配，可就近分配。</p><p>8、【浦发银行薪资】18-32岁，3850-5000管住，每天6小时大厅巡逻岗，大部分支行除去站岗巡逻岗另外干活有400-600补助;工作地点：北京各个浦发银行，室内岗，冬暖夏凉，可就近分配。</p><p>四、【福利待遇】1、工作每满3个月8天带薪休假，假期可以累积，满半年15天，满一年带薪休假30天。每年年终奖1200元，冬天或夏天防暑降温每月补贴120元。2、有无限网，有线电视，洗衣机，空调，法定节日振远给予三倍工资，银行给予100-1000元不等过节费，其次是振远和银行都给予聚餐费50-300元不等，工资每月10号-15号打卡</p><p><b>五、【面试入职地址】</b></p><p>振远总部9点-18点：北京市朝阳区南十里居43号振远总部大厦;可乘地铁14号线到东风北桥下车C2口出;出来打电话即可，我们尽可能派人接</p><p>手机导航-北京振远护卫中心南十里居43号-振远总部大厦-院内有一排款车-到门口特勤不让进了打电话</p><p>再次提醒振远直招不收任何费用与押金，更不会扣押任何证件，除在振远护卫中心面试是我们振远直招，其他发帖任何不在振远总部面试地点均属于中介。</p><p>公司介绍</p><p>\n</p><center><img alt=\"\" src=\"http://pic1.58cdn.com.cn/enterprise/appearance/big/n_v1bkujjd6y6z2fnzdkq4ha_188_150.jpg\" width=\"225\" height=\"150\"></center><p></p><p>北京振远护卫中心成立于1996年5月8日，是我国首家专门从事武装押运的保安服务企业，具有一流的装备和管理体系，是目前国内企业规模最大、综合实力最强、技术水平最高的专业保安押运服务企业之一，主要业务包括特种货物运输服务;守卫服务;安全信息咨询;技术培训;有价证券、贵重物品押运等。</p><p>中心成立以来，坚持在前进中摸索，在实践中总结，恪守“保安全，求稳定，促发展”的企业精神，坚持“一流管理，一流素质，一流装备，一流服务”的发展理念，遵循“客户至上，诚实守信，优质服务，保障安全”的经营宗旨，把为金融客户提供安全高效的护卫服务作为企业生存发展的最高准则，将保卫首都经济社会发展、履行辅警职能作为全部工作的出发点和落脚点。</p><p>经过10多年的艰苦创业，中心现有10000余名员工，专业运钞车1500余辆，建有总部大厦、15个专业押运基地、1个职业技能培训学校，总占地面积300余亩，建筑面积共计10000平方米;实现了“全面做大企业规模，提升企业综合实力，不断提高服务质量，打造首都押运品牌”的奋斗目标，走出了一条符合中国国情、具有首都特色的保安押运企业发展之路，赢得了各级领导、广大客户、同行业企业以及社会各界的充分肯定和广泛好评，创造了良好的社会效益和经济效益。</p><p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</p><p>目前，振远共担负着首都国有、商业、外资性质的28家银行，499家支行，14400余个营业网点的金融押运任务和日寄存量为8000余个尾箱寄存业务，并担负着全市关系国计民生的水、电、气、热、金融、通信、交通、邮政、奥运场馆等基础设施要害单位、中央在京国家机关、大型企事业单位共计900个单位、3000余个执勤网点的内部安全日常守卫任务。多年来，中心各级护卫队配合公安机关破获刑事案件397起，治安案件852起，协助抓获各类违法犯罪嫌疑人2872人;缴获赃款赃物折合人民币2800余万元，捡拾上缴财物价值1990余万元;及时扑救火灾970余起，协助解决各类不安全问题26100余件。在维护内部单位稳定和社会治安防控体系建设中发挥着不可替代的作用</p>', null);
INSERT INTO `ys_nav_page` VALUES ('22', '联系我们', '金鹏寻泉', '金鹏寻泉', '75', '<p style=\"text-align: center;\">中国高端饮用水品牌倡导者</p><p><b>公司名称</b>：鑫鹏伟裕(北京)商贸有限公司</p><p><b>公司地址</b>：北京市通州区绿地中央广场2期1511室(新华北路东)</p><p><b>公司座机</b>：010-57225345</p><p><b>产品名称</b>：凤凰岭山泉</p><p><b>水源地</b>：北京·西山·凤凰岭自然风景区神泉脚下天然泉眼</p><p><b>水源地简介</b>：西山·凤凰岭自然风景区野趣天成：青山绿水，蓝天白云，层峦叠翠，密林曲径，奇花异草遍及山野，具有良好的生态环境;北京凤凰岭自然风景区其上风上水的地理优势，使之享有京城“绿肺”之称。区内水质优良，空气清新，净化空气纯度为市区的5倍，含负氧离子为市区的150倍以上，四至十月相对湿度为58%，春秋平均气温为23℃。</p><p>凤凰岭山泉水水源位于凤凰岭自然风景区神泉脚下一天然泉眼，泉眼在地下300米以下的地层深部，泉眼水源由山体植物对雨水及空气中吸收的水分渗透而形成，经过不同天然地质过滤后形成珍贵的山泉水，所在山体为花岗岩系、含有较多的长石、石英石、黑云母石裂隙间，由山体渗透出的泉水经过花岗岩过滤，采用钻机通过钻探，建立钻井，直接由地下管网送到工厂。</p><p style=\"text-align: center;\"><img src=\"/static/upload/7c57c93d70cf3bc7410545acda00baa1cc112ac3.jpg\" style=\"max-width:100%;\"><br></p><p><b>凤凰岭山泉的综合优势</b>：</p><p>1·山泉水也是地表水，是雨水降到地面后，通砂石层的过滤并在流动过程中溶解了一定的氧气及矿物质，所以是活水，也是茶经中认为是好的水，山泉水泡茶香气最好，口感饱满</p><p>2·是有营养的水。指的是含有微量元素和矿物质，它们在水中的含量比例适</p><p>中，与正常体液相近，适合日常饮用</p><p>3·是小分子团水。由5-6个水分子组成，又称为五角水或六角水。核磁共振半幅宽度低于100HZ。小分子团水的作用指的是水的代谢力、渗透力、扩散力强，可以提高代谢功能，增强免疫力;水的溶解力、乳化力、洗净力强，可以具有排毒功能</p><p>4·是有丰富的溶解氧的水。溶解氧可以将体内的毒素排泄掉代谢掉，抑制厌氧癌细胞的生长，使我们保持健康，延缓衰老</p><p>5·是呈弱碱性的水。能平衡我们的酸碱度，让我们的体液永远呈弱碱性，体液PH值在6.5-7之间叫做酸碱平衡。世界卫生组织调查显示，100%的糖尿病、癌症病人都是酸性体质，酸性体质是百病之源</p><p>6·水的软硬度适中，水的软硬度是根据水中的钙离子的含量来计算的，介于每升100mg之间。太软和太硬的水都不适合饮用</p><p>7·生产基地配备先进的进口水处理设备和技术，拥有国内一流的全封闭、自动化的大型灌装生产线，以规范的管理与生产，确保每瓶水的产品品质安全合格</p><p>西山·凤凰岭</p><p style=\"text-align: center;\"><img src=\"/static/upload/d26370cf3bc79f3d27e46c70b1a1cd11738b29c3.jpg\" style=\"max-width:100%;\"><br></p><p><b>生产基地与制造工艺</b></p><p>京鹏寻泉牌凤凰岭山泉产出基地在：北京·西山·凤凰岭自然风景区(北京阳光雨露饮品有限责任公司)工厂采用先进的进口水处理设备和技术，拥有国内一流的全封闭、自动化的大型灌装生产线，以规范化得管理、规模化的生产、严格的质量管理体系为基础，确保每桶水的产品品质安全合格。</p><p><b>制水工序及工艺流程：</b></p><p>制水工艺多达20余道工序：优质水源检测、多介质过滤系统、石英砂过滤系统、活性炭过滤系统、多级精密过滤系统、(RO)双级反渗透过滤系统、(UF)超滤系统等，去除水中的有害物质后，再以臭氧杀菌保鲜，方可进入灌装生产线灌装生产。</p><p>PC桶消毒清洗及生产灌装程序</p><p>从空桶进厂验收分拣，消毒清洗及灌装须经过多达60余道工序：回收桶、验桶、空桶质检、分拣上线、自动拔盖、空桶自动测漏、桶预洗机自动清洗、异味检查、桶外洗机系统清洗、异物检查、(24工位)全自动高温清洗、消毒冲洗系统、无菌灌装、封盖、成品灯检、防伪喷码、封袋、自动码垛、出厂检验等。</p><p style=\"text-align: center;\"><img src=\"/static/upload/9c1aebf81a4c510fb74b6d5a6b59252dd52aa545.jpg\" style=\"max-width:100%;\"><br></p><p><b>严格的品质控制</b></p><p>灌装洁净间整体以1000级，灌装局部100级的标准要求，采用全自动智能灌装生产，在无菌、无人状态下进行灌装生产，由主控制室操作人员界面操作控制，且灌装洁净间的空气洁净度须由品控人员定时检测和定时熏蒸消毒，每班次都要对灌装区域的环境进行紫外线杀菌消毒，灌装线全线多点电脑自动检测，完全保证了每一桶水的品质和质量安全，从水源，到原材料到生产、成品都以严格的ISO9000和HACCP的标准和要求进行检测和控制，同时品控部实验人员及时、准确、无误的检测和国家权威机构监督检测，保证了每一桶都符合高标准要求。</p><p>公司名称：鑫鹏伟裕(北京)商贸有限公司</p><p>公司地址：北京市通州区绿地中央广场2期1511室(新华北路东)</p><p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</p><p>公司座机：010-57225345</p>', '2017-11-12 11:44:20');

-- ----------------------------
-- Table structure for ys_order
-- ----------------------------
DROP TABLE IF EXISTS `ys_order`;
CREATE TABLE `ys_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(11) DEFAULT NULL COMMENT '用户名',
  `product_name` varchar(255) DEFAULT NULL,
  `capacity` varchar(255) DEFAULT NULL COMMENT '容量',
  `product_price` decimal(10,2) DEFAULT NULL COMMENT '价格（单价）',
  `buy_number` int(11) DEFAULT NULL COMMENT '购买数量',
  `time` datetime DEFAULT NULL COMMENT '配送时间',
  `ps_person` varchar(255) DEFAULT NULL COMMENT '配送人',
  `ps_tel` varchar(255) DEFAULT NULL COMMENT '配送人电话',
  `score` varchar(255) DEFAULT NULL COMMENT '积分',
  `date` datetime DEFAULT NULL COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_order
-- ----------------------------
INSERT INTO `ys_order` VALUES ('3', 'yanyutao', '农夫山泉', '300ml', '38.00', '1', '2017-10-30 15:42:01', '张三萨芬撒旦法', '13366826071', '35', null);
INSERT INTO `ys_order` VALUES ('4', 'yanyutao', '农夫山泉', '500', '36.00', '1', '2018-02-24 06:18:37', '王亚兰', '13366826071', '35', null);

-- ----------------------------
-- Table structure for ys_permission
-- ----------------------------
DROP TABLE IF EXISTS `ys_permission`;
CREATE TABLE `ys_permission` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '编号 标识',
  `mark` int(2) DEFAULT NULL COMMENT '权限标识',
  `name` varchar(255) DEFAULT NULL COMMENT '权限名称',
  `info` varchar(255) DEFAULT NULL COMMENT '权限描述',
  `system` smallint(1) DEFAULT '0' COMMENT '系统默认权限不可删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_permission
-- ----------------------------
INSERT INTO `ys_permission` VALUES ('1', '1', '登录管理', '登录管理', '1');
INSERT INTO `ys_permission` VALUES ('2', '2', '管理员管理', '管理员管理', '1');
INSERT INTO `ys_permission` VALUES ('3', '3', '等级管理', '等级管理', '1');
INSERT INTO `ys_permission` VALUES ('4', '4', '权限管理', '权限管理', '1');
INSERT INTO `ys_permission` VALUES ('5', '5', '栏目管理', '栏目管理', '1');
INSERT INTO `ys_permission` VALUES ('6', '6', '文章管理', '文章管理', '1');
INSERT INTO `ys_permission` VALUES ('7', '7', '轮播管理', '轮播管理', '1');
INSERT INTO `ys_permission` VALUES ('8', '8', '广告管理', '广告管理', '1');
INSERT INTO `ys_permission` VALUES ('9', '9', '友情连接', '友情连接', '1');
INSERT INTO `ys_permission` VALUES ('10', '10', '会员管理', '会员管理', '1');
INSERT INTO `ys_permission` VALUES ('11', '11', '评论管理', '评论管理', '1');
INSERT INTO `ys_permission` VALUES ('12', '12', '系统管理', '系统管理', '1');

-- ----------------------------
-- Table structure for ys_slide
-- ----------------------------
DROP TABLE IF EXISTS `ys_slide`;
CREATE TABLE `ys_slide` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `img` varchar(100) DEFAULT NULL COMMENT '图片地址',
  `url` varchar(255) DEFAULT NULL COMMENT '轮播图链接',
  `title` varchar(50) DEFAULT NULL COMMENT '标题',
  `info` varchar(200) DEFAULT NULL COMMENT '描述',
  `state` varchar(1) DEFAULT NULL COMMENT '状态：启用1 关闭0',
  `date` datetime DEFAULT NULL COMMENT '发布日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_slide
-- ----------------------------
INSERT INTO `ys_slide` VALUES ('30', '/static/upload/logo-2.png', 'asdf', 'asfd向', 'asdfasdf', '1', '2017-12-26 17:54:12');
INSERT INTO `ys_slide` VALUES ('31', '/static/upload/logo-2.png', 'asdf信息', 'asfd', 'asdfasdf', '1', '2017-12-26 17:54:13');
INSERT INTO `ys_slide` VALUES ('32', '/static/upload/yuscms.png', 'sdgsdfgsdg', 'dgffdsgfdsgfd', ' 关闭 关闭 关闭 关闭 关闭 关闭', '0', '2017-12-28 13:30:27');
INSERT INTO `ys_slide` VALUES ('33', '/static/upload/20180224-11-00-43_13518_RTX截图未命名.jpg', 'http://www.360doc.com/content/13/1229/11/7470776_340954519.shtml', 'nihao', 'nihao', '1', '2018-02-24 11:00:55');

-- ----------------------------
-- Table structure for ys_system
-- ----------------------------
DROP TABLE IF EXISTS `ys_system`;
CREATE TABLE `ys_system` (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `webname` varchar(100) DEFAULT NULL COMMENT '网站名称',
  `keyword` varchar(120) DEFAULT NULL COMMENT '网站关键词',
  `description` varchar(220) DEFAULT NULL COMMENT '网站描述',
  `weburl` varchar(100) DEFAULT NULL COMMENT '网址',
  `email` varchar(255) DEFAULT NULL COMMENT '站长邮箱',
  `copyright` varchar(255) DEFAULT NULL COMMENT '版权信息或备案号',
  `code` varchar(255) DEFAULT NULL COMMENT '站点统计代码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_system
-- ----------------------------
INSERT INTO `ys_system` VALUES ('1', 'yuscms管理系统', 'yuscms,nodecms,node cms，cms,内容管理系统，网站建设', '这是一个node.js开发的cms内容管理系统,', 'www.yuscms.com', '867528315@qq.com', '雨说工作室-Tao', 'abcacb修行修行xxxx想学学');
INSERT INTO `ys_system` VALUES ('2', '', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for ys_tag
-- ----------------------------
DROP TABLE IF EXISTS `ys_tag`;
CREATE TABLE `ys_tag` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `tagname` varchar(20) DEFAULT NULL,
  `count` int(5) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_tag
-- ----------------------------

-- ----------------------------
-- Table structure for ys_user
-- ----------------------------
DROP TABLE IF EXISTS `ys_user`;
CREATE TABLE `ys_user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `user` varchar(20) DEFAULT NULL COMMENT '用户名',
  `pass` varchar(40) DEFAULT NULL COMMENT '密码',
  `tel` varchar(255) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL COMMENT '电子邮件',
  `province` varchar(20) DEFAULT NULL COMMENT '省',
  `city` varchar(40) DEFAULT NULL COMMENT '市',
  `area` varchar(255) DEFAULT NULL COMMENT '区',
  `address` varchar(20) DEFAULT NULL COMMENT '地址',
  `state` int(1) DEFAULT '1' COMMENT '会员状态 \r\n0-拉黑会员，禁止登录\r\n1.初级会员\r\n2.中级会员\r\n3.高级会员4.vip会员',
  `date` datetime DEFAULT NULL COMMENT '注册时间',
  `face` varchar(100) DEFAULT NULL COMMENT '头像',
  `time` char(13) DEFAULT NULL COMMENT '//登录时间',
  `sex` smallint(1) DEFAULT '1' COMMENT '性别 1男 2女',
  `workplace` varchar(255) DEFAULT NULL COMMENT '工作单位',
  `water` smallint(8) DEFAULT '0' COMMENT '剩余水量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_user
-- ----------------------------
INSERT INTO `ys_user` VALUES ('21', 'anyunfang5', '4f5e8f889cf4b6fecb70b0cb3524013e', '13391693586', '9493816765@qq.com', null, null, null, null, '2', '2017-10-11 17:14:51', null, '1510654918149', null, null, '4');
INSERT INTO `ys_user` VALUES ('22', '张三', '4f5e8f889cf4b6fecb70b0cb3524013e', '13366826070', '2341324213@qq.com', null, null, null, null, '1', '2017-10-11 18:38:02', null, null, null, null, '0');
INSERT INTO `ys_user` VALUES ('23', '江山', '4f5e8f889cf4b6fecb70b0cb3524013e', '867528s315@qq.com', '86752831s5@qq.com', null, null, null, null, '4', '2017-10-11 21:05:30', null, '1507727130473', null, null, '1');
INSERT INTO `ys_user` VALUES ('24', 'nima', 'fd5b4532a9600923a7e466d8afb34ee9', '133916935871', 'nisdfoajsdo@qq.comq', null, null, null, null, '2', '2017-10-12 11:42:26', '', '1507779746411', null, null, '1');
INSERT INTO `ys_user` VALUES ('25', 'test', '7f3d09845ebe9b8c37e808f80cca780e', '13366826071', '867528315@qq.com', '河北省', '石家庄市', '长安区', '', '1', '2018-02-24 14:06:54', '/static/upload/01.png', '1528019298847', '1', '', '3');
INSERT INTO `ys_user` VALUES ('26', '张晓辉', '7f3d09845ebe9b8c37e808f80cca780e', '15810511552', null, null, null, null, null, '1', '2018-06-03 23:27:12', null, '1528039750792', '1', null, '0');
