const router = require('express').Router();
const {
  getArticles,
  getArticleDetail,
  addArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

// get all articles
router.get('/', getArticles);

router.get('/:id', getArticleDetail);

router.post('/create', addArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
