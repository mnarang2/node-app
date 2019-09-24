var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hey Anchal, this is our CI/CD Pipeline for node deployment');
});

app.listen(process.env.PORT || 3000);

module.exports = app;

