const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        default: "",
    },
    info:{
        type:String,
        default: "",
    },
    price:{
        type:Number,
        min:5,
        default: 5,

    },
    date:{
        type:Date,
        default:Date.now
    }
})




module.exports = mongoose.model('Posts',postSchema);