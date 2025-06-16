// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // true if using HTTPS
}));
// app.js (after app.use(session(...)))
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});


app.set('view engine', 'ejs');

// Routes

app.use('/', mainRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
