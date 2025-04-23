const UserManager = require("./UserManager");

const main = async () => {
  const userManager = new UserManager();

  const user1 = {
    name: "Lucas",
    password: "123456",
  };

  //await userManager.addUser(user1);
  const users = await userManager.getUsers();
  console.log(users);

  
const user2 = {
  name: "Lucas",
  password: "123456",
};


await userManager.validarUsuario(user2);
};


main();
