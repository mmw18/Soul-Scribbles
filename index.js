// Importing express, database connection, and routes
const express = require('express');
const db = require('./config/connection'); 
const routes = require('./routes'); 

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using routes defined 
app.use(routes);

// Start the server once the database is 'open'
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
