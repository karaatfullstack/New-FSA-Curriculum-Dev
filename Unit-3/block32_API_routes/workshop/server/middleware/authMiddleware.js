// import dependencies
const jwt = require('jsonwebtoken');
const { getUser } = require('../controllers/index');

// create middleware
const authMiddleware = (req, res, next) => {
  // get the token from the request
  const token = req.headers['x-access-token']; // can be anything
  // if there is no token return an error
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  // verify the token
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    // if the token is valid set the user in the request
    req.user = getUser(decoded.username);
    next();
  });
};

module.exports = authMiddleware;
