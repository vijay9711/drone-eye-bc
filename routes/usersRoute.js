const express = require('express');
const {addUser} = require('../controllers/usersController');

const router = express.Router();

router.post('/user',addUser);

module.exports = {
    routes: router
}