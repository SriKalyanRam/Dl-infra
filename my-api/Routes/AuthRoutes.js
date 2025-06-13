const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const AuthController = require("../Controller/AuthController");

// ✅ JWT Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Invalid or expired token" });

    req.user = user;
    next();
  });
};

// ✅ Public routes
router.post("/Register", AuthController.register);
router.post("/Login", AuthController.login);

// ✅ Protected route example
router.get("/home", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
