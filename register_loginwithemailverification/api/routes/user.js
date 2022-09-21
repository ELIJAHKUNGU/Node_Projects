const route = require('express').Router()
const User = require("../models/User")
const Userverification = require('../models/Userverification');
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt")
//unique id
const {v4:uuidv4} = require("uuid")

//env variable
require("dotenv").config();
//nodemailer stuff
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS,
    }
    
})

//SignUp
route.post("/signup", (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim()
    password = password.trim()
    dateOfBirth = dateOfBirth.trim()

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.status(400).json("Empty input field")

    }else if(/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i_.test(email)){


    }
    
})