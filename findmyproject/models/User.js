const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    TechStack: {
        type: [String],
        required: true
    },
    Points: {
        type: Number,
        default: 0
    },
    DoneProjects: {
        type: [Schema.Types.ObjectId]
    },
    CurrentProjects: {
        type: [Schema.Types.ObjectId]
    },
    Friends: {
        type: [Schema.Types.ObjectId]
    }
});

module.exports =  User = mongoose.model('users', UserSchema);