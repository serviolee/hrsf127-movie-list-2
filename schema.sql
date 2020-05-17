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
  movie_id INT NOT NULL,
  PRIMARY KEY(id)
);

/* -- Create other tables and define schemas for them here! */

-- seed our database
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Alien','brief description here overview', '1979', 0, 10);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Alien II','brief description here overview', '1987', 0, 11);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Quest','brief description here overview', '1979', 0, 12);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('The Car','brief description here overview', '1969', 0, 13);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Tootsie','brief description here overview', '1982', 0, 14);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Alice in Wonderland','brief description here overview', '1960', 0, 15);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Mr Tibbs','brief description here overview', '196?', 0, 16);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('A Piece of the Action','brief description here overview', '1977', 0, 17);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Lets Do It Again','brief description here overview', '1978', 0, 18);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Sharkies Machine','brief description here overview', '1982', 0, 19);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Alien III','brief description here overview', '1992', 0, 20);
INSERT INTO movie (title, overview, release_date, isWatched, movie_id) values ('Alien the Cartoon','brief description here overview', 'TBD', 0, 21);
