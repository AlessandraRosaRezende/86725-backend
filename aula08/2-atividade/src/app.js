const express = require('express');
const dbConn = require('./db/connection');
const schoolRouter = require('./routes/school.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to the database

dbConn.then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.error('Database connection failed:', error);
});

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

app.use('/api/school', schoolRouter);

module.exports = app;