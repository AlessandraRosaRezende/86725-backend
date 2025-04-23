const UserManager = require("./UserManager");

const userManager = new UserManager();

const user1 = {
  name: "Lucas",
  sobrenome: "Lima",
  password: "123456",
};

userManager.addUser(user1);

console.log(userManager.getUsers())

const user2 = {
  name: "Lucas",
  sobrenome: "Lima",
  password: "1234565",
};


userManager.validarUsuario(user2);