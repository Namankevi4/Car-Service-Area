var http = require('http');
var app = require(__dirname + '/app.js');
var config = require('./config');

app.set('port', config.get('port'));
var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ', app.get('port'));
});

