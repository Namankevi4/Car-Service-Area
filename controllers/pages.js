var Service = require('../models/service').Service;
exports.home = function(req, res) {
      Service.find(function (err, services) {
        if (!err) {
            return res.render('home',{services});
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
}
exports.homeById = function(req, res) {
       Service.findById(req.params.id, function (err, service) {
        if (!err) {
            return res.send({service: service});
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
}