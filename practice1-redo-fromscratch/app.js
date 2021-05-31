const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/',(req,res)=>{
    res.send('hello this is a test');
})

mongoose.connect(process.env.DB_LOGIN,{ useNewUrlParser: true, useUnifiedTopology: true },(req,res)=>{
    if(!res){
        console.log('server login failed');
    }
    console.log('MongoDB connected')    
})


app.listen(PORT);