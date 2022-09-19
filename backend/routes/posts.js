const express = require('express');
const Post = require('../models/Post');
const router = require('express').Router();

// get all article
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.aggregate([
      {
        $lookup: {
          from: 'users',
          let: { userid: '$userId' },
          pipeline: [
            { $match: { $expr: { $eq: [{ $toString: '$_id' }, '$$userid'] } } },
          ],
          as: 'createdBy',
        },
      },
      { $unwind: '$createdBy' },
      {
        $project: {
          id: '$id',
          title: '$title',
          caption: '$caption',
          contents: '$contents',
          image: '$image',
          createdAt: '$createdAt',
          updatedAt: '$updatedAt',
          user: {
            userId: '$userId',
            username: '$createdBy.username',
            profilePicture: '$createdBy.profilePicture',
          },
        },
      },
    ]);

    return res.status(200).json(allPosts);
  } catch (err) {
    console.log('ERROR GET BLOG', err);
    return res.status(404).send('Articles are not found');
  }
});

//get single article detail
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

router.post('/create', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    // const createPost = await Post.create(req.body);
    return res.status(200).json(savedPost);
  } catch (err) {
    console.log('ERROR POST AN ARTICLE', err);
    return res.status(500).send('Article can not be created');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json(post);
    } else {
      return res.status(403).send('Article can not be edited');
    }
  } catch (err) {
    console.log('ERROR EDIT AN ARTICLE', err);
    return res.status(403).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.deleteOne();
    return res.status(200).json(post);
  } catch (err) {
    console.log('ERROR EDIT AN ARTICLE', err);
    return res.status(403).json(err);
  }
});

module.exports = router;
