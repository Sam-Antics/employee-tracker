// importing Express.js and mysql2 (via connection.js)
const express = require('express');
const db = require('./db/connection');

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// starts Express.js server and connects to database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to the Employee Tracker database.');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});