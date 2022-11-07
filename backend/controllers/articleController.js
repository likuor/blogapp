const Article = require('../models/Article');

const getArticles = async (req, res) => {
  try {
    const allPosts = await Article.aggregate([
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
          category: '$category',
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
};

const getEnglishArticles = async (req, res) => {
  try {
    const englishArticles = await Article.aggregate([
      { $match: { category: 'english' } },
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
          category: '$category',
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
    return res.status(200).json(englishArticles);
  } catch (err) {
    console.log('ERROR GET BLOG', err);
    return res.status(404).send('Articles are not found');
  }
};

const getProgrammingArticles = async (req, res) => {
  try {
    const programmingArticles = await Article.aggregate([
      { $match: { category: 'programming' } },
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
          category: '$category',
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
    return res.status(200).json(programmingArticles);
  } catch (err) {
    console.log('ERROR GET BLOG', err);
    return res.status(404).send('Articles are not found');
  }
};

const getArticleDetail = async (req, res) => {
  try {
    const post = await Article.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
};

const addArticle = async (req, res) => {
  // if (!req.file) {
  //   console.log('No file received');
  //   return res.send({
  //     success: false,
  //   });
  // }

  const newPost = new Article({
    userId: req.body.userId,
    title: req.body.title,
    caption: req.body.caption,
    contents: req.body.contents,
    category: req.body.category,
    image: {
      data: req.body.image.data,
      contenType: req.body.image.type,
    },
  });

  console.log('here', newPost.image);

  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    console.log('ERROR POST AN ARTICLE', err);
    return res.status(500).send('Article can not be created');
  }
};

const updateArticle = async (req, res) => {
  try {
    const post = await Article.findById(req.params.id);
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
};

const deleteArticle = async (req, res) => {
  try {
    const post = await Article.findById(req.params.id);
    await post.deleteOne();
    return res.status(200).json(post);
  } catch (err) {
    console.log('ERROR EDIT AN ARTICLE', err);
    return res.status(403).json(err);
  }
};

module.exports = {
  getArticles,
  getEnglishArticles,
  getProgrammingArticles,
  getArticleDetail,
  addArticle,
  updateArticle,
  deleteArticle,
};
