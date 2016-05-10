var Service = require('./models/service').Service;
var mongoose = require('./mongoose');
var async = require('async');
var ParseModule = require('./SiteServiceParser');
//mongoose.set('debug',true);//выводит в консоль все действия

setInterval(function(){
  async.waterfall([
    open,
    Parse,
    CreateServices,
    close
  ], function(err, result){
    console.log(arguments);
  });
},60000);

function open(callback){
  mongoose.connection.on('open',callback);
  callback();
}
function Parse(callback){
  ParseModule.parse(function(data) {
    console.log(data.length);
    callback(null, data);
  });
}
function CreateServices(ParseData, callback){
  if(ParseData.length>0){
    var db = mongoose.connection.db;
    db.dropDatabase();
    async.each(ParseData, function(ServiceData, callback){
      var service = new Service(ServiceData);
      service.save(callback);
    })
  }
}
function close(callback){
  mongoose.disconnect();
  callback();
}