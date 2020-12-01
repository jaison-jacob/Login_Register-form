require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const db = require('./config/DB');
const routers = require('./models/router');
const swaggeruiexpress = require('swagger-ui-express');
const swaggerjs = require('swagger-jsdoc');
const options = require('./swagger.json');
const path = require('path');
const ejs = require('ejs');
const userrouter = require('./models/UserRouter');
const cookieparser = require('cookie-parser');


//config swagger





//create object
const app = express();

//third party module

//set path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//cookie parser
app.use(cookieparser());

//body parser
app.use(express.json());

//urlencoded use

app.use(bodyparser.urlencoded({

    extended: true

}));


//

app.use(express.static(path.join(__dirname, 'public')));

//routes create
app.use("/student", routers);

app.use("/", userrouter);

app.use('/api-documentation', swaggeruiexpress.serve, swaggeruiexpress.setup(options));



//morgan use
app.use(morgan('dev'));



//connect server
app.listen(process.env.PORT, () => {
    console.log("port nummeer is " + process.env.PORT);
});
