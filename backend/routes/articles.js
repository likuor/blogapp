const router = require('express').Router();
const multer = require('multer');
const uploadPic = multer();

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

router.post('/create', uploadPic.single('file'), addArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
