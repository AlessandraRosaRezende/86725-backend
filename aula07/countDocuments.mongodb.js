const database = 'baseCRUD';
const collection = 'pets';

use(database);


// db.createCollection(collection);

// db.pets.insertMany([
//   { nome: "Luna", especie: "cachorro", idade: 4 },
//   { nome: "Mimi", especie: "gato", idade: 2 },
//   { nome: "Nina", especie: "cachorro", idade: 7 }
// ])

// db.pets.find({ especie: "cachorro"})

db.pets.countDocuments()
db.pets.countDocuments({ especie: "cachorro" })

db.pets.estimatedDocumentCount({ especie: "cachorro" })