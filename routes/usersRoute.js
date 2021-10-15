const express = require('express');
const {addUser,checkUser, getAllUsers} = require('../controllers/usersController');

const router = express.Router();

router.post('/user',addUser);
router.post('/user-auth',checkUser);
// router.get('/getUser?:id',getUserByID);
router.get('/users',getAllUsers)

module.exports = {
    routes: router
}