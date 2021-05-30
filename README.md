This repo is for practice only. just ignore this repo unless you wanna look at the codes

# Deploy node.js application on AWS with github [tutorial](https://sumantmishra.medium.com/how-to-deploy-node-js-app-on-aws-with-github-db99758294f1)

# Some codes

- npm install mongoose
- npm install dotenv       // require('dotenv/config')
- npm install body-parser => `app.use(bodyParser.json());` // req.body cannot be read directly we need parse.
```
router.get('/:postId', (req,res) =>{
    console.log(req.params.postId);
})
'/:postId' => https://google.com/posts/This is where shows postId;
```
