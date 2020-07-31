const jwt = require('jsonwebtoken');
const UserModel = require("../users/model/users.model");

async function verifyToken(req, res, next) {
  try {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    if (!token) {
      return res
        .ststus(400)
        .json({ error: true, msg: 'Token is not provided.' });
    }
    const decoded = jwt.verify(token, "TokenAuth");

    const rows = await UserModel.find({ "_id": decoded.userId });

    if (!rows) {
      return res
        .status(400)
        .json({ error: true, msg: 'The token you provided is invalid.' });
    }
    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    return res.status(400).json({ error: true, msg: 'The token missing or expired!' });
  }
}

module.exports = {
  verifyToken,
};
