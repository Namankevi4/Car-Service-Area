var express = require('express');
var app = express();
var pages = require(__dirname + '/controllers/pages');

app.use(express.static(__dirname + '/public'));

app.engine('ejs',require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var createdb = require('./CreateDB');

app.get('/', function(req, res) { res.redirect('home') });
app.get('/home', pages.home);



module.exports = app;