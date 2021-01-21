const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    studentId: {
        type: Number,
        required: true,
        unique: true
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


// var teacherProfileSchema = new Schema({
//     income: Number,
//     rank: String 
//     teachers: [{ type: ObjectID, ref: 'Teacher' }] 
// });

// const UserSchema = new mongoose.Schema({
//     // productId: Number,
//     // name: { type: String, required: true },
//     // description: { type: String, required: true },
//     // url: { type: String, required: true },
//     // quantity: { type: Number, required: true },
//     // price: { type: Number, required: true },
//     // inCart: Number
// })


const Student = mongoose.model('student', StudentSchema)
module.exports = Student;
