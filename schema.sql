-- For testing purposes drop DATABASE before reloading it
DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movie (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(32)  NOT NULL,
  overview varchar(1048) NOT NULL,
  release_date varchar(24) NOT NULL,
  isWatched BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);

/* -- Create other tables and define schemas for them here! */

-- seed our database
INSERT INTO movie (title, overview, release_date, isWatched) values ('Alien','brief description here overview', '1979', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Alien II','brief description here overview', '1987', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Quest','brief description here overview', '1979', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('The Car','brief description here overview', '1969', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Tootsie','brief description here overview', '1982', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Alice in Wonderland','brief description here overview', '1960', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Mr Tibbs','brief description here overview', '196?', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('A Piece of the Action','brief description here overview', '1977', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Lets Do It Again','brief description here overview', '1978', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Sharkies Machine','brief description here overview', '1982', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Alien III','brief description here overview', '1992', 0);
INSERT INTO movie (title, overview, release_date, isWatched) values ('Alien the Cartoon','brief description here overview', 'TBD', 0);
