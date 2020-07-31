const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
};

const isValidEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

const generateToken = id => {
  const token = jwt.sign(
    {
      userId: id
    },
    "TokenAuth",
    { expiresIn: '7d' }
  );
  return token;
};

const generateToken = id => {
  const token = jwt.sign(
    {
      userId: id
    },
    "TokenAuth",
    { expiresIn: '7d' }
  );
  return token;
};

module.exports = {
  hashPassword,
  comparePassword,
  isValidEmail,
  generateToken
};
