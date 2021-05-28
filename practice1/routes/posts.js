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
router.get('/:postId',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch(err){
        res.json({message : err});
    }
})
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost)
    } catch(err){
        res.json({message : err});
    }
})
router.patch('/:postId', async (req,res)=>{
    try{
        const patchedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set:{title:req.body.title, description: req.body.description}}
            )
            res.json(patchedPost);
    } catch(err){
        res.json({message: err});
    }
})

module.exports = router;