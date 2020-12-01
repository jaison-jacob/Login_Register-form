const express = require('express');
const router = express.Router();

const {create_register,check_user,view_index,view_register} = require('./User_Rgistercontroller');

//view index page
router.get("/",view_index);
//view register page
router.get("/register",view_register);

//create user data

router.post("/register",create_register);

//check login
router.post("/login",check_user);

module.exports = router;