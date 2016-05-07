var Service = require('./models/service').Service;
//при дропе базы все индыксы покрашаться, но мы и не используем индексы, 
//так как нету уникальных полей
var mongoose = require('./mongoose');
var async = require('async');
var ParseModule = require('./SiteServiceParser');
mongoose.set('debug',true);//выводит в консоль все действия

async.series([
  open,
  dropDatabase,
  createServices,
  close
],function(err, result){
  console.log(arguments);
});

function open(callback){
  mongoose.connection.on('open',callback);
}
function dropDatabase(callback){
   var db = mongoose.connection.db;
   db.dropDatabase(callback);
}
function createServices(callback){
  
  var Parsedata = [];
  ParseModule.parse(function(data) {
        console.log(data);
        Parsedata = data;
        async.each(data, function(ServiceData, callback){
          var service = new Service(ServiceData);
          service.save(callback);
        }, callback)
  }); 
}
function close(callback){
  mongoose.disconnect(callback);
}