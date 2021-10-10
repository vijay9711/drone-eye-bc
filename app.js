const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/usersRoute');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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