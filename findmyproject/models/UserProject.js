const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserProjectSchema = new Schema({
    Project: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Mentors: {
        type: [Schema.Types.ObjectId]
    },
    StepsDone: {
        type: Number,
        default: 0
    },
    StepsVerified: {
        type: Number,
        default: 0
    }
});

module.exports = UserProject = mongoose.model('userprojects', UserProjectSchema);