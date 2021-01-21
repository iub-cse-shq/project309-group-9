var mongoose = require('mongoose');
// var encrypt = require('mongoose-encryption')
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');
// var bcrypt = require('bcryptjs')

var adminUserSchema = new Schema({
  username: { type: String, required: true },   // , index: { unique: true }
  password: { type: String, required: true }
});

const secret = "Thisisourlittlesecret.";
adminUserSchema.plugin(encrypt, {secret:secret, encryptedFields: ['password'] })

// hash the password
// adminUserSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// adminUserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
var Admin = mongoose.model('admin', adminUserSchema);
module.exports = Admin;