const express = require('express'),
      router = express.Router();

const User = require('../../models/User.js'),
      Project = require('../../models/Project.js');

/*
    @route : POST /api/----
    @desc  : ----
    @access: Private/Public
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
// 
// Write code here
// 

module.exports = router