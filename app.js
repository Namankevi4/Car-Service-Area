var express = require('express');
var app = express();
var pages = require(__dirname + '/controllers/pages');
var ParseModule = require('./SiteServiceParser');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//var Parsedata = [];
//ParseModule.parse(function(data) {
//        console.log(data);
//        Parsedata = data;
// });

app.get('/', function(req, res) { res.redirect('home') });
app.get('/home', pages.home);



module.exports = app;