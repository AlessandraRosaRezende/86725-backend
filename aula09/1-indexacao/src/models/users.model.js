const moongoose = require('mongoose');

const userCollection = 'users';

const userSchema = new moongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: String,
  gender: String,
});

const userModel = moongoose.model(userCollection, userSchema);

module.exports = userModel;