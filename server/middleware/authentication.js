const jwt = require('jsonwebtoken');
const CustomError = require('../errors/CustomError');

const authenticationMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new CustomError('Auth Bearer Token not provided!', 401);
  }

  const tokenString = req.headers.authorization.split('Bearer ')[1];

  try {
    const tokenDecoded = jwt.verify(tokenString, process.env.JWT_KEY);
    req.token = tokenDecoded;
  } catch (error) {
    throw new CustomError('Auth Bearer Token corrupted!', 401);
  }

  next();
};

module.exports = authenticationMiddleware;
