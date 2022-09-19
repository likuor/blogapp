const router = require('express').Router();
const {
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router.get('/:id', getUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

// router.get('/', async (req, res) => {
//   const userId = req.query.userId;
//   const userName = req.query.username;
//   try {
//     const user = userId
//       ? await User.findById(userId)
//       : await User.findOne({ username: userName });
//     const { password, updateAt, ...other } = user._doc;
//     return res.status(200).json(other);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

module.exports = router;
