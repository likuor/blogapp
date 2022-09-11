const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     max: 20,
//   },
//   caption: {
//     type: String,
//     required: true,
//     max: 20,
//   },
//   contents: {
//     type: String,
//     required: true,
//     max: 400,
//   },
//   time: {
//     type: Number,
//   },
// });

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      max: 20,
    },
    caption: {
      type: String,
      required: true,
      max: 20,
    },
    contents: {
      type: String,
      required: true,
      max: 400,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Post', PostSchema);
