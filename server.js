// ----------------------------[Requires]
require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const port = 3001;
const app = express();
const ensureLoggedIn = require('./config/ensureLoggedIn');
// ----------------------------[Middleware]
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// ----------------------------[Routes]
app.use('/api/users', require('./routes/api/users'));
app.use('/api/recipes', ensureLoggedIn, require('./routes/api/recipes'));
app.use(
  '/api/ingredients',
  ensureLoggedIn,
  require('./routes/api/ingredients')
);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// ----------------------------[Server]
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
