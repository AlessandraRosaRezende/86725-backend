const mongoose = require('mongoose');
const userModel = require('./models/user.model');

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');
  let users = await userModel.paginate({gender: 'Female'}, { page: 1, limit: 10 });
  console.log('Pagina 1: ', users);
  
  users = await userModel.paginate({ gender: 'Female' }, { page: 2, limit: 10 });
  console.log('Pagina 2: ', users);
};

environment();