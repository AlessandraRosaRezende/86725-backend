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

// Buscar todos os alunos ordenando por idade crescente
// db.alunos.find().sort({ nome: 1, idade: -1 });

// Buscar todos os alunos ordenando por idade crescente (mostrar nome, idade e curso)
// 1 parametro é o filtro, 2º parâmetro é a projeção
// db.alunos.find({}, { _id: 0, nome: 1, idade: 1, curso: 1 }).sort({ idade: 1 });

// Buscar os alunos projetando apenas nome e curso, pulando os 2 primeiros e limitando a 3 documentos
// db.alunos.find({}, { nome: true, curso: 1, _id: false}).skip(2).limit(3);

// Buscar todos os alunos do sexo feminino, projetando apenas nome e sobrenome
db.alunos.find({ sexo: "F" }, { nome: true, sobrenome: 1, _id: 0 })