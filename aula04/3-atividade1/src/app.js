import express from "express";

const app = express();
// Obrigatorio ter esse middleware para receber body

app.use(express.json());

const fakeUsers = [
  {
    id: 1,
    nome: "John",
    sobrenome: "Doe",
    genero: "masculino",
    idade: 25,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    nome: "Alessandra",
    sobrenome: "Rezende",
    genero: "feminino",
    idade: 37,
    email: "alerezende@example.com",
  },
  {
    id: 3,
    nome: "Sue",
    sobrenome: "Doe",
    genero: "feminino",
    idade: 30,
    email: "suedoe@example.com",
  },
];

app.get("/bemvindo", (req, res) => {
  const htmlResponse =
    '`<html> <head> <meta charset="UTF-8"> <title>Página de Boas-Vindas</title> <style> body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 20px; } h1 { color: red; } .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); display: inline-block; } </style> </head> <body> <div class="container"> <h1>Bem-vindo ao Express!</h1> <p>Olá, esta é uma resposta HTML formatada.</p> <h3>Servidor Express com HTML</h3> </div> </body> </html>`';
  res.send(htmlResponse);
});

app.get("/usuarioFake", (req, res) => {
  res.status(200).send(fakeUsers[2]);
});

app.get("/usuario", (req, res) => {
  if (Object.keys(req.query).length === 0) {
    return res.status(200).send(fakeUsers);
  }

  const { genero } = req.query;
  const users = fakeUsers.filter((user) => user.genero === genero);
  if (users.length === 0) {
    return res.status(404).json({ message: "Usuários não encontrados" });
  }
  return res.status(200).json({ message: users });
});

app.get("/usuario/search", (req, res) => {
  console.log("Aquiiiii");
  if (Object.keys(req.query).length === 0) {
    return res.status(400).json({ message: "Query não informada" });
  }

  const { query } = req;
  console.log(req.query.nome);

  if (query.nome) {
    const user = fakeUsers.find((user) => user.nome === query.nome);
    return res.status(200).json({ message: "Usuário encontrado", user });
  } else if (query.sobrenome) {
    const user = fakeUsers.find((user) => user.sobrenome === query.sobrenome);
    return res.status(200).json({ message: "Usuário encontrado", user });
  } else if (query.email) {
    const user = fakeUsers.find((user) => user.email === query.email);
    return res.status(200).json({ message: "Usuário encontrado", user });
  }
  return res.status(404).json({ message: "Usuário não encontrado" });
});

app.get("/usuario/:userId", (req, res) => {
  console.log("Aquiiiii222");
  console.log(req.params);

  const { userId } = req.params;

  const user = fakeUsers.find((user) => user.id === +userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: user });
});

app.get("/usuario/search", (req, res) => {
  console.log("Aquiiiii");
  if (Object.keys(req.query).length === 0) {
    return res.status(400).json({ message: "Query não informada" });
  }

  const { query } = req;
  console.log(req.query);
  let user;
  if (query.nome) {
    user = fakeUsers.find((user) => user.nome === query.nome);
    return res.status(200).json({ message: "Usuário encontrado", user });
  } else if (query.sobrenome) {
    user = fakeUsers.find((user) => user.sobrenome === query.sobrenome);
    return res.status(200).json({ message: "Usuário encontrado", user });
  } else if (query.email) {
    user = fakeUsers.find((user) => user.email === query.email);
    return res.status(200).json({ message: "Usuário encontrado", user });
  }
  return res.status(404).json({ message: "Usuário não encontrado" });
});

app.get("/usuario/:nome/:sobrenome", (req, res) => {
  console.log(req.params);
  const { nome, sobrenome } = req.params;

  const user = fakeUsers.find(
    (user) => user.nome === nome && user.sobrenome === sobrenome
  );

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  return res.status(200).json({ message: "Usuário encontrado", user });
});

app.post("/usuario", (req, res) => {
  const body = req.body;
  const nextId = fakeUsers.at(-1).id + 1;
  const newUser = { ...body, id: nextId };
  console.log(newUser);
  fakeUsers.push(newUser);
  return res.status(200).json({ message: newUser });
});

app.put("/usuario/:id", (req, res) => {
  // findIndex
  const { id } = req.params;
  const body = req.body;
  const index = fakeUsers.findIndex((u) => u.id === +id);
  fakeUsers[index] = { ...body, id: fakeUsers[index].id };
  return res.status(200).json({ message: fakeUsers[index] });
});



app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
