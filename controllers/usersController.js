'use strict';

const firebase = require('../db');
const User = require('../models/userModel');
const firestore = firebase.firestore();

const addUser = async (req,res,next) =>{
    try {
        const data = req.body;
        console.log("data", data);
        await firestore.collection('users').doc().set(data);
        res.send("User Added Successfully!!!");
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser
}