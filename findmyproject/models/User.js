const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    User:{
        Id: String,
        Password: String, 
        Name : String,
        Email : String,
        Points : Number,
        DoneProjects : Array,
        CurrentProjects : Array,
        Friends : Array
    },
    Project:{ 
        Id: String,
        Steps: Array,
        Author: mongoose.Schema.Types.ObjectId,
        NoDone: Number
    },
    UserProject:{
        Id: String,
        Project: mongoose.Schema.Types.ObjectId,
        Mentor: mongoose.Schema.Types.ObjectId,
        StepsDone: Number,
        StepsVerified: Number
    },
    Step:{
        Id: String,
        Title: String,
        Text: String,
        Photo: String
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;