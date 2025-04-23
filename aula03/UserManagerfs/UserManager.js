const crypto = require("crypto");
const fs = require("fs").promises;

class UserManager {
  constructor() {}

  async addUser(user) {
    user.password = this.#hashPassword(user.password);
    const users = await this.#lerArquivo();
    users.push(user);
    await this.#gravarArquivo(users);
  }

  async #lerArquivo() {
    try {
      const result = await fs.readFile("./data/usuarios.json", "utf-8");
      const resultParsed = await JSON.parse(result);
      return resultParsed;
    } catch (error) {
      console.log(error);
    }
  }
  async #gravarArquivo(data) {
    try {
      const dataToSave = JSON.stringify(data, null, 2);
      await fs.writeFile("./data/usuarios.json", dataToSave);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers() {
    const users = await this.#lerArquivo();
    return users;
  }
  #hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
  }

  async  validarUsuario(usuario) {
    const listUsers = await this.getUsers();

    const senhaAValidar = crypto
      .createHash("sha256")
      .update(usuario.password)
      .digest("hex");

    const userValidated = listUsers.find((user) => {
      return user.name === usuario.name && user.password === senhaAValidar;
    });
    console.log(userValidated);

    if (userValidated) {
      console.log("Usuário Logado!");
    } else {
      console.log("Usuário não logado!");
    }
  }
}


module.exports = UserManager;
