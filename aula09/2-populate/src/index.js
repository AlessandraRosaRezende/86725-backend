const courseModel = require('./models/courses.model');
const userModel = require('./models/users.model');
const mongoose = require('mongoose');

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');

  // PASSO 1 - CRIAR UM USUÁRIO E UM CURSO PARA PODER FAZER A ASSOCIAÇÃO
  // await userModel.create({
  //   first_name: 'Alê',
  //   last_name: 'Rosa',
  //   email: 'alessandra.teste@mail.com',
  //   gender: 'F',
  // });

  // await courseModel.create({
  //   title: 'Curso de Backend com Node.js',
  //   description: 'Curso de Node.js para iniciantes',
  //   difficulty: 5,
  //   topics: ['Node.js', 'JavaScript', 'Template Engine', 'Express'],
  //   professor: 'Alessandra',
  // });

  // PASSO 2 - SÓ DEPOIS DE CRIAR O USUÁRIO E O CURSO, PODEMOS FAZER A ASSOCIAÇÃO
  // let student = await userModel.findOne({ first_name: "Alê" });
  // console.log(student);

  // let course = await courseModel.findOne();
  // console.log(course);

  // student.courses.push({ course: course._id });

  // let result = await userModel.updateOne({ _id: student._id }, student);
  // console.log(result);

  // result = await userModel.findOne({ _id: student._id });
  // console.log(result);

  // PASSO 3 - POPULATE: DEPOIS QUE MOSTRAMOS O USUÁRIO, PODEMOS POPULAR O CAMPO 'COURSES.COURSE'
  // let student = await userModel.findOne({ first_name: "Alê" });

  // result = await userModel.find({ _id: student._id }).populate('courses.course');
  // console.log(result);

  // // courses vem como objeto - mostrar como podemos ver
  // console.log(JSON.stringify(result, null, 2));

  // PASSO 4: POPULATE COM O MÉTODO 'PRE' DO SCHEMA
  let student = await userModel.findOne({ first_name: 'Alê' })
  console.log(JSON.stringify(student, null, 2));
};

environment();