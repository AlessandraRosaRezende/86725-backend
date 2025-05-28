// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('minhaPrimeiraBase');

// Create a new document in the collection.
db.getCollection('estudantes').insertMany([
  {
    "nome": "Ana",
    "sobrenome": "Silva",
    "curso": "Matemática",
    "idade": 21,
    "correspondência": "ana.silva@example.com",
    "sexo": "F"
  },
  {
    "nome": "Bruno",
    "sobrenome": "Souza",
    "curso": "Física",
    "idade": 23,
    "correspondência": "bruno.souza@example.com",
    "sexo": "M"
  },
  {
    "nome": "Carla",
    "sobrenome": "Pereira",
    "curso": "Química",
    "idade": 22,
    "correspondência": "carla.pereira@example.com",
    "sexo": "F"
  },
  {
    "nome": "Diego",
    "sobrenome": "Almeida",
    "curso": "Biologia",
    "idade": 24,
    "correspondência": "diego.almeida@example.com",
    "sexo": "M"
  },
  {
    "nome": "Elisa",
    "sobrenome": "Costa",
    "curso": "História",
    "idade": 20,
    "correspondência": "elisa.costa@example.com",
    "sexo": "F"
  }
]);

db.estudantes.find()

db.estudantes.find().forEach(function(estudante) {
  print("Nome: " + estudante.nome + " " + estudante.sobrenome);
  print("Curso: " + estudante.curso);
  print("Idade: " + estudante.idade);
  print("E-mail: " + estudante.correspondência);
  print("Sexo: " + estudante.sexo);
  print("-------------------------");
}
);