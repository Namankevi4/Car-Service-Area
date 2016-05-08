var mongoose = require('mongoose');
mongoose.connect(require('./config').get("mongoose:uri"));
module.exports = mongoose;