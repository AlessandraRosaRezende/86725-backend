const schoolService = require('../services/school.service');

const getAllUsers = async (req, res) => {
  // try {
    const users = await schoolService.getAllUsers();
    res.status(200).json(users);
  // } catch (error) {
  //   res.status(500).json({ message: 'Error retrieving users', error });
  // }
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await schoolService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
}

const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = await schoolService.createUser({ first_name, last_name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const updatedUser = await schoolService.updateUser(id, { email, password });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}

const updateUserAllFields = async (req, res) => {
  const { id } = req.params;
  const userData = req.body; // Assuming the entire user object is sent for update
  try {
    const updatedUser = await schoolService.updateUserAllFields(id, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await schoolService.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
}

const deleteAllUsers = async (req, res) => {
  try {
    await schoolService.deleteAllUsers();
    res.status(200).json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting all users', error });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  updateUserAllFields
};