const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
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

app.get('/posts',(req,res) =>{
    const posts = [];
    fs.createReadStream('posts.csv')
    .pipe(csv())
    .on('data',(data) => {
        posts.push(data);
    }).on('end',() =>{
        res.render('posts',{postArray:posts});
    })
});

app.listen(3030);