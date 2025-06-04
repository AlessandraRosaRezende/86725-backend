const mongoose = require('mongoose');
const schoolCollection = 'escola';
const schoolSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  dni: {
    type: String,
    required: true,
    unique: true
  },
  curso: {
    type: String,
    required: true
  },
  nota: {
    type: Number,
    required: true
  },
});
const schoolModel = mongoose.model(schoolCollection, schoolSchema);

module.exports = schoolModel;