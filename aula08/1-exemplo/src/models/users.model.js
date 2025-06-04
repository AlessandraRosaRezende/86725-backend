const mongoose = require('mongoose');
const usersCollection = 'users';
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true // campo obrigatório
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // campo único
  },
  password: {
    type: String,
    required: true
  },
});

const userModel = mongoose.model(usersCollection, userSchema);

module.exports = userModel;