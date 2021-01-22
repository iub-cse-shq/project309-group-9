const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    studentId: {
        type: Number,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    semester: {
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


const Student = mongoose.model('student', StudentSchema)
module.exports = Student;
