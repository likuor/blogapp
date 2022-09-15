const router = require('express').Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log('ERROR REGISTER USER', err);
    return res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json('USER NOT FOUND');

    const validPassword = req.body.password === user.password;
    if (!validPassword) return res.status(404).json('Password is not correct');

    return res.status(200).json(user);
  } catch (err) {
    console.log('ERROR REGISTER USER', err);
    return res.status(500).json(err);
  }
});

module.exports = router;
