const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  // Hash password and create user logic...
  res.status(201).json({ message: "User registered successfully" });
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  // Validate user and return JWT logic...
  res
    .status(200)
    .json({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1year" });
};

module.exports = { registerUser, loginUser };
