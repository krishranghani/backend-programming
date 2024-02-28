const express = require('express');
const app = express();
const port = 1010;
const morgan = require('morgan');
const products = require('./HELLO.json');

// middleware
app.use(express.json());
app.use(morgan('dev'));


// End-points - CRUD 
app.post('/products',(req, res)=>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'product is added ......'})
});

app.get('/products',(req, res)=>{
    res.status(200).json(products);
});

app.get('/products/single-product',(req, res)=>{
    const id = +req.query.id;
    // console.log(id);
    let product = products.find((item)=>item.id === id)
    res.status(200).json(product);
});


app.listen(port, ()=>{
    console.log(`Server start at http://localhost:1010`);
})