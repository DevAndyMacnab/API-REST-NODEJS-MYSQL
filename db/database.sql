CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employe(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1,"Andy Macnab", 11750),
(2,"Roberto Jimenez", 6000),
(3,"Marlon Jimenez", 8500);

SELECT * FROM employee;

SELECT * FROM employee WHERE id=14;

DELETE FROM employee WHERE id=4;

UPDATE employee SET name="new name", salary=1890 WHERE id=7;
