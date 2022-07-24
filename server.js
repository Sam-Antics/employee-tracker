// importing Express.js and mysql2 (via connection.js)
const express = require('express');
const db = require('./db/connection');
// const cTable = require('console.table');

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// // GET a single department from the table
// db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
// });

// // CREATE a department
// const sql = `INSERT INTO department (id, name)
//   VALUES (?,?)`;
// const params = [7, 'IT'];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// starts Express.js server
db.connect(err => {
  if (err) throw err;
  console.log('Connected to the Employee Tracker database.');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});