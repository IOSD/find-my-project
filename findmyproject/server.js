/*
    *Main Server
*/
const express = require('express'),
	  app = express(),
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  passport = require('passport');

const projectsAPI = require('./routes/api/projects'),
	  loginAuth = require('./routes/auth/login'),
	  registerAuth = require('./routes/auth/register'),
	  passportConfig = require('./config/passport'),
	  {mongoURI} = require('./config/KEYS.js'),
	  env = process.env.NODE_ENV || 'development',
	  ip = process.env.IP || 'localhost',
	  port = process.env.PORT || '8000';
/*
	*Middlewares
*/

// Body Parser middleware to parse request
app.use(bodyParser.urlencoded({extended:false}));
// If there's a json object in request, it'll populate it
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());
// Passport Config
passport.use(passportConfig);

/*
	*Routes
*/
// API routes
app.use('/api', projectsAPI)
// Auth routes
app.use('/auth', loginAuth);
app.use('/auth', registerAuth);

// Page not found
app.use((req,res,next)=>{
	res.status(400).send('<h1>Page not found</h1>');
})

/*
	*Connect to database server
*/
mongoose.connect(mongoURI,{useNewUrlParser:true})
		.then(()=> {
			console.log("Connected to database successfully.");
		})
		.catch((err)=>{
			console.log(err)
			console.log("Error connecting with MongoDB server.");
		});
/*
	*Start web server
*/
app.listen(port,ip,()=>{
	console.log(`Server running on ${ip}:${port}`);
})