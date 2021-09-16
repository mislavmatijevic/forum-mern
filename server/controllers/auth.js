const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomError = require('../errors/CustomError');

const User = require('../models/user');

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    throw new CustomError('Username not provided!', 401);
  }
  if (!password) {
    throw new CustomError('Password not provided!', 401);
  }

  const fetchedUser = await User.findOne({ username });

  if (!fetchedUser) {
    throw new CustomError('Login failed.', 401);
  }

  const { _id, password: hashedPassword } = fetchedUser;

  const isValidPassword = await bcrypt.compare(password, hashedPassword);

  if (!isValidPassword) {
    throw new CustomError('Wrong password.', 401);
  }

  const token = jwt.sign({ _id }, process.env.JWT_KEY);
  return res.status(200).json({ success: true, token });
};

const register = async (req, res, next) => {
  const userObject = req.body;

  await User.validate(userObject);

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(userObject.password, salt);

  userObject.password = hash;

  const { _id } = await User.create(userObject);
  const token = jwt.sign({ _id }, process.env.JWT_KEY);
  return res.status(201).json({ success: true, token });
};

module.exports = {
  login,
  register,
};
