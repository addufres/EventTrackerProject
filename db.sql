-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `eventtrackerdb` ;

-- -----------------------------------------------------
-- Table `eventtrackerdb`.`event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eventtrackerdb`.`event` ;

CREATE TABLE IF NOT EXISTS `eventtrackerdb`.`event` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(2,2) NOT NULL,
  `gallons` DECIMAL(2,2) NOT NULL,
  `distance` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO drew;
 DROP USER drew;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'drew' IDENTIFIED BY 'drew';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `mydb`.* TO 'drew';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `eventtrackerdb`.* TO 'drew';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `eventtrackerdb`.`event`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtrackerdb`;
INSERT INTO `eventtrackerdb`.`event` (`id`, `price`, `gallons`, `distance`) VALUES (1, 2.50, 10, 150);
INSERT INTO `eventtrackerdb`.`event` (`id`, `price`, `gallons`, `distance`) VALUES (2, 2.50, 5, 200);
INSERT INTO `eventtrackerdb`.`event` (`id`, `price`, `gallons`, `distance`) VALUES (3, 2.50, 7.5, 125);

COMMIT;
