const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
// const corsOpts = {
//     origin: '*',
  
//     methods: [
//       'GET',
//       'POST',
//     ],
  
//     allowedHeaders: [
//       'Content-Type',
//     ],
//   };
  
// app.use(cors(corsOpts));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(bodyParser.json());


const userRoutes = require('./routes/usersRoute');
app.use('/api', userRoutes.routes);


app.listen(config.port, () => console.log("Up & RUnning *4000"));