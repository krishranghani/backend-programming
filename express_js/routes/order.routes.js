const express = require('express');
const OrderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    newOrder,
    getAllOrders,
    getOrder,
    deleteOrder
} = require('../controller/order.controller');

OrderRoutes.post('/add-order', verifyToken, newOrder);

OrderRoutes.get('/getAll-order', verifyToken, getAllOrders);

OrderRoutes.get('/get-order', verifyToken, getOrder);

OrderRoutes.delete('/delete-order', verifyToken, deleteOrder);


module.exports = OrderRoutes;