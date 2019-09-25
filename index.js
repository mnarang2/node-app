var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Anchal, this is our CI/CD Pipleline.');
});

app.listen(process.env.PORT || 3000);

module.exports = app;

