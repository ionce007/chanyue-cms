/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nuode

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-03-20 22:15:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for m_house
-- ----------------------------
DROP TABLE IF EXISTS `m_house`;
CREATE TABLE `m_house` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `type` int(11) DEFAULT NULL COMMENT '类型：1->整租 2->合租 3->住宅 4->写字楼',
  `price` int(10) DEFAULT '0' COMMENT '价格 租金',
  `huxing` tinyint(10) DEFAULT NULL COMMENT '户型：1->1居 2->2居 3->3居 4->4居',
  `mianji` tinyint(11) DEFAULT NULL COMMENT '面积',
  `chaoxiang` tinyint(1) DEFAULT '1' COMMENT '朝向：1朝南 2朝北',
  `fengge` tinyint(1) DEFAULT NULL COMMENT '风格',
  `xuexiao` tinyint(1) DEFAULT NULL COMMENT '学校 1有 2没有',
  `quyu` varchar(100) DEFAULT NULL COMMENT '新华区、长安区、裕华区、桥东区、桥西区、开发区、鹿泉区、藁城区',
  `addr` varchar(255) DEFAULT NULL COMMENT '地址',
  `chuwei` varchar(20) DEFAULT NULL COMMENT '1独立厨卫 2 通用',
  `kaipan_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '开盘时间',
  `zhengjian` varchar(20) DEFAULT NULL COMMENT '证件：五证齐全',
  `jiaotong` varchar(50) DEFAULT NULL COMMENT '交通',
  `cur_louceng` tinyint(3) DEFAULT NULL COMMENT '当前楼层',
  `total_louceng` tinyint(3) DEFAULT NULL COMMENT '总楼层',
  `zhuangtai` tinyint(2) DEFAULT NULL COMMENT '售卖状态：1 在售 2 售罄',
  `nav` mediumint(8) DEFAULT NULL COMMENT '菜单id',
  `attr` varchar(30) DEFAULT NULL COMMENT '自定义属性 头条 推荐 加粗 跳转',
  `tag` varchar(30) DEFAULT NULL,
  `keyword` varchar(30) DEFAULT NULL,
  `thumbnail` varchar(300) DEFAULT NULL,
  `source` varchar(20) DEFAULT NULL,
  `author` varchar(10) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `content` text,
  `comment` tinyint(1) DEFAULT NULL,
  `count` smallint(6) DEFAULT NULL,
  `gold` smallint(6) DEFAULT '0' COMMENT '//默认金币',
  `sort` smallint(6) DEFAULT NULL,
  `readlimit` tinyint(4) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_house
-- ----------------------------
INSERT INTO `m_house` VALUES ('1', '[鹿泉 鹿泉] 保利西悦春天', '2', '12800', '5', '80', '1', '1', '1', '长安区', '横岭大街与御园路交汇处西行200米路北', null, null, null, null, null, null, null, '1', '推荐', '', '', '/static/upload/20180307-17-30-26_12400_800x600c.jpg', '网络', 'admin', '', '<div id=\"j-district\"><div><h3>楼盘概况</h3><b><i><font color=\"#4d80bf\"><b>查看更多&gt;&gt;</b><br></font></i></b></div><div><div><ul><li><p><b><i><font color=\"#4d80bf\">开盘时间2018-01-01</font></i></b></p><p><b>交房时间2020-11-15</b></p><p>开发商<em>河北省省直纪元房地产...</em></p></li><li><p>装修情况毛坯</p><p>建筑类型小高层</p><p>产权年限70年</p></li><li><p>容积率1.98</p><p>物业费住宅:1.8/平米/月暂无</p><p>物业公司保利物业管理有限公</p></li><li><p>绿化率35.00%</p><p>规划户数3124户</p><p>车位比1:1</p></li></ul></div></div></div><div id=\"j-map-periph\"><div><h3>交通配套</h3><a href=\"https://sjz.fang.anjuke.com/loupan/ditu-408568.html?from=tuangou_view\" soj=\"tuangou_view\" target=\"_blank\">更多交通配套&gt;&gt;</a></div><div><p>周边交通便利，地处鹿泉区横岭大街与御园路交汇处，周边三环路、京赞线与青银高速为快速通道；园区内部御园路、迎宾馆路、中山西路与槐安西路形成网状交通。</p><div><ul id=\"tuangou-tab\"><li id=\"peripheral-traffic\"><a href=\"javascript:\" data-sojcommon=\"periph-tab\"><h4>交通</h4><p>301路、318路、325、320路、游5路</p><div>2公里内&nbsp;0条地铁，7个公交站点</div><i></i></a></li><li id=\"peripheral-commerce\"><a href=\"javascript:\" data-sojcommon=\"periph-tab\"><h4>商业</h4><p>上庄市场、北国西兴超市</p><div>3公里内&nbsp;7个商场超市，15个银行，12间餐厅</div><i></i></a></li><li id=\"peripheral-education\"><a href=\"javascript:\" data-sojcommon=\"periph-tab\"><h4>教育</h4><p>石家庄幼儿师范学校、西山双语幼儿园</p><div>3公里内&nbsp;6所中学，7所小学，14所幼儿园</div><i></i></a></li><li id=\"peripheral-medical\"><a href=\"javascript:\" data-sojcommon=\"periph-tab\"><h4>医院</h4><p>鹿泉市上庄镇卫生院、河北医科大学第二医院西院</p><div>5公里内&nbsp;11所医院</div></a></li></ul></div></div></div>', '1', '0', '0', '1', '0', '2018-03-14 18:01:09');
INSERT INTO `m_house` VALUES ('2', '这个我就测试', '2', '123132', '3', '123', '1', '1', '1', 'xinhua', '萨菲大放送啊萨芬的', null, null, null, null, null, null, null, '1', '推荐', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>ASF是否撒旦法倒萨</p>', '1', '0', '0', '1', '0', '2018-03-07 18:01:13');
INSERT INTO `m_house` VALUES ('3', '撒旦法萨芬到', '1', '1231243', '2', '123', '1', '1', '1', 'xinhua', '啊撒旦法萨芬的', null, null, null, null, null, null, null, '1', '推荐', '撒旦法撒旦法', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>阿斯顿飞撒到f</p>', '1', '0', '0', '1', '0', '2018-03-21 18:01:17');
INSERT INTO `m_house` VALUES ('4', '这里是测试数据啊', '2', '1200', '2', '20', '1', '1', '1', '开发区', '巴拉巴拉巴拉巴', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>巴拉巴拉巴拉巴<span style=\"display: inline !important;\">巴拉巴拉巴拉巴</span><span style=\"display: inline !important;\">巴拉巴拉巴拉巴</span><span style=\"display: inline !important;\">巴拉巴拉巴拉巴</span><span style=\"display: inline !important;\">巴拉巴拉巴拉巴</span></p>', '1', '0', '0', '1', '0', '2018-03-08 08:14:16');
INSERT INTO `m_house` VALUES ('5', '我是整租你测试数据看看', '1', '200', '5', '20', '1', '1', '1', 'yuhua', '我是整租你测试数据看看我是整租你测试数据看看', null, null, null, null, null, null, null, '0', '', '', '', '', '网络', 'admin', '', '<p>欢<span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span></p>', '1', '0', '0', '1', '0', '2018-03-08 08:15:31');
INSERT INTO `m_house` VALUES ('6', '我是整租你测试数据看看1', '1', '200', '5', '20', '1', '1', '1', 'yuhua', '我是整租你测试数据看看我是整租你测试数据看看', null, null, null, null, null, null, null, '0', '', '', '', '', '网络', 'admin', '', '<p>欢<span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span><span style=\"display: inline !important;\">我是整租你测试数据看看</span></p>', '1', '0', '0', '1', '0', '2018-03-08 08:15:31');
INSERT INTO `m_house` VALUES ('7', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('8', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('9', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('10', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('11', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('12', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('13', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', '裕华区', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('14', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('15', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('16', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('17', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('18', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('19', '测试数据啦啦', '1', '123', '2', '127', '1', '1', '1', 'xinhua', '1啊嘎嘎被', null, null, null, null, null, null, null, '1', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨埵佛萨埵佛</p>', '1', '0', '0', '1', '0', '2018-03-08 09:43:13');
INSERT INTO `m_house` VALUES ('20', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('21', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('22', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('23', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('24', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('25', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('26', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('27', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('28', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('29', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('30', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '推荐', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('31', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '推荐', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('32', '买房子啦', '3', '1234', '2', '123', '1', '1', '1', '新华区', '撒广告的', null, null, null, null, null, null, null, '2', '推荐', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>买房子啦<span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span><span style=\"display: inline !important;\">买房子啦</span></p>', '1', '0', '0', '1', '0', '2018-03-08 10:41:52');
INSERT INTO `m_house` VALUES ('33', '我有一个房子你来随便买', '3', '1230', '3', '45', '2', '1', '1', '桥西区', '哗啦啦小魔仙', null, '2018-03-16 06:25:34', '五证齐全', '距离地铁东单站200米', '1', '2', '1', '3', '跳转', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>呼啦呼啦 卖房啦</p>', '1', '0', '0', '1', '0', '2018-03-16 06:18:35');
INSERT INTO `m_house` VALUES ('34', '新盘房源', '4', '123', '1', '89', '1', '1', '1', '鹿泉区', '东北萨曼省获古龙爱得的城堡330区域', '三室两厅', '2018-03-16 07:22:52', '五证齐全', '交通便捷', '1', '23', '1', '2', '', '', '', '', '网络', 'admin', '', '<p>欢迎使用\n                                        <b>yuscms</b> 系统!</p><p>萨芬</p>', '1', '0', '0', '1', '0', '2018-03-16 07:22:52');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_ad
-- ----------------------------
INSERT INTO `ys_ad` VALUES ('1', '年前出租找诺德，全年租金可年付', '/static/upload/20180308-11-30-49_13879_ad1.png', 'http://www.bajieleju.com', '1', '1', null, '2018-03-08 11:31:13');
INSERT INTO `ys_ad` VALUES ('2', '年前出租找诺德，全年租金可年付', '/static/upload/20180308-11-31-47_10343_ad2.png', 'http://www.bajieleju.com', '1', '1', null, '2018-03-08 11:32:02');
INSERT INTO `ys_ad` VALUES ('3', '年前出租找诺德，全年租金可年付', '/static/upload/20180308-11-32-28_16542_ad3.png', 'http://www.bajieleju.com', '1', '1', null, '2018-03-08 11:32:42');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_admin
-- ----------------------------
INSERT INTO `ys_admin` VALUES ('1', 'yuanhao', '7f3d09845ebe9b8c37e808f80cca780e', '1', '9', '', '2018-03-20 21:45:25', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('2', 'yanyutao', '7f3d09845ebe9b8c37e808f80cca780e', '1', '2', '', '2018-03-05 21:34:34', '0000-00-00 00:00:00');
INSERT INTO `ys_admin` VALUES ('3', 'yuscms', '6ebe601b6e5c8a42461a2109f853baec', '1', '1', '', '2018-03-20 21:52:30', '2018-03-20 21:50:43');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_article
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_comment
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_level
-- ----------------------------
INSERT INTO `ys_level` VALUES ('1', '1', '超级管理员', '可以使用所有后台功能', '1,2,3,4,5,6,7,8,9,10,11,12');
INSERT INTO `ys_level` VALUES ('2', '2', '编辑管理员', '可以对栏目、文章、广告、轮播、友连等经常变更信息处理。', '1,5,6,7,8,9');
INSERT INTO `ys_level` VALUES ('3', '3', '普通管理员', '除了管理员、等级、权限之外左右功能使用。', '1,5,6,7,8,9,10,11,12');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_link
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_ly
-- ----------------------------
INSERT INTO `ys_ly` VALUES ('1', '张三丰', '13366826071', '湖北省武当山', '金顶小区', '此小区乃当年张三丰真人居住修炼之地，后成天地神仙', '2147483647');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='站内消息';

-- ----------------------------
-- Records of ys_msg
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_msgread
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_nav
-- ----------------------------
INSERT INTO `ys_nav` VALUES ('1', '我要租房', '', '0', '1', '1', '1');
INSERT INTO `ys_nav` VALUES ('2', '新房买卖', '', '0', '1', '1', '1');
INSERT INTO `ys_nav` VALUES ('3', '二手房买卖', '', '0', '1', '1', '1');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_order
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_permission
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_slide
-- ----------------------------
INSERT INTO `ys_slide` VALUES ('1', '/static/upload/20180308-11-17-10_12765_ad.jpg', 'http://www.baidu.com', '你好吗 我很好，我知道你很好', '', '1', '2018-03-08 11:17:45');
INSERT INTO `ys_slide` VALUES ('2', '/static/upload/20180308-11-18-12_16068_ad.jpg', 'http://www.bajieleju.com', '八戒乐居网', '诺德房产', '1', '2018-03-08 11:18:52');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_system
-- ----------------------------
INSERT INTO `ys_system` VALUES ('1', '石家庄租房_石家庄租房网_石家庄租房信息|价格|网站【诺德房产】', '石家庄租房,石家庄房屋托管，石家庄房产,租房,买房，卖房，房屋托管，诺德房产', '诺德房产专注于石家庄租房，卖房，二手房，房屋托管，房屋装修等业务公司。', 'www.nuode.com', 'yuanhao@163.com', ' 冀ICP备18002826号-2', '');

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
  `provinces` varchar(20) DEFAULT NULL COMMENT '省市区',
  `address` varchar(20) DEFAULT NULL COMMENT '地址',
  `state` int(1) DEFAULT '1' COMMENT '会员状态 \r\n0-拉黑会员，禁止登录\r\n1.初级会员\r\n2.中级会员\r\n3.高级会员4.vip会员',
  `date` datetime DEFAULT NULL COMMENT '注册时间',
  `face` varchar(100) DEFAULT NULL COMMENT '头像',
  `time` char(13) DEFAULT NULL COMMENT '//登录时间',
  `sex` smallint(1) DEFAULT '1' COMMENT '性别 1男 2女',
  `workplace` varchar(255) DEFAULT NULL COMMENT '工作单位',
  `water` smallint(8) DEFAULT '0' COMMENT '剩余水量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ys_user
-- ----------------------------
