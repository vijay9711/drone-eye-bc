const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(bodyParser.json());


const userRoutes = require('./routes/usersRoute');
app.use('/api', userRoutes.routes);
// var admin = require('firebase-admin');
// var serviceAccount = require("./key.json");
// admin.initializeApp({
//     credential: admin.credential.applicationDefault(serviceAccount),
//     databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });
// const db = admin.firestore();
// const user = require("./routes/usersRoute");


app.listen(config.port, () => console.log("Up & RUnning *4000"));