const database = 'escola';
const collection = 'alunos';

use(database);

// db.createCollection(collection);

// db.alunos.insertMany([
//   {
//     nome: "Ana",
//     sobrenome: "Silva",
//     curso: "Matemática",
//     idade: 20,
//     correspondencia: "ana@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Bruno",
//     sobrenome: "Oliveira",
//     curso: "Física",
//     idade: 22,
//     correspondencia: "bruno@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Carla",
//     sobrenome: "Souza",
//     curso: "Química",
//     idade: 21,
//     correspondencia: "carla@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Diego",
//     sobrenome: "Costa",
//     curso: "Biologia",
//     idade: 23,
//     correspondencia: "diego@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Elisa",
//     sobrenome: "Pereira",
//     curso: "História",
//     idade: 20,
//     correspondencia: "elisa@email.com",
//     sexo: "F"
//   }
// ])

// db.alunos.find();

// db.alunos.insertOne({
//   nome: "Felipe",
//   sobrenome: "Almeida",
//   curso: "Geografia"
// })


// db.alunos.insertOne({
//   nome: "Mariana",
//       sobrenome: "Silva",
//       curso: "Matemática",
//       idade: 20,
//       correspondencia: "elisa@email.com",
//       sexo: "F",
//       estrangeiro: true,
// })

// db.alunos.find();

// 1 filtro, 2 atualização
// db.alunos.updateOne({ nome: "Elisa" }, {$set: { idade: 30 }})

// db.alunos.find({ nome: "Elisa" });

// db.alunos.updateMany({ curso: "Geografia"}, {$set: { curso: "TI" }})

// db.alunos.find();

// db.alunos.updateMany({}, { $set: { estrangeiro: false } });

// db.alunos.updateOne({ nome: "Mariana"}, { $set: { estrangeiro: true }})
// db.alunos.find();

// db.alunos.deleteOne({ nome: "Bruno", sobrenome: "Oliveira" });

// db.alunos.deleteMany({})

db.alunos.find();