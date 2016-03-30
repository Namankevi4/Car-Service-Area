var express = require('express');
var router = express.Router();
var listServices = [
  { name: 'Service1', description: 'hello service1' },
  { name: 'Service2', description: 'hello service2' },
  { name: 'Service3', description: 'hello services3' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', Services: listServices });
  res.end();
});

module.exports = router;
