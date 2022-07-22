// importing Express.js
const express = require('express');

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Yo, bitch'
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// starts Express.js server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

