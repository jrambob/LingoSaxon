DROP DATABASE IF EXISTS lsdb;
CREATE DATABASE lsdb;
USE lsdb;

CREATE TABLE Users(
  id INTEGER AUTO_INCREMENT NOT NULL,
  word VARCHAR(300), 
  base VARCHAR(250),
  tag Varchar(300),
  dependency Varchar(200),
  PRIMARY KEY (id)
);