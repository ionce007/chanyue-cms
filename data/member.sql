SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gradeId` int(11) DEFAULT NULL,
  `vipName` varchar(50) DEFAULT NULL,
  `vipId` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `sexy` tinyint(1) DEFAULT NULL,
  `certno` varchar(50) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `addr` varchar(200) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `memo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;