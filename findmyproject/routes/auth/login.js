const express = require('express'),
      router = express.Router(),
      jwt = require('jsonwebtoken'),
      {jwtCode} = require('../../config/KEYS'),
      bcrypt = require('bcryptjs');

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
    let {Email, Password} = req.body;
    // Validate creds
    let errors = [];
    if (isEmpty(Email)){
        errors.push({msg: 'Email cannot be empty'});
    }
    if (isEmpty(Password)){
        errors.push({msg: 'Password cannot be empty'});
    }
    if (errors.length > 0){
        return res.status(400).json({
            success: false,
            message: 'Inputs not valid',
            body:errors
        })
    }
    User.findOne({Email:Email})
        .then((user)=>{
            if(user){ // User exists
                bcrypt.compare(Password,user.Password)
                    .then((isMatch)=>{
                        if(isMatch){ // Matched
                            // This `payload` data will be encoded in jwt token which
                            // we'll send to user and when user sends back this
                            // token for subsequent requests to APIs, we'll
                            // compare this encoded data with database for
                            // authentication.
                            const payload = {
                                Email: user.Email,
                                Password: user.Password
                            }
                            // `expiresIn` is in seconds
                            let hours = 6;
                            jwt.sign(payload, jwtCode, {expiresIn: hours*3600}, (err,token)=>{
                                if(err){ // Error within jwt
                                    console.log(err)
                                    return res.status(500).json({
                                        success: false,
                                        message: 'Internal server error',
                                        body:{}
                                    })
                                }else{ // Login successful
                                    return res.status(200).json({
                                        success: true,
                                        message: 'Login successful',
                                        body: {
                                            name: user.name,
                                            accessToken: 'Bearer ' + token
                                        }
                                    })
                                }
                            });
                        }else{ // No match
                            return res.status(400).json({
                                success: false,
                                message: 'Incorrect Email/Password',
                                body:{}
                            })
                        }
                    })
                    .catch((err)=>{ // Error within bcrypt
                        console.log(err)
                        return res.status(500).json({
                            success: false,
                            message: 'Internal server error',
                            body:{}
                        })
                    })
            }else{ // User doesn't exists / New user
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    body:{}
                })
            }
        })
        .catch((err)=>{ // Internal error
            console.log(err)
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                body:{}
            })
        })
})

module.exports = router