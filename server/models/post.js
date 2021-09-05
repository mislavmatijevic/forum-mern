const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    minLength: [2, 'Name too short!'],
    maxLength: [50, 'Name too long!'],
  },
  text: {
    type: String,
    required: [true, 'Text is required!'],
    minLength: [5, 'Text too short!'],
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Publisher is required!'],
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Post', PostSchema);
