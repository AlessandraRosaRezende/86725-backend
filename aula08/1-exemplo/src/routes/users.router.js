const { Router } = require('express');
const usersController = require('../controllers/users.controller');

const usersRouter = Router();

usersRouter.get('/', usersController.getAllUsers); // Rota para obter todos os usuários
usersRouter.get('/:id', usersController.getUserById); // Rota para obter um usuário por ID
usersRouter.post('/', usersController.createUser); // Rota para criar um novo usuário
usersRouter.put('/:id', usersController.updateUser); // Rota para atualizar um usuário por ID
usersRouter.delete('/:id', usersController.deleteUser); // Rota para deletar um usuário por ID
usersRouter.delete('/', usersController.deleteAllUsers); // Rota para deletar todos os usuários

module.exports = usersRouter;

// GET -> acessar
// POST -> criar
// PUT -> atualizar
// PATCH -> atualizar parcialmente
// DELETE -> remover