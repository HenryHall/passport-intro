var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

var index = require('../routes/index.js');
var register = require('../routes/register.js');

app.use('/register', register);
app.use('/*', index);

app.listen(3000, function(res, req){
  console.log("Listening on 3000.");
});
