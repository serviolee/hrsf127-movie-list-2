const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../db/db.js');
const controller = require('./controllers/controller.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/movies', controller.getAllMovies);
// app.post('/api/movie', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });
app.post('/api/movie', controller.addMovie);


app.use(function(req, res) {
  console.log('inside express');
  res.send('Hello World');
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});