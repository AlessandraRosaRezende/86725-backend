const database = 'base_treinamento';
const collection = 'clientes';

use(database);
db.createCollection(collection);

// 1. Inserir 5 documentos na coleção clientes
db.clientes.insertMany([
  { nome: "Paulo", idade: 25 },
  { nome: "João", idade: 22 },
  { nome: "Lúcia", idade: 25 },
  { nome: "João", idade: 29 },
  { nome: "Fede", idade: 35 }
])

// 2. Listar todos os documentos, ordenados por idade decrescente
db.clientes.find().sort({ idade: -1 })

// 3. Listar o cliente mais jovem
db.clientes.find().sort({ idade: 1 }).limit(1)

// 4. Listar o segundo cliente mais jovem
db.clientes.find().sort({ idade: 1 }).skip(1).limit(1)

// 5. Listar clientes chamados "John"
db.clientes.find({ nome: "John" })

// 6. Listar clientes chamados "João" que têm 29 anos
db.clientes.find({ nome: "João", idade: 29 })

// 7. Listar clientes chamados "Juan" ou "Lucia"
db.clientes.find({ nome: { $in: ["Juan", "Lucia"] } })

// 8. Listar clientes com mais de 25 anos
db.clientes.find({ idade: { $gt: 25 } })

// 9. Listar clientes com 25 anos ou menos
db.clientes.find({ idade: { $lte: 25 } })

// 10. Listar clientes que NÃO têm 25 anos
db.clientes.find({ idade: { $ne: 25 } })

// 11. Listar clientes com idade entre 26 e 35 anos (inclusive)
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

// 12. Atualizar a idade de Fede para 36 anos
db.clientes.updateOne(
  { nome: "Fede" },
  { $set: { idade: 36 } }
)
// Verificar se Fede desapareceu da faixa 26–35
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

// 13. Atualizar todas as idades de 25 para 26 anos
db.clientes.updateMany(
  { idade: 25 },
  { $set: { idade: 26 } }
)
// Verificar os atualizados
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

// 14. Apagar clientes que se chamam "João"
db.clientes.deleteMany({ nome: "João" })

// Verificar o resultado
db.clientes.find()

// 15. Apagar todos os documentos da coleção "alunos"
db.alunos.deleteMany({})

// Exemplos de filtros e projeções extras
// Igualdade simples
db.clientes.find({ nome: "João" })

// Comparação: idade maior que 25
db.clientes.find({ idade: { $gt: 25 } })

// idade diferente de 25
db.clientes.find({ idade: { $ne: 25 } })

// $in
db.clientes.find({ nome: { $in: ["Juan", "Lucia"] } })

// $nin
db.clientes.find({ nome: { $nin: ["Juan", "Lucia"] } })

// $and
db.clientes.find({ $and: [{ nome: "João" }, { idade: 29 }] })

// $or
db.clientes.find({ $or: [{ nome: "João" }, { idade: { $gt: 30 } }] })

// $not
db.clientes.find({ idade: { $not: { $eq: 25 } } })

// $exists
db.clientes.find({ idade: { $exists: true } })
db.clientes.find({ idade: { $exists: false } })

// Regex
db.clientes.find({ nome: { $regex: /^J/ } })      // Começa com J
db.clientes.find({ nome: { $regex: /an/ } })       // Contém "an"

// Campo nulo (inserir um exemplo com campo ausente ou null se quiser testar)
db.clientes.insertOne({ nome: "SemIdade" })        // Inserção com campo ausente
db.clientes.find({ idade: null })

// Projeção + skip + sort + limit
db.clientes.find(
  { idade: { $gte: 18 } },
  { nome: 1, idade: 1, _id: 0 }
).sort({ idade: 1 }).skip(2).limit(3)
