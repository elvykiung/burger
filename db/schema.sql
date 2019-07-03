CREATE DATABASE qxs7ord2i9y8cbpu;
USE qxs7ord2i9y8cbpu;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);
