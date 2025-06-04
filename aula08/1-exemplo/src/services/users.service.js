const usersModel = require('../models/users.model');

const getAllUsers = async () => {
  try {
    const users = await usersModel.find().lean(); // Usando .lean() para retornar objetos simples
    return users;
  } catch (error) {
    throw new Error('Erro ao obter usuários: ' + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await usersModel.findById(id).lean();
    return user;
  } catch (error) {
    throw new Error('Erro ao obter usuário: ' + error.message);
  }
};

const createUser = async (userData) => {
  try {
    const newUser = await usersModel.create(userData);
    return newUser.toObject(); // Convertendo para objeto simples
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

const updateUser = async (id, userData) => {
  try {
    const updatedUser = await usersModel.findByIdAndUpdate(id, userData, { new: true }).lean(); // o new: true retorna o documento atualizado
    return updatedUser;
  } catch (error) {
    throw new Error('Erro ao atualizar usuário: ' + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await usersModel.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    throw new Error('Erro ao deletar usuário: ' + error.message);
  }
};

const deleteAllUsers = async () => {
  try {
    await usersModel.deleteMany({});
    return { message: 'Todos os usuários foram deletados com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar todos os usuários: ' + error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
};