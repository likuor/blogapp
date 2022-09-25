const router = require('express').Router();
const {
  getArticles,
  getEnglishArticles,
  getProgrammingArticles,
  getArticleDetail,
  addArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

// get all articles
router.get('/', getArticles);

router.get('/english', getEnglishArticles);

router.get('/programming', getProgrammingArticles);

router.get('/:id', getArticleDetail);

router.post('/create', addArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
