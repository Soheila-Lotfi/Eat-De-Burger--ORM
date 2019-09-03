

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER NOT NULL auto_increment,
burger_name VARCHAR (30) NOT NULL,
DEVOURED BOOLEAN DEFAULT false,
PRIMARY KEY(id)


)