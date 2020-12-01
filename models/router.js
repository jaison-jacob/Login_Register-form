const express = require('express');
const router = express.Router();
const authroute = require('../helpers/Authroute');

const {createdata,getdata,getbyid,updatedata,deletedata} = require('./controller');



router.post("/",authroute,createdata);
//get all data
router.get("/",authroute,getdata);
//get data by id
router.get("/:id",getbyid);
//update data
router.put("/:id",updatedata);
//delete by id
router.delete("/:id",deletedata);
//


module.exports = router;