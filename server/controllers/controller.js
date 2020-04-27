const model = require('../../db/models/models.js');

const getAllMovies = (req, res) => {
  model.getAllMovies((err, result) => {
    if (err) {
      console.log('error from getAllMovies server: ', err);
      res.status(500);
    } else {
      res.json(result);
    }
  })
}

const addMovie = (req, res) => {
  console.log('controller request body title: ', req.body.title);
  console.log('controller request body: ', req.body);
  model.addMovie(req.body, (err, result) => {
    if (err) {
      console.log('error from addMovie server: ', err);
      res.status(500);
    } else {
      res.status(200).json(result);
    }
  })
}

module.exports = {
  getAllMovies,
  addMovie
}