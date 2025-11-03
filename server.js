const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

app.set('view engine','ejs');
app.use('/api',apiRouter);

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

app.listen(3030);