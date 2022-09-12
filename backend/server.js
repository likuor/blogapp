// const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
require('dotenv').config();
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

mongodb: mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB conneted');
  })
  .catch((err) => {
    console.log('ERROR MONGOOSE CONNECTING', err);
  });

//middleware
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

// app.get('/api/posts', async (req, res) => {
//   try {
//     const allPosts = await Posts.find({});
//     res.status(200).json(allPosts);
//   } catch (err) {
//     console.log('ERROR GET BLOG', err);
//     res.status(404).send('Articles are not found');
//   }
// });

// app.post('/api/post', async (req, res) => {
//   try {
//     const createPost = await Posts.create(req.body);
//     res.status(200).json(createPost);
//   } catch (err) {
//     console.log('ERROR POST AN ARTICLE', err);
//     res.status(404).send('Article can not be sent');
//   }
// });

// app.post('/api/v1/post', async (req, res) => {
//   try {
//     const updatePost = await Posts.findById(req.params.id);
//     res.status(200).json(deletePost);
//   } catch (err) {
//     console.log('ERROR DELETE AN ARTICLE', err);
//   }
// });

app.listen(PORT, () => {
  console.log('Server is lstening');
});
