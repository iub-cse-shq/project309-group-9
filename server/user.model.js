const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length>2,
            message: 'Name must be longer than 2 characters.'
        },
        required: true
    },
    id: {
        type: Number,
        required: true,
        // index: { unique: true }
    },
    university: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ["Student", "Teacher"]
    },/* Student or Teacher */
    // profile: { type: ObjectID, refPath: 'role' }
});

// var studentProfileSchema = new Schema({
//     year: Number,
//     School: String,
//     department: String,
//     major: String,
//     semester: String,

// });

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


var User = mongoose.model('user', UserSchema)
module.exports = User
