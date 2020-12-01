const mongoose = require('mongoose');
const studentschema =new mongoose.Schema({
          
    NAME : {
        type : String,
        required :"required"
    },
    AGE : {
        type : String,
        required :"required"
    },
    GENDER : {
        type : String,
        required :"required"
    },
    EMAIL : {
        type : String,
        required :"required"
    },
    PHONENO : {
        type : String,
        required :"required"
    },
    ADDRESS : {
        type : String,
        required :"required"
    }

});




//mongoose.model("userlogin",usermodel);

mongoose.model("Student",studentschema);