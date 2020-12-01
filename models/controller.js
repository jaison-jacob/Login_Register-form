 const express = require('express');
 const mongoose = require('mongoose');
 const studentdata = mongoose.model('Student');
 const userlogin = mongoose.model('user');
 const userregister = mongoose.model('userregister');


 module.exports = {


    //create data
    createdata : (req,res) => {

        var data = new studentdata();

        data.NAME = req.body.name;
        data.AGE = req.body.age;
        data.GENDER = req.body.gender;
        data.EMAIL = req.body.email;
        data.PHONENO = req.body.phoneno;
        data.ADDRESS = req.body.address;

        console.log("from UI : "+req.body.name);
        console.log("from DB : "+data.NAME);


        data.save((err,docs) => {
            if(!err){
                console.log("sucess");
                res.json({
                    message : "data insert successfully"
                });
            }else{
                res.json({
                    message : "database error accured"
                });
            }
        });

       
        

    },
   

    //get all data
    getdata : (req,res) => {

        studentdata.find((err,docs) => {

           if(!err){
               res.json({
                   datas : docs
               });
           }else{
               res.json({
                   message : err
               });
           }

        });

    },

    //get data by id
    getbyid : (req,res) => {

        console.log(req.params.id);
        studentdata.findById(req.params.id,(err,docs) => {

            if(!err){
                res.json({
                    datas : docs
                });
            }else{
                res.json({
                    message : "search data not found"
                });
            }
        });

    },

    //update data
    updatedata : (req,res) => {

        studentdata.updateOne({_id:req.params.id},{$set:{NAME:req.body.name,AGE:req.body.age,GENDER:req.body.gender,
        EMAIL:req.body.email,PHONENO:req.body.phoneno,ADDRESS:req.body.address}},(err,docs) => {

            if(!err){
                res.json({
                    datas : docs,
                    message : "data update successfull"
                });
            }else{
                res.json({
                    message : err
                });
            }

        });


    },

    //delete data
    deletedata : (req,res) => {


        studentdata.remove({_id:req.params.id},(err,docs) => {
            req.params.id
            if(!err){
                res.json({
                    datas : docs,
                    message : "data delete successfull"
                });
            }else{
                res.json({
                    message : "search data not found"
                });
            }
        });
    },
    viewpath : (req,res) => {

        res.render("index");


    }

 }