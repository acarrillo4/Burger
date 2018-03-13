-- Create the database burgers_db and specified it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id INT AUTO_INCREMENT,
burger_name VARCHAR(50),
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);