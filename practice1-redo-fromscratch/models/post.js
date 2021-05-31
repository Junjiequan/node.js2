const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        default:'title',
    },
    info:{
        type:String,
        default:'info',
    }
})

module.exports = mongoose.model('post',postSchema);