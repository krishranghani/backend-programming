const express = require('express');
const app = express();         // server create
const port = 5050;
const morgan = require('morgan');
const path =require('path');

// middleware
let myFun = (req, res, next) => {
    // console.log(req.query);
    if ((req.query.age) >= 18) {
        next();
    } else {
        res.send('Sorry! You have under below 18');

    } 
}

// app.use(myFun);     // Application Level middleware
app.use(express.json());     // built-in
app.use(express.urlencoded({ extended : true}));           // built-in
app.use('/hello',express.static(path.join(__dirname,'express.js','digital.html')));         // built-in



app.use(morgan('dev'));
app.get('/', myFun, (req, res) => {
    res.send('about');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Post method');
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:5050`);
}) 