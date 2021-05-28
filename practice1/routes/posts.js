const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//Get all post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find().limit(5);
        res.json(posts);
    } catch(err){
        res.json(`message: cannot get data! ${err}`)
    }
});

// Submit post
router.post('/',  async (req,res)=>{
     const post = new Post({
         title: req.body.title,
         description: req.body.description,
     });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err){
        res.json(`message: ${err}`);
    }

})
router.get('/:postId',(req,res)=>{
    console.log(req.params.postId);
})


module.exports = router;