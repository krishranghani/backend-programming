const express= require('express');
const app = express();         
const port = 1111;
const morgan = require('morgan');


//middleware
app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./routes/product.routes');
app.use('/products', productRoutes);

app.listen(port, () => {
console.log(`Server start at http://localhost:1111`);

});