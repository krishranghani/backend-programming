const express = require('express');
const userRoutes = express.Router();
const { 
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/userform.controller');

userRoutes.post('/register-User', registerUser);
userRoutes.post('/login-User', loginUser);

// userRoutes.post('/user-add', addUser);
// userRoutes.get('/get-all-users', getAllUsers);
// userRoutes.get('/get-user', getUser);
// userRoutes.put('/update-user', updateUser);
// userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;