const express = require('express');
const router = express.Router();

router.post('/signup',(req,res) =>{
    res.send('Recieved sign up data');
});

router.post('/login',(req,res) =>{
    res.send('Recieved login data');
});

module.exports = router;