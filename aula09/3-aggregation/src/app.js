const mongoose = require("mongoose");
const orderModel = require("./models/order.model");

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');
  // let result = await orderModel.insertMany(
  //   [
  //     {
  //       name: "pepperoni",
  //       size: "small",
  //       price: 19,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //     {
  //       name: "pepperoni",
  //       size: "medium",
  //       price: 20,
  //       quantity: 20,
  //       date: new Date(),
  //     },
  //     {
  //       name: "pepperoni",
  //       size: "large",
  //       price: 21,
  //       quantity: 30,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "small",
  //       price: 12,
  //       quantity: 15,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "medium",
  //       price: 13,
  //       quantity: 50,
  //       date: new Date(),
  //     },
  //     {
  //       name: "cheese",
  //       size: "large",
  //       price: 14,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //     {
  //       name: "vegan",
  //       size: "medium",
  //       price: 17,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //     {
  //       name: "vegan",
  //       size: "medium",
  //       price: 18,
  //       quantity: 10,
  //       date: new Date(),
  //     },
  //   ]
  // )
  // console.log(result);

  // 1°
  // let orders = await orderModel.aggregate([
  //   {
  //     $match: { size: 'medium' }, // pergunta - ao invés de fixar, podemos passar como parâmetro - ex: pizzaSize
  //   },
  //   {
  //     $group: {
  //       _id: "$name",
  //       totalQuantity: { $sum: "$quantity" },
  //     },
  //   },
  // ]);

  // console.log(orders);

  // 2°
  let orders = await orderModel.aggregate([
    {
      // 1. Filtra apenas os documentos que possuem o campo "size" igual a 'medium'.
      //    Em vez de fixar 'medium', você pode passar como parâmetro uma variável (ex: pizzaSize).
      //    Exemplo: $match: { size: pizzaSize }
      $match: { size: 'medium' },
    },
    {
      // 2. Agrupa os pedidos pelo campo "name" (nome do produto ou cliente, por exemplo).
      //    Para cada grupo, soma a quantidade total de itens pedidos.
      $group: {
        _id: "$name", // Agrupamento por nome
        totalQuantity: { $sum: "$quantity" }, // Soma as quantidades por grupo
      },
    },
    {
      // 3. Ordena os grupos em ordem decrescente com base na quantidade total.
      $sort: { totalQuantity: -1 },
    },
    {
      // 4. Agrupa todos os documentos em um único grupo (_id arbitrário),
      //    empurrando cada documento original (após o sort) para dentro de um array chamado "orders".
      $group: { _id: 1, orders: { $push: "$$ROOT" } },
    },
    {
      // 5. Projeta (seleciona) apenas o campo "orders", removendo o _id.
      $project: { _id: 0, orders: "$orders" },
    },
    {
      // 6. Salva (mergeia) o resultado final dentro da coleção "reports".
      //    Se já existir um documento com o mesmo _id, ele será substituído.
      $merge: { into: "reports" },
    },
  ]);
  
  console.log(orders);

  // IMPORTANTE:
  // Após executar este aggregate, a variável "orders" será um array vazio ([]),
  // pois o estágio final ($merge) salva os dados na coleção "reports" sem retornar resultados.

  // Para visualizar o relatório salvo, faça uma consulta direta na coleção "reports", por exemplo:
  const report = await mongoose.connection.collection('reports').find().toArray();
  console.log(JSON.stringify(report, null, 2));

  // Alternativamente, remova temporariamente o estágio $merge do pipeline
  // para que os resultados sejam retornados diretamente na variável "orders".
}

environment();