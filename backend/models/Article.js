const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: true,
      max: 20,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Post', ArticleSchema);
