var mongoose = require('mongoose');

//надо забрать с конфига
mongoose.connect('mongodb://localhost/test');

module.exports = mongoose;