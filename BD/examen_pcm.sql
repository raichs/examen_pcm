/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL_LOCAL
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : 127.0.0.1:3306
 Source Schema         : examen_pcm

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 02/10/2021 13:35:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for detalleventa
-- ----------------------------
DROP TABLE IF EXISTS `detalleventa`;
CREATE TABLE `detalleventa`  (
  `iddetalle` int(255) NOT NULL AUTO_INCREMENT,
  `idventa` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idproducto` int(255) NULL DEFAULT NULL,
  `cantidad` int(255) NULL DEFAULT NULL,
  `precio` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`iddetalle`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of detalleventa
-- ----------------------------

-- ----------------------------
-- Table structure for persona
-- ----------------------------
DROP TABLE IF EXISTS `persona`;
CREATE TABLE `persona`  (
  `cPerCodigo` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Codigo de la persona.',
  `cPerNombre` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Nombre de la persona.',
  `cPerApellidos` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dPerNacimiento` date NOT NULL COMMENT 'Fecha de nacimiento de la persona.',
  `nPerTipo` int(11) NOT NULL COMMENT 'Codigo si es una persona  juridica o natural.',
  `cPerImagen` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nPerEstado` int(11) NOT NULL COMMENT 'Codigo si esta persona esta activa o inactivo.',
  PRIMARY KEY (`cPerCodigo`) USING BTREE,
  UNIQUE INDEX `idx_persona`(`cPerCodigo`) USING BTREE,
  INDEX `idx_busqueda`(`cPerNombre`(255), `cPerApellidos`(255)) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'En esta tabla se registran los nombres de una persona' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of persona
-- ----------------------------
INSERT INTO `persona` VALUES ('1000000001', 'Administrador', 'Administrador', '2017-02-16', 1, '20171204210031.jpg', 1);
INSERT INTO `persona` VALUES ('2348638208', 'Mozo', 'Mozo', '2017-02-16', 2, '20171204210031.jpg', 1);

-- ----------------------------
-- Table structure for pertipoacceso
-- ----------------------------
DROP TABLE IF EXISTS `pertipoacceso`;
CREATE TABLE `pertipoacceso`  (
  `nTipoCodigo` int(20) NOT NULL COMMENT 'Codigo del tipo de usuario quien tendra acceso al sistema.',
  `nPerUsuAccGrupo` int(11) NOT NULL COMMENT 'Codigo de un determinado grupo a la que una persona tendra acceso.',
  `nPerUsuAccTipo` int(11) NOT NULL COMMENT 'Codigo de un determinado grupo a la que una persona tendra acceso.',
  `nPerUsuAccObjCodigo` int(11) NOT NULL COMMENT 'Codigo del permiso al que tendra una persona.',
  `nPerUsuAccCodigo` int(11) NOT NULL COMMENT 'Codigo del permiso al que tendra una persona.',
  `nPerUsuAccPrdCodigo` int(11) NOT NULL COMMENT 'Codigo de un determinado periodo al que un usuario tendra acceso.',
  `nPerUsuAccEstado` int(11) NOT NULL COMMENT 'Codigo del estado de un usuario(activo - inactivo).',
  PRIMARY KEY (`nTipoCodigo`, `nPerUsuAccGrupo`, `nPerUsuAccTipo`, `nPerUsuAccObjCodigo`, `nPerUsuAccCodigo`, `nPerUsuAccPrdCodigo`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'En esta tabla se registraran los permisos de un determinado tipo de usuario' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of pertipoacceso
-- ----------------------------
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 2, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 3, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 4, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 5, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 6, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 7, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 8, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 9, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 10, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 11, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 12, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 13, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 14, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 15, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 16, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 17, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 18, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 19, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 20, 1, 0);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 21, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 23, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 24, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 25, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 26, 1, 1);
INSERT INTO `pertipoacceso` VALUES (1, 1000, 1, 1001, 27, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 7, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 10, 1, 0);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 11, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 12, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 13, 1, 0);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 16, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 17, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 18, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 19, 1, 1);
INSERT INTO `pertipoacceso` VALUES (2, 1000, 1, 1001, 22, 1, 1);

-- ----------------------------
-- Table structure for perusuario
-- ----------------------------
DROP TABLE IF EXISTS `perusuario`;
CREATE TABLE `perusuario`  (
  `cPerCodigo` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cPerUsuCodigo` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cPerUsuClave` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nPerUsuTipo` int(11) NOT NULL DEFAULT 1,
  `nPerUsuEstado` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`cPerUsuCodigo`) USING BTREE,
  UNIQUE INDEX `idxcPerUsuCodigo`(`cPerUsuCodigo`) USING BTREE,
  INDEX `idxcPerUsuValidar`(`cPerUsuCodigo`, `cPerUsuClave`(255), `nPerUsuEstado`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of perusuario
-- ----------------------------
INSERT INTO `perusuario` VALUES ('1000000001', 'admin', 'e10adc3949ba59abbe56e057f20f883e', 1, 1);
INSERT INTO `perusuario` VALUES ('2348638208', 'mozo', 'e10adc3949ba59abbe56e057f20f883e', 1, 1);

-- ----------------------------
-- Table structure for venta
-- ----------------------------
DROP TABLE IF EXISTS `venta`;
CREATE TABLE `venta`  (
  `idventa` int(255) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idmesa` int(255) NULL DEFAULT NULL,
  `fecha` date NULL DEFAULT NULL,
  `total` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`idventa`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of venta
-- ----------------------------

-- ----------------------------
-- Procedure structure for USP_Listar_Ventas
-- ----------------------------
DROP PROCEDURE IF EXISTS `USP_Listar_Ventas`;
delimiter ;;
CREATE PROCEDURE `USP_Listar_Ventas`()
BEGIN
SELECT T1.*
FROM `venta` T1;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for USP_Registrar_Detalle
-- ----------------------------
DROP PROCEDURE IF EXISTS `USP_Registrar_Detalle`;
delimiter ;;
CREATE PROCEDURE `USP_Registrar_Detalle`(IN `idventa` INT,IN `idproducto` INT,IN `cantidad` INT,IN `precio` DECIMAL(10,2))
BEGIN

INSERT INTO `detalleventa`(`idventa`, `idproducto`, `cantidad`, 
`precio`) 
VALUES (idventa, idproducto, cantidad, 
precio);
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for USP_Registrar_Venta
-- ----------------------------
DROP PROCEDURE IF EXISTS `USP_Registrar_Venta`;
delimiter ;;
CREATE PROCEDURE `USP_Registrar_Venta`(IN `cliente` VARCHAR(150),IN `idmesa` INT,IN `fecha` DATE,IN `total` DECIMAL(10,2))
BEGIN

INSERT INTO `venta`(`cliente`, `idmesa`, `fecha`, 
`total`) 
VALUES (cliente, idmesa, fecha, 
total);

SELECT LAST_INSERT_ID() AS Id;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
