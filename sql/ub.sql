DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `id` char(36) NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `systems`;
CREATE TABLE `systems` (
  `id` char(36) NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` char(36) NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
);