-- For testing purposes drop DATABASE before reloading it
DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movie (
  id int NOT NULL  AUTO_INCREMENT,
  title varchar(32)  NOT NULL,
  overview varchar(1048) NOT NULL,
  release_date varchar(24) NOT NULL,
  PRIMARY KEY (id)
);

/* -- Create other tables and define schemas for them here! */

-- seed our database
INSERT INTO movie (title, overview, release_date) values ('Alien','brief description here overview', '1979');
INSERT INTO movie (title, overview, release_date) values ('Alien II','brief description here overview', '1987');
INSERT INTO movie (title, overview, release_date) values ('Quest','brief description here overview', '1979');
INSERT INTO movie (title, overview, release_date) values ('The Car','brief description here overview', '1969');
INSERT INTO movie (title, overview, release_date) values ('Tootsie','brief description here overview', '1982');
INSERT INTO movie (title, overview, release_date) values ('Alice in Wonderland','brief description here overview', '1960');
INSERT INTO movie (title, overview, release_date) values ('Mr Tibbs','brief description here overview', '196?');
INSERT INTO movie (title, overview, release_date) values ('A Piece of the Action','brief description here overview', '1977');
INSERT INTO movie (title, overview, release_date) values ('Lets Do It Again','brief description here overview', '1978');
INSERT INTO movie (title, overview, release_date) values ('Sharkies Machine','brief description here overview', '1982');
INSERT INTO movie (title, overview, release_date) values ('Alien III','brief description here overview', '1992');
INSERT INTO movie (title, overview, release_date) values ('Alien the Cartoon','brief description here overview', 'TBD');
