var Service = require('../models/service').Service;
exports.home = function(req, res) {
      Service.find(function (err, services) {
        if (!err) {
            return res.render('home',{services});
        } else {
            res.statusCode = 500;
            return res.render('error', { error: 'Server error' });
        }
    });
}
exports.homeById = function(req, res) {
       Service.findById(req.params.id, function (err, service) {
        if (!err) {
            return res.render('servicesId', {service});
        } else if(service === undefined) {
            res.statusCode = 404;
            return res.render('error', {error: 'Not Found' });
        }
         {
            res.statusCode = 500;
            return res.render('error', {error: 'Server error' });
        }
    });
}