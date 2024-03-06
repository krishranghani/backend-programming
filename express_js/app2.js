const express= require('express');
const app2 = express();         
const port = 1111;
const morgan = require('morgan');
const mongoose = require('mongoose');

//Database conncetion
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/krish');
}
main()
.then(()=>console.log('DB is connected......'))
.catch(err => console.log(err));

//middleware
app2.use(express.json());
app2.use(morgan('dev'));


/****************** PRODUCT ROUTES ***********************/
// const productRoutes = require('./routes/product.routes');
// app2.use('/products', productRoutes);

/****************** USER ROUTES **************************/
// const userRoutes = require('./routes/user.routes');
// app2.use('/users',userRoutes)

/****************** USER form ROUTES *********************/

const userRoutes = require('./routes/userform.routes');
app2.use('/api/user',userRoutes)


app2.listen(port, () => {
console.log(`Server start at http://localhost:1111`);

}); 