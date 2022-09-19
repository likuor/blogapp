const bcrypt = require('bcrypt');

const hashPassword = async (password, saltRounds) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (inputPassword, password) => {
  const validPassword = await bcrypt.compare(inputPassword, password);
  return validPassword;
};

module.exports = { hashPassword, comparePassword };
