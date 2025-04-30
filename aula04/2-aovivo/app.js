const express = require("express");

const app = express();

app.get("/saudar", (req, res) => {
  res.send("Olá a todos!");
});
// req.params
app.post("/saudarDinamico/:name", (req, res) => {
  console.log(req);
  const { name } = req.params;
  res.send(`Olá ${name}, Tudo bom?`);
});

app.listen(8080, () => {
  console.log("Online na porta 8080");
});
