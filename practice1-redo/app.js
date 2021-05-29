const express = require('express');
const PORT = process.env.PORT || 3007;
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

app.get('/', (req,res)=>{
    res.send(`niceeeeeeeeeeeeeeeeeeeee`);
})


mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true}, (req,res)=>{
        if(!res){
            console.log("server is not connected");
            return;
        }
        console.log('mongoDB is connected');
    })

app.listen('https://a331998513.github.io/node.js2/practice1-redo');