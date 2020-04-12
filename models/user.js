
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  password: { type: String },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
})

module.exports = mongoose.model('User', UserSchema)
