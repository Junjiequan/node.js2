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


module.exports = router;