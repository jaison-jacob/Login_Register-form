const mongoose = require('mongoose');

const usermodel = mongoose.Schema({

    email : {
        type : String,
        required : "required"
    },
    password : {
        type : String,
        required : "required"
    }


});

mongoose.model("user",usermodel);