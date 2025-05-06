const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const upload = require("../middlewares/multer");
const router = express.Router();

let usuarios = [];

router.get("/", async (req, res) => {
  res.send("users", { usuarios });
});

router.post("/", async (req, res) => {
  try {
    let usuario = req.body;
    usuarios.push(usuario);
    console.log(usuarios);
    res.send({ messsage: "Usuario criado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/upload", upload.single("file"), function (req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log(req.file.path);

    let ussuario = req.body;
    ussuario.profile = req.file.path;
    usuarios.push(ussuario);
    console.log(usuarios);
    res.send({ messsage: "Usuario criado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
