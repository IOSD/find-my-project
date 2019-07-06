const express = require('express'),
      router = express.Router(),
      bcrypt = require('bcryptjs'),
      passport = require('passport');

const User = require('../../models/User.js'),
      isEmpty = require('../../utils/isEmpty');

/*
    @route : POST /auth/login
    @desc  : Login user using credentials from request
    @access: Public
    @response format: {
        success: bool
        message: string
        body: {
            // Contains data or errors
        }
    }
    @status codes:
        200:OK
        400:Bad Request
        404:Not Found
        500:Internal Server Error
*/
router.post('/login',(req,res)=>{
    let {email,password} = req.body.email;
    // Validate creds
    let errors = [];
    if (isEmpty(email)){
        errors.push({msg: 'Email cannot be empty'});
    }
    if (isEmpty(password)){
        errors.push({msg: 'Password cannot be empty'});
    }
    if (errors.length > 0){
        return res.status(400).json({
            success: false,
            message: 'Inputs not valid',
            body:errors
        })
    }
    User.findOne({email:email})
        .then((user)=>{
            if(user){ // User exists
                // 
                // Verify password and send token 
                // in `body` inside response object
                // 

            }else{ // User doesn't exists / New user
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    body:{}
                })
            }
        })
        .catch((err)=>{
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                body:{}
            })
        })
})

module.exports = router