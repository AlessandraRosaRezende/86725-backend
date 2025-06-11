const userModel = require('./models/users.model');
const mongoose = require('mongoose');

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');
  // let response = await userModel.find().explain('executionStats');
  let response = await userModel.find({ first_name: "Anselma" }).explain('executionStats');
  console.log(response);
};

environment();