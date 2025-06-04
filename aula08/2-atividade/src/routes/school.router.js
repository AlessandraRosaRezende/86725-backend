const { Router } = require('express');
const schoolController = require('../controllers/school.controller');

const usersRouter = Router();

usersRouter.get('/', schoolController.getAllUsers);
usersRouter.get('/:id', schoolController.getUserById);
usersRouter.post('/', schoolController.createUser);
usersRouter.put('/:id', schoolController.updateUser);
usersRouter.patch('/:id', schoolController.updateUserAllFields);
usersRouter.delete('/:id', schoolController.deleteUser);
usersRouter.delete('/', schoolController.deleteAllUsers);

module.exports = usersRouter;