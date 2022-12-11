mysql > CREATE TABLE CLIENTS (
  clientID        INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName       VARCHAR(500) NOT NULL,
  lastName        VARCHAR(500) NOT NULL,
  email           VARCHAR(500) NOT NULL,
  contact         INTEGER,
  password        VARCHAR(500) NOT NULL
);


mysql> SHOW TABLES;

mysql> DESC CLIENTS;
