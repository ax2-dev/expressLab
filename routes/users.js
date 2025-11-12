const express = require('express');
const router = express.Router();

router.route('/').get((req,res) => {
    res.send('User list');
}).post((req,res) =>{
    res.send('POST req got');
});

router.get('/new',(req,res) =>{
    res.send('New user form');
});

router.route('/:id').get((req,res) =>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req,res) =>{
    res.send(`Deleting User Data: ${req.param.id}`);
}).put((req,res) =>{
    res.send(`Updating User Data: ${req.param.id}`);
});

const users = [{id:1,uname:'Aidan',pass:"123"},{id:2,uname:'P2',pass:"456"}];

router.param('id', (req,res,next,id) =>{
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;