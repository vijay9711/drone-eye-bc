const firebase = require('firebase-admin');
const config = require('./config');

// const db = firebase.initializeApp(config.firebaseConfig);
const serviceAccount = require("./key.json");
const db2 = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://drone-dev-site.firebaseio.com'
  });  
module.exports = db2;