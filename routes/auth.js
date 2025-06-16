// controllers/authController.js
const express = require('express');
const router = express.Router(); // yang ni masuk authController.js
const authController = require('../controllers/authController');



// Register
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', authController.register);

// Login
router.get('/login', (req,res) =>{
  res.render('login');
})
router.post('/login', authController.login)




module.exports = router;