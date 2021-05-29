const router = require('express').Router();
const Post = require('../models/post');


router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find().limit(10)
        res.json(posts);
    } catch(err){
        res.json(err);
    }
})

router.post('/', async (req,res)=>{
    const post = new Post({
        id: req.body.id,
        title: req.body.title,
        info: req.body.info,
        price: req.body.price
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost)
    } catch(err){
        res.json(`error message: ${err}`);
    }
})

router.get('/:postId', async (req,res)=>{
    try{
        const specPost = await Post.findById(req.params.postId);
        res.json(specPost);
    } catch(err){
        res.json(`error message: ${err}`);
    }
})
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err){
        res.json(`error message: ${err}`);
    }
})

router.patch('/:id', async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne(
            {_id:req.params.id},
            {$set:{title:req.body.title, info:req.body.info, price:req.body.price}}
        );
        res.json(updatedPost);
    }   catch(err){
        res.json(`error message: ${err}`);
    }
})

module.exports = router;