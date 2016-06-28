var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(res, res){
  res.sendFile(path.resolve('public/views/register.html'));
});

module.exports = router;
