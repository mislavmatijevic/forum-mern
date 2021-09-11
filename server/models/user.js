const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required!'],
    minLength: [4, 'Username too short!'],
    maxLength: [45, 'Username too long!'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  },
  mail: {
    type: String,
    required: [true, 'Mail is required!'],
    maxLength: [100, 'Email too long!'],
    trim: true,
    unique: true,
  },
  dateRegistered: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
