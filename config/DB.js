const mongoose = require('mongoose');

mongoose.connect(process.env._ENV,{useNewUrlParser : true},{ useUnifiedTopology: true } ,(err) => {

if(!err){
    console.log("mongodb connected ......");
}else{
    console.log("err in db connection : "+err);
}
});;
const studentmodel = require('./model');
const usermodel = require("./User_model");
const registermodel = require("./User_registermodel");