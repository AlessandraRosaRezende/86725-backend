const express = require("express");
const userService = require("../services/users.service");

const router = express.Router();

router.get("/", async (req, res) => {
  await userService.getUsers(req, res);
});

module.exports = router;
