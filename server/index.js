const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/api/movies', function(req, res) {
  res.send(movies);
})

app.use(function(req, res) {
  console.log('inside express');
  res.send('Hello World');
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});