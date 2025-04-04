-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_white_lotus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_white_lotus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_white_lotus` DEFAULT CHARACTER SET utf8 ;
USE `db_white_lotus` ;

-- -----------------------------------------------------
-- Table `db_white_lotus`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre_completo` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `contrasena` VARCHAR(15) NOT NULL,
  `contrasena_verificacion` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`id_usuarios` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`envio` (
  `id_envio` INT NOT NULL AUTO_INCREMENT,
  `fecha_envio` VARCHAR(45) NOT NULL,
  `direcion_c_n` VARCHAR(45) NOT NULL,
  `delegacion` VARCHAR(45) NOT NULL,
  `codigo_postal` INT NOT NULL,
  PRIMARY KEY (`id_envio`),
  UNIQUE INDEX `id_envio_UNIQUE` (`id_envio` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`flores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`flores` (
  `id_flores` INT NOT NULL AUTO_INCREMENT,
  `tipo_flor` VARCHAR(45) NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id_flores`),
  UNIQUE INDEX `id_flores_UNIQUE` (`id_flores` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`follaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`follaje` (
  `id_follaje` INT NOT NULL AUTO_INCREMENT,
  `tipo_follaje` VARCHAR(45) NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id_follaje`),
  UNIQUE INDEX `id_follaje_UNIQUE` (`id_follaje` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`papel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`papel` (
  `id_papel` INT NOT NULL AUTO_INCREMENT,
  `tipo_papel` VARCHAR(45) NOT NULL,
  `color_papel` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_papel`),
  UNIQUE INDEX `id_papel_UNIQUE` (`id_papel` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`liston`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`liston` (
  `id_liston` INT NOT NULL AUTO_INCREMENT,
  `color_liston` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_liston`),
  UNIQUE INDEX `id_liston_UNIQUE` (`id_liston` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`tarjeta` (
  `id_tarjeta` INT NOT NULL AUTO_INCREMENT,
  `mensaje_tarjeta` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_tarjeta`),
  UNIQUE INDEX `id_tarjeta_UNIQUE` (`id_tarjeta` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`articulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`articulos` (
  `id_articulos` INT NOT NULL AUTO_INCREMENT,
  `flores_id_flores` INT NOT NULL,
  `follaje_id_follaje` INT NOT NULL,
  `papel_id_papel` INT NOT NULL,
  `liston_id_liston` INT NOT NULL,
  `tarjeta_id_tarjeta` INT NOT NULL,
  PRIMARY KEY (`id_articulos`, `flores_id_flores`, `follaje_id_follaje`, `papel_id_papel`, `liston_id_liston`, `tarjeta_id_tarjeta`),
  UNIQUE INDEX `id_articulos_UNIQUE` (`id_articulos` ASC) VISIBLE,
  INDEX `fk_articulos_flores1_idx` (`flores_id_flores` ASC) VISIBLE,
  INDEX `fk_articulos_follaje1_idx` (`follaje_id_follaje` ASC) VISIBLE,
  INDEX `fk_articulos_papel1_idx` (`papel_id_papel` ASC) VISIBLE,
  INDEX `fk_articulos_liston1_idx` (`liston_id_liston` ASC) VISIBLE,
  INDEX `fk_articulos_tarjeta1_idx` (`tarjeta_id_tarjeta` ASC) VISIBLE,
  CONSTRAINT `fk_articulos_flores1`
    FOREIGN KEY (`flores_id_flores`)
    REFERENCES `db_white_lotus`.`flores` (`id_flores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_follaje1`
    FOREIGN KEY (`follaje_id_follaje`)
    REFERENCES `db_white_lotus`.`follaje` (`id_follaje`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_papel1`
    FOREIGN KEY (`papel_id_papel`)
    REFERENCES `db_white_lotus`.`papel` (`id_papel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_liston1`
    FOREIGN KEY (`liston_id_liston`)
    REFERENCES `db_white_lotus`.`liston` (`id_liston`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulos_tarjeta1`
    FOREIGN KEY (`tarjeta_id_tarjeta`)
    REFERENCES `db_white_lotus`.`tarjeta` (`id_tarjeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_white_lotus`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_white_lotus`.`pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` INT NOT NULL,
  `usuarios_id_usuarios` INT NOT NULL,
  `envio_id_envio` INT NOT NULL,
  `articulos_id_articulos` INT NOT NULL,
  `articulos_flores_id_flores` INT NOT NULL,
  `articulos_follaje_id_follaje` INT NOT NULL,
  `articulos_papel_id_papel` INT NOT NULL,
  `articulos_liston_id_liston` INT NOT NULL,
  `articulos_tarjeta_id_tarjeta` INT NOT NULL,
  PRIMARY KEY (`id_pedido`, `usuarios_id_usuarios`, `envio_id_envio`, `articulos_id_articulos`, `articulos_flores_id_flores`, `articulos_follaje_id_follaje`, `articulos_papel_id_papel`, `articulos_liston_id_liston`, `articulos_tarjeta_id_tarjeta`),
  UNIQUE INDEX `id_pedido_UNIQUE` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_pedido_usuarios_idx` (`usuarios_id_usuarios` ASC) VISIBLE,
  INDEX `fk_pedido_envio1_idx` (`envio_id_envio` ASC) VISIBLE,
  INDEX `fk_pedido_articulos1_idx` (`articulos_id_articulos` ASC, `articulos_flores_id_flores` ASC, `articulos_follaje_id_follaje` ASC, `articulos_papel_id_papel` ASC, `articulos_liston_id_liston` ASC, `articulos_tarjeta_id_tarjeta` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuarios`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `db_white_lotus`.`usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_envio1`
    FOREIGN KEY (`envio_id_envio`)
    REFERENCES `db_white_lotus`.`envio` (`id_envio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_articulos1`
    FOREIGN KEY (`articulos_id_articulos` , `articulos_flores_id_flores` , `articulos_follaje_id_follaje` , `articulos_papel_id_papel` , `articulos_liston_id_liston` , `articulos_tarjeta_id_tarjeta`)
    REFERENCES `db_white_lotus`.`articulos` (`id_articulos` , `flores_id_flores` , `follaje_id_follaje` , `papel_id_papel` , `liston_id_liston` , `tarjeta_id_tarjeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
