const mongoose = require("mongoose");
const studentModel = require("./models/students.model");

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');
  const result = await studentModel.insertMany([
    {
      first_name: "Joao",
      last_name: "Silva",
      email: "teste1@teste.com",
      gender: "Masc",
      grade: 8,
      group: "1A"
    },
    {
      first_name: "Julia",
      last_name: "Silva",
      email: "teste2@teste.com",
      gender: "Fem",
      grade: 9,
      group: "1A"
    },
    {
      first_name: "Gabi",
      last_name: "Silva",
      email: "teste3@teste.com",
      gender: "Fem",
      grade: 10,
      group: "1B"
    },
    {
      first_name: "Ana",
      last_name: "Silva",
      email: "teste4@teste.com",
      gender: "Fem",
      grade: 8,
      group: "1B"
    },
  ]);
  console.log(result)

  // 1. Reúna os alunos agrupados por classificação, do melhor ao pior.
  const resultByGrade = await studentModel.aggregate([
    { $sort: { grade: -1 } },
    { $group: { _id: "$grade", students: { $push: "$$ROOT" } } },
  ]);
  console.log(
    "Alunos agrupados por classificação (do melhor ao pior):",
    resultByGrade,
    JSON.stringify(resultByGrade, null, 2)
  );


  // 2. Reúna os alunos agrupados por grupo.
  const resultByGroup = await studentModel.aggregate([
    { $group: { _id: "$group", students: { $push: "$$ROOT" } } },
  ]);
  console.log("Alunos agrupados por grupo:", resultByGroup, JSON.stringify(resultByGroup, null, 2));

  // 3. Obtenha a média dos alunos do grupo 1B.
  const averageGrade1B = await studentModel.aggregate([
    { $match: { group: "1B" } },
    { $group: { _id: "1B", averageGrade: { $avg: "$grade" } } },
  ]);
  console.log("Média de notas do grupo 1B:", averageGrade1B);

  // 4. Obtenha a média dos alunos do grupo 1A.
  const averageGrade1A = await studentModel.aggregate([
    { $match: { group: "1A" } },
    { $group: { _id: "1A", averageGrade: { $avg: "$grade" } } },
  ]);
  console.log("Média de notas do grupo 1A:", averageGrade1A);

  // 5. Obtenha a média geral dos alunos.
  const overallAverageGrade = await studentModel.aggregate([
    { $group: { _id: null, averageGrade: { $avg: "$grade" } } },
  ]);
  console.log("Média geral dos alunos:", overallAverageGrade);

  // 6. Obtenha a média de notas dos homens.
  const averageGradeMale = await studentModel.aggregate([
    { $match: { gender: "Masc" } },
    { $group: { _id: "Masc", averageGrade: { $avg: "$grade" } } },
  ]);
  console.log("Média de notas dos homens:", averageGradeMale);

  // 7. Obtenha a qualificação média das mulheres.
  const averageGradeFemale = await studentModel.aggregate([
    { $match: { gender: "Fem" } },
    { $group: { _id: "Fem", averageGrade: { $avg: "$grade" } } },
  ]);
  console.log("Média de notas das mulheres:", averageGradeFemale);

};

environment();