const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    User:{
        Id: String,
        Password: String, 
        Name : String,
        Email : String,
        Points : Int,
        DoneProjects : Array,
        CurrentProjects : Array,
        Friends : Array
    },
    Project:{ 
        Id: String,
        Steps: Array,
        Author: User,
        NoDone: Int
    },
    UserProject:{
        Id: String,
        Project: Project,
        Mentor: User,
        StepsDone: Int,
        StepsVerified: Int
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