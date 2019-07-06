const jwtStrategy	= require('passport-jwt').Strategy,
	  extractJWT	= require('passport-jwt').ExtractJwt,
	  User     = require('../models/User'),
      {jwtCode} = require('./KEYS');

const options = {};
options.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = jwtCode;

module.exports = passportConfig = new jwtStrategy(options,(jwt_payload,done)=>{
    User.findOne({'Email': jwt_payload.Email})
        .then((user)=>{
            if(user.Password === jwt_payload.Password){
                const userDetails = {
                    email: user.Email,
                    _id: user._id
                }
                return done(null,userDetails);
            }else{
                return done(null,false);
            }
        })
        .catch((err)=>{
            console.log(err)
            return done(null,false);
        });
});