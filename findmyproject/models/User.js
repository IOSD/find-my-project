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
        type: [String]
    },
    Points: {
        type: Number,
        default: 0
    },
    Projects: {
        type: [Schema.Types.ObjectId]
    },
    Friends: {
        type: [Schema.Types.ObjectId]
    }
});

module.exports =  User = mongoose.model('users', UserSchema);