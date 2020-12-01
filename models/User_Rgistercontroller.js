const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const userlogin = mongoose.model('user');
const userregister = mongoose.model('userregister');
const { hashgenerate } = require("../helpers/hash");
const { validatepassword } = require("../helpers/hash");
const {tokengenerator} = require("../helpers/webtoken");

const { token } = require('morgan');

module.exports = ({
    
    //view index page

    view_index : (req,res) => {

        res.render("index");
    },

    //view register page 

    view_register : (req,res) => {

        res.render("register");
    },
    
    
    //create user register data
    create_register: (req, res) => {
        
        var user = new userregister();

        //check password and conform password in same
        if (req.body.password == req.body.conformpassword) {
            console.log("same")
        } else {
            res.send({
                message: "please password type same"
            })
        }


        userregister.findOne({ email: req.body.email }, async (err, docs) => {

            if (err) {
                console.log("error is : " + err);
            } else {
                if (docs == null) {

                    const hashpasswrd = await hashgenerate(req.body.password);

                    user.email = req.body.email;

                    user.password = hashpasswrd;

                    user.save();
                    res.send({
                        message: "register sucessful"
                    });

                } else {
                    res.send({
                        message: "email is already exist"
                    });
                }

            }

        });
    },
    //check user

    check_user : (req,res) => {

        userregister.findOne({ email: req.body.email }, async (err, docs) => {

            console.log(req.body.email);
            if(docs != null){
                const validate =await validatepassword(req.body.password,docs.password);

                if(!validate){
                    

                    res.send({
                        message : "incorrect password"
                    });
                }else{
                    
                    const createtoken =await tokengenerator(docs.email);
                    res.cookie("jwt",createtoken);
                    res.send({
                        token : createtoken,
                        message : "you login successfully"
                    });
                }
            }else{
                res.send({
                    message : "email id is not correct"
                });
            }
        });
        

        
            

    }


});

