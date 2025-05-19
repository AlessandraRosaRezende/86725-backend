const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const upload = require("../middlewares/multer");
const router = express.Router();

let usuarios = [];

router.get("/", async (req, res) => {
  res.status(200).json({ users: usuarios });
});

router.post("/", async (req, res) => {
  try {
    let usuario = req.body;
    usuarios.push(usuario);

    res.status(201).json({ messsage: "Usuario criado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/upload", upload.single("file"), function (req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log(req.file);

    let usuario = req.body;
    const host = "http://localhost:8080"
    usuario.profile = `${host}/${req.file.filename}`;
    usuarios.push(usuario);
    console.log(usuarios);
    res.send({ messsage: "Usuario criado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
