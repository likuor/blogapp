const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  caption: {
    type: String,
    required: true,
    maxLength: 20,
  },
  contents: {
    type: String,
    required: true,
    maxLength: 400,
  },
  time: {
    type: Number,
  },
});

module.exports = mongoose.model('Post', PostSchema);
