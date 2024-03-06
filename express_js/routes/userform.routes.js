const express = require('express');
const userRoutes = express.Router();
const {addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/userform.controller');


userRoutes.post('/user-add', addUser);
 
userRoutes.get('/get-all-users', getAllUsers);

userRoutes.get('/get-user', getUser);

userRoutes.put('/update-user', updateUser);

userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;