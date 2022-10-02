const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadPic = multer({ storage: storage }).single('file');

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

router.post('/create', uploadPic, addArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

module.exports = router;
