exports.home = function(req, res) {
    var Service = require('../models/service').Service;
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