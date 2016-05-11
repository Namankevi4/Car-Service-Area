var mongoose = require('../mongoose'),Schema = mongoose.Schema;
    
    
var schema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    address:{
        type: String,
        requried: false
    },
    workinghours:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    production:{
        type: String,
        required: false
    },
    info:{
        type: String,
        required: false
    },
    created:{
        type:Date,
        default: Date.now
    }
});

exports.Service = mongoose.model('service',schema);