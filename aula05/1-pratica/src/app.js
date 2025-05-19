const express = require("express");
const viewRouter = require("./routes/views.router");
const userRouter = require("./routes/user.router");
const handlebars = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

const pathPublic = path.join(__dirname, "..", "public");

app.use(express.static(pathPublic));

app.use("/views", viewRouter);
app.use("/users", userRouter);

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

module.exports = app;
