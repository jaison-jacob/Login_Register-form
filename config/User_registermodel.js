
const mongoose = require('mongoose');
const registermodel = mongoose.Schema({

    email : {
        type : String,
        required : "required"
    },
    password : {
        type : String,
        required : "required"
    }
   

});

mongoose.model("userregister",registermodel);