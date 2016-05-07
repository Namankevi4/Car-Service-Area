var mongoose = require('../mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    address:{
        type: String,
        requried: true
    },
    workinghours:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    production:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    created:{
        type:Date,
        default: Date.now
    }
});

exports.Service = mongoose.model('service',schema);