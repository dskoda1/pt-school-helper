use c9;

CREATE TABLE users
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    username varchar(255) NOT NULL UNIQUE,
    email varchar(255),
    password varchar(255) NOT NULL
);