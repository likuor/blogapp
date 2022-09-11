const express = require('express');
const app = express();
const Posts = require('../models/Post');
const router = require('express').Router();

router.get('/api/posts', async (req, res) => {
  try {
    const allPosts = await Posts.find({});
    res.status(200).json(allPosts);
  } catch (err) {
    console.log('ERROR GET BLOG', err);
    res.status(404).send('Articles are not found');
  }
});

// router.post('/post', async (req, res) => {
//   try {
//     const createPost = await Posts.create(req.body);
//     res.status(200).json(createPost);
//   } catch (err) {
//     console.log('ERROR POST AN ARTICLE', err);
//     res.status(404).send('Article can not be sent');
//   }
// });

module.exports = router;
