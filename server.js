const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res) =>{
    console.log('Here');
    res.render('index',{ip:req.ip,headers:req.headers['user-agent']});
});

app.get('/users', (req,res) =>{
    res.send('List of users')
});

app.get('/signup', (req,res) =>{
    res.send('Sign up form');
});

app.get('/login',(req,res) =>{
    res.send('Login page');
});

app.post('/api/signup',(req,res) =>{
    res.send('Recieved sign up data');
});

app.post('/api/login',(req,res) =>{
    res.send('Recieved login data');
});

app.listen(3030);