const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

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

router.post('/create', upload.any(), addArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
