const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.get('/unique', (req, res) => {
    res.send('We are on unique page');
});



module.exports = router;