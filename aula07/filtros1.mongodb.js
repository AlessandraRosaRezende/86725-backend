use("escola");

// db.alunos.insertMany([
//   {
//     nome: "Gabriel",
//     sobrenome: "Mendes",
//     curso: "Engenharia",
//     idade: 24,
//     correspondencia: "gabriel@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Helena",
//     sobrenome: "Fernandes",
//     curso: "Administração",
//     idade: 22,
//     correspondencia: "helena@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Igor",
//     sobrenome: "Lima",
//     curso: "Direito",
//     idade: 25,
//     correspondencia: "igor@email.com",
//     sexo: "M"
//   },
//   {
//     nome: "Juliana",
//     sobrenome: "Barros",
//     curso: "Arquitetura",
//     idade: 23,
//     correspondencia: "juliana@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Karla",
//     sobrenome: "Ribeiro",
//     curso: "Psicologia",
//     idade: 21,
//     correspondencia: "karla@email.com",
//     sexo: "F"
//   },
//   {
//     nome: "Leonardo"
//   },{
//     nome: "Juliana",
//     sobrenome: "Barros",
//     curso: "Arquitetura",
//     idade: 23,
//     correspondencia: "juliana@email.com",
//     sexo: "F",
//     estrangeiro: true
//   }
// ])

// Buscar alunos com idade maior ou igual a 23, ordenando pela idade decrescente
// db.alunos.find({idade: { $gte: 23 }}).sort({idade: -1});

// db.alunos.find({ idade: { $gt: 23 } }).sort({ idade: -1 });

// db.alunos.find({idade: { $lte: 23 }}).sort({idade: -1});

// db.alunos.find({ idade: { $lt: 23 } }).sort({ idade: -1 });

// Buscar alunos que fazem o curso "Engenharia" ou "Direito", mostrar nome, curso e pular o primeiro
// db.alunos.find(
//   { curso: { $in: ["Engenharia", "Direito"] } },
//   { nome: 1, curso: 1, _id: 0 }
// ).skip(1)

// Buscar os 3 primeiros alunos mais novos, projetando todos os campos exceto o email
// db.alunos.find(
//   { correspondencia: { $exists: true } },
//   { correspondencia: 0 }
// ).sort({ idade: 1 }).limit(3)

// Atualizar os alunos, incluindo a chava estrangeiro como falso, onde ela não existe
// db.alunos.updateMany(
//   { estrangeiro: { $exists: false } },
//   { $set: { estrangeiro: false } }
// );

// db.alunos.find();

// Buscar alunos cujo nome começa com a letra “J”, mostrando nome e idade
// db.alunos.find(
//   { nome: { $regex: /^J/, $options: "i" } }, // options "i" torna a busca case-insensitive
//   { nome: 1, idade: 1, _id: 0 }
// )

// Buscar alunos com idade entre 20 e 24 anos, ordenando por sobrenome crescente e limitando a 3
// db.alunos.find(
//   { idade: { $gte: 20, $lte: 24 } }
// ).sort({ sobrenome: 1 }).limit(3)

// Contar quantos alunos existem com o campo curso preenchido
// db.alunos.countDocuments({ curso: { $exists: true } })

// Atualizar o curso de todos os alunos com idade maior que 30 para "Aposentadoria"
// db.alunos.updateMany(
//   { idade: { $gte: 25 } },
//   { $set: { curso: "TI" } }
// )

// db.alunos.insertOne({
//   nome: "Lucas",
//   sobrenome: "Silva",
//   curso: "Matemática",
//   idade: 20,
//   sexo: "M"
// })

// Adicionar um novo campo email a um aluno que ainda não tem
// db.alunos.updateOne(
//   { nome: "Lucas" },
//   { $set: { correspondencia: "lucas@email.com" } }
// )

// db.alunos.find({ nome: "Lucas" }, { email: 1, _id: 0 });

// Remover o campo correspondencia de um aluno específico
// db.alunos.updateOne(
//   { nome: "Lucas" },
//   { $unset: { correspondencia: "" } }
// )
db.alunos.find({ nome: "Lucas" });

// Deletar todos os alunos que não possuem o campo correspondencia definido
db.alunos.deleteMany(
  { correspondencia: { $exists: false } }
)

// Deletar todos os alunos com idade menor que 18 anos
db.alunos.deleteMany(
  { idade: { $lt: 18 } }
)