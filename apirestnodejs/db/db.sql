CREATE DATABASE IF NOT EXISTS company;
USE company;
CREATE TABLE employess(
	id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) DEFAULT NULL,
    last_name VARCHAR(45) DEFAULT NULL,
    document_id INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);
DESCRIBE employess;
INSERT INTO employess values
	(1,'Ryan','Ray',123456),
    (2,'Stidl','Torres',234598),
    (3,'Alfonso','Moron',987654);
SELECT * FROM employess;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;