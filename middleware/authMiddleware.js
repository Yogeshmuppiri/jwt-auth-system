// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
// Routes
console.log("side authmiddleware");

  if (!token) {
    return res.status(401).json({ message: 'No token. Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // attach user ID to request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
  
};

module.exports = authMiddleware;
