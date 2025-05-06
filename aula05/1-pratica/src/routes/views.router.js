const express = require("express");

const router = express.Router();

const users = [
  { name: "Mariana", age: 25 },
  { name: "Lucas", age: 30 },
  { name: "Ana", age: 22 },
  { name: "Pedro", age: 28 },
  { name: "Maria", age: 35 },
];

router.get("/", (req, res) => {
  res.render("index", { name: "Mari" });
});

router.get("/user", (req, res) => {
  res.render("index", users[1]);
});

router.get("/register", (req, res) => {
  res.render("register", { style: "index.css" });
});

module.exports = router;
