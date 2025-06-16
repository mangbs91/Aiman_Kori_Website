// controllers/authController.js
const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );
    req.session.user = username;
    res.redirect('/dashboard');
    console.log("succes register user")
  } catch (err) {
    console.error(err);
    res.send('Error registering user. Username may already exist.');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

  if (result.rows.length && await bcrypt.compare(password, result.rows[0].password)) {
    req.session.user = username;
    res.redirect('/dashboard');
    console.log("succes login")
  } else {
    res.send('Invalid credentials');
  }
};

