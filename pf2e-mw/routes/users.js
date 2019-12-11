const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET  
router.get('/:username', getUser, (req, res) => {
  res.json(res.user);
});

// POST 
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    admin: req.body.admin
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// -- Helpers --
// MW getter  
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.find({ username: req.params.username });
    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.user = user;
  next();
}

module.exports = router;