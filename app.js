const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const userRoutes = require('./routes/usersRoute');
app.use('/api', userRoutes.routes);


app.listen(config.port, () => console.log("Up & RUnning *4000"));