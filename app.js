var express = require('express');
var app = express();
var pages = require(__dirname + '/controllers/pages');
var logger = require('morgan');
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.engine('ejs',require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' })
app.use(logger('combined', { stream: accessLogStream }));

var createdb = require('./CreateDB');

app.get('/', function(req, res) { res.redirect('home') });
app.get('/home', pages.home);
app.get('/home/:id', pages.homeById);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    error: err.message,
  });
});


module.exports = app;