const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/usersRoute');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/api', userRoutes.routes)
// var admin = require('firebase-admin');
// var serviceAccount = require("./key.json");
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(serviceAccount),
//     databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });
// const db = admin.firestore();
// const user = require("./routes/usersRoute");


app.listen(config.port, () => console.log("Up & RUnning *4000"));