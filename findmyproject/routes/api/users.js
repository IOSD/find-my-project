const express = require('express'),
      router = express.Router(),
	  passport	= require('passport');

const User = require('../../models/User.js'),
      UserProject = require('../../models/UserProject.js'),
      Project = require('../../models/Project.js'),
      isEmpty = require('../../utils/isEmpty');

/*
    @route : GET /api/user/projects
    @desc  : Get all projects of an user (complete or incomplete both)
    @access: Private
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
router.get('/user/projects', passport.authenticate('jwt',{session:false}), (req,res)=>{
    if(isEmpty(req.user._id)){
        return res.status(400).json({
            success: false,
            message: 'User ID not given',
            body:{}
        })
    }
    User.findById(req.user._id, (err,user)=>{
        if(err){
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                body:{}
            })
        }else{
            if(user){ // User found
                return res.status(500).json({
                    success: true,
                    message: 'Project IDs',
                    body:user.Projects
                })
            }else{ // User not found
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    body:{}
                })
            }
        }
    })
})

module.exports = router