'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    HOST,
    PORT,
    HOSTURL,
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID,
} = process.env;

assert(PORT,'PORT is required');
assert(HOST,'host is required');

module.exports = {
    port: PORT,
    host: HOST,
    url:HOSTURL,
    firebaseConfig : {
        apiKey: APIKEY,
        authDomain:AUTHDOMAIN,
        projectId:PROJECTID,
        storageBucket: STORAGEBUCKET,
        messagingSenderId: MESSAGINGSENDERID,
        appId:APPID,
        measurementId:MEASUREMENTID
    }

}
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const User = db.collection(firebase,"Users");
// module.exports = User;