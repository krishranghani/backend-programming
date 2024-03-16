const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    newOrder,
    getOrder
} = require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken, newOrder);

orderRoutes.get('/get-order', verifyToken, getOrder);

module.exports = orderRoutes;