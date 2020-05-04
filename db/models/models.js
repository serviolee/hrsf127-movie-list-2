const db = require('../db.js');

function getAllMovies(callback) { // callback from controller
  let queryString = 'select * from movie';
  db.query(queryString, function(err, data) {
    if (err) {
      console.log('error from GET models: ', err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}

function addMovie(param, callback) {
  console.log('param: ', param);
  let queryString = `INSERT INTO movie (title, overview, release_date, isWatched) value ("${param.title}", "${param.overview}", "${param.release_date}", "${param.isWatched}")`;
  db.query(queryString, function(err, data) {
    if (err) {
      console.log('error from POST models: ', err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getAllMovies,
  addMovie
}