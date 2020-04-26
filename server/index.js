const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});