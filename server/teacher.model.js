const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    firstname: String,
    lastname: String,
    teacherId: {
        type: Number,
        required: true
    },
    teachers_uni: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    teachers_rank: {
        type: String,
        required: true
    }
    
    // role:{
    //     type: String,
    //     required: true,
    //     enum: ["Student", "Teacher"]
    // },/* Student or Teacher */
    // profile: { type: ObjectID, refPath: 'role' }
});

const Teacher = mongoose.model('teacher', TeacherSchema)
module.exports = Teacher;