const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
          if (err) {
              res.status(401).json(err);
          } else {
              req.user = {
                  email: decodedToken.email,
                  username: decodedToken.username
              };
              next();
          }
      });
  } else {
      res.status(401).json({ you: 'shall not pass!' })
  }
};

module.exports = authenticate;
