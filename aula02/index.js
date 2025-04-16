const productList = [
  { id: 1, nome: "Tenis", marca: "Adidas", categoria: "NA", estoque: 5 },
  { id: 2, nome: "Tenis", marca: "Nike", categoria: "corrida", estoque: 5 },
  { id: 3, nome: "Tenis", marca: "Puma", categoria: "NA", estoque: 5 },
  { id: 1, nome: "Camiseta", marca: "Fila", categoria: "Manga Curta" },
];

const xablau = productList.map((p) => p.estoque);

console.log(xablau);
