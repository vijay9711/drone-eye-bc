'use strict';

const firebase = require('../db');
const fireBaaseAuth = require('firebase/auth');
const User = require('../models/userModel');
const firestore = firebase.firestore();
var jwt = require('jsonwebtoken');

const addUser = async (req,res,next) =>{
    try {
        const data = req.body;
        console.log("data", data);
        data.id = new Date().getTime().toString();
        let result = {
            user:'',
            text:"User Added Successfully!!!"
        }
        result.user = await firestore.collection('users').doc(data.email).set(data);
        res.status(200).send(result);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const checkUser = async (req,res,next)=>{
    try{
        const data = req.body;
        const users =  await firestore.collection('users').doc(data.email);
        const usersList = await users.get();
        let doc = await usersList.data();
        let resData = {
            token:''
        }
        if(doc === undefined){
            resData.token = 'NF'
            res.send(resData);
        }else{
            if(doc.password === data.password){
                var token = jwt.sign({data:doc},'secret')
                resData.token = token;
                res.send(resData)
            }else{
                resData.token = '';
                res.send(resData)
            }
        }
    }catch(error){
        res.status(400).send(error.message);
    }
}
const getAllUsers = async (req, res, next) => {
    try{
        let userList = await firestore.collection('users').get().then(query=>{
            let result = []
            query.docs.map(doc=>{
                let data = doc.data()
                if(data.type === 'user'){
                    result.push(data);
                }else{
                    return;
                }
            })
            return result;
        });
        // userList = await userList.get()
        // userList = await userList.data()
        console.log(userList, " user");
        // let result = userList.find(x=>{return x.type ==='user'});
        // console.log(result);
        res.send(userList)
    }catch(error){
        res.status(400).send(error.message)
    }
}
module.exports = {
    addUser,
    checkUser,
    getAllUsers
}