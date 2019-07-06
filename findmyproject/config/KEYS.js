KEYS = {}

/*
    *Database
*/
KEYS.mongoURI = 'mongodb://localhost/findmyproject'
KEYS.jwtCode  = 'alittlesecret'

/*
    *Export all
*/
for(key in KEYS)
    if(KEYS.hasOwnProperty(key))
        module.exports[key] = KEYS[key];