var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Cool/', function(req, res, next) {
  res.send('You are cool! So cool');
});

module.exports = router;
