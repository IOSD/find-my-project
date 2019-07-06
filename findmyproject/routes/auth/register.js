const express = require('express'),
      router = express.Router(),
      bcrypt = require('bcryptjs'),
      passport = require('passport');

const User = require('../../models/User.js');

/*
    @route : POST /auth/register
    @desc  : Register user using credentials from request
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
        500:Internal Server Error
*/
router.post('/register',(req,res)=>{
    let {name, email, password} = req.body;
    // Validate creds
    let errors = [];
    if (isEmpty(name)){
        errors.push({msg: 'Name cannot be empty'});
    }
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
                return res.status(400).json({
                    success: false,
                    message: 'User already exists',
                    body:{}
                })
            }else{ // User doesn't exists/New user
                // 
                // Create new user with details
                // Add to db with password encrypted
                // 
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