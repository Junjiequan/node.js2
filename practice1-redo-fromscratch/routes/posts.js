const router = require('express').Router();
const POST = require('../models/post');

router.get('/', async (req,res)=>{
    try{
        const post = await POST.find()
        res.json(post);
    } catch(err){
        res.json(`catch data error: ${err}`)
    }
})

router.post('/', async (req,res)=>{
    const post = new POST({
        id:req.body.id,
        title:req.body.title,
        info:req.body.info
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err){
        res.json(`erro message:${err}`);
    }
})
router.get('/:postId', async (req,res)=>{
    try{
        const specPost = await POST.findById(req.params.postId);
        res.json(specPost)
    } catch(err){
        res.json(`get _id erro: ${err}`);
    }
})
router.delete('/:postId', async(req,res)=>{
    try{
        const removedPost = await POST.remove({_id:req.params.postId});
        res.json(removedPost);
    } catch(err){
        res.json(`erro message:${err}`)
    }
})
router.patch('/:postId', async(req,res)=>{
    try{
        const modifiedPost = await POST.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title, info:req.body.info}}
            );
        res.json(modifiedPost);
    } catch(err){
        res.json(`patch err: ${err}`);
    }
})


module.exports = router;