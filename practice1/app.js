const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req,res)=>{
    res.send(`<h1 style="font-size:5rem"> This is index page </h1>`)
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
        console.log('connected to mongoDB.');
    }); 




app.listen(3000);