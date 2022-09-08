// const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const Posts = require('./models/Post');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster = process.env.DB_CLUSTER;
const authSource = process.env.DB_AUTH_SOURCE;
const authMechanism = process.env.DB_AUTH_MECHANISM;
const uri = `mongodb://${username}:${password}@${cluster}?${authSource}&${authMechanism}`;

mongoose
  .connect(uri)
  .then(() => {
    console.log('DB conneted');
  })
  .catch((err) => {
    console.log('ERROR', err);
  });

app.get('/api/v1/posts', async (req, res) => {
  try {
    const allPosts = await Posts.find({});
    res.status(200).json(allPosts);
  } catch (err) {
    console.log('ERROR', err);
  }
});

app.post('/api/v1/post', async (req, res) => {
  try {
    const createPost = await Posts.create(req.body);
    res.status(200).json(createPost);
  } catch (err) {
    console.log('ERROR', err);
  }
});

app.listen(PORT, () => {
  console.log('Server is lstening');
});
