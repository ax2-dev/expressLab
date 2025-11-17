const express = require('express');
const router = express.Router();

router.route('/').get((req,res) => {
    res.render('users/list',{users:users});
}).post((req,res) =>{
    const fName = req.body.firstName;
    const isValid = fName !=="";
    if(isValid){
        users.push({name:fName});
        console.log(`Added user: ${fName}`);
        console.log(`All users: ${users}`);
        res.send("User Created");
    }else{
        console.log("Error adding user");
        res.render('users/new',{firstName:fName});
    }
    
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

// OLD STRUCTURE const users = [{id:1,uname:'Aidan',pass:"123"},{id:2,uname:'P2',pass:"456"}];

const users = [{name:"Aidan"},{name:"Not Aidan"}]

router.param('id', (req,res,next,id) =>{
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;