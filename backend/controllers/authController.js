const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helper/userHelper');

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username: username,
      email: email,
      password: await hashPassword(password, 12),
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log('ERROR REGISTER USER', err);
    return res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json('USER NOT FOUND');

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) return res.status(404).json('Password is not correct');

    return res.status(200).json(user);
  } catch (err) {
    console.log('ERROR REGISTER USER', err);
    return res.status(500).json(err);
  }
};

module.exports = { signupUser, loginUser };
