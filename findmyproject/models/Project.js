const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    TechStack: {
        type: [String],
        required: true
    },
    Authors: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    Steps: {
        type: Number,
        default: 0
    },
    NumDone: {
        type: Number,
        default: 0
    }
});

module.exports = Project = mongoose.model('projects', ProjectSchema);