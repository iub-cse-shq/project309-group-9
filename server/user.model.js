const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String, /* Student or Teacher */
    // profile: { type: ObjectID, refPath: 'role' }
});

// var studentProfileSchema = new Schema({
//     age: Number,
//     grade: Number,
//     teachers: [{ type: ObjectID, ref: 'Teacher' }] 
// });

// var teacherProfileSchema = new Schema({
//     school: String,
//     subject: String 
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
