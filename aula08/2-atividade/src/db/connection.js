require('dotenv').config();
const mongoose = require('mongoose');

const dbConn = mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Database connected successfully');
}
).catch((error) => {
  console.error('Database connection error:', error);
});

module.exports = dbConn;