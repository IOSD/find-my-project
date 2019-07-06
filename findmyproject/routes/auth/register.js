const express = require('express'),
      router = express.Router(),
      bcrypt = require('bcryptjs');

const User = require('../../models/User.js'),
      isEmpty = require('../../utils/isEmpty');

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
    let {Name, Email, Password} = req.body;
    // Validate creds
    let errors = [];
    if (isEmpty(Name)){
        errors.push({msg: 'Name cannot be empty'});
    }
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
                return res.status(400).json({
                    success: false,
                    message: 'User already exists',
                    body:{}
                })
            }else{ // User doesn't exists/New user
                bcrypt.genSalt(10,(err,salt) =>{
                    if(err){ // Error in bcrypt
                        console.log(err)
                        return res.status(500).json({
                            success: false,
                            message: 'Internal server error',
                            body:{}
                        })
                    }
                    bcrypt.hash(Password, salt, (err, hash)=>{
                        if(err){ // Error in bcrypt
                            console.log(err)
                            return res.status(500).json({
                                success: false,
                                message: 'Internal server error',
                                body:{}
                            })
                        }
                        const newUser = new User({
                            Name: Name,
                            Email: Email,
                            Password: hash,
                        });
                        // Save the new executive in the database
                        newUser.save(function(err, _) {
                            if(err){ // Error during saving in db
                                console.log(err)
                                return res.status(500).json({
                                    success: false,
                                    message: 'Internal server error',
                                    body:{}
                                })
                            }
                            else{ // Signup successful
                                res.status(200).json({
                                    success: true,
                                    message: 'Signup successful',
                                    body:{}
                                });
                            }
                        });
                    });
                });
            }
        })
        .catch((err)=>{
            console.log(err)
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                body:{}
            })
        })
})

module.exports = router