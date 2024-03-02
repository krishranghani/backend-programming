const express= require('express');
const app2 = express();         
const port = 1111;
const morgan = require('morgan');


//middleware
app2.use(express.json());
app2.use(morgan('dev'));


/****************** PRODUCT ROUTES ***********************/
const productRoutes = require('./routes/product.routes');
app2.use('/products', productRoutes);

/****************** USER ROUTES ***********************/
const userRoutes = require('./routes/user.routes');
app2.use('/users',userRoutes)







app2.listen(port, () => {
console.log(`Server start at http://localhost:1111`);

});