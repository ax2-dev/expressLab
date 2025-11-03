const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res) =>{
    console.log('Here');
    res.render('index',{ip:req.ip,headers:req.headers['user-agent']});
});

app.listen(3030);