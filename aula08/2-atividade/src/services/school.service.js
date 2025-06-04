const schoolModel = require('../models/school.model');

const getAllUsers = async () => {
  const users = await schoolModel.find().lean();
  return users;
}

const getUserById = async (id) => {
  const user = await schoolModel.findById(id).lean();
  return user;
}

const createUser = async (userData) => {
  const newUser = await schoolModel.create(userData);
  return newUser
}

const updateUser = async (id, userData) => {
  const userUpdated = await schoolModel.findByIdAndUpdate(id, userData, { new: true }).lean();
  return userUpdated;
}

const updateUserAllFields = async (id, userData) => {
  const userUpdated = await schoolModel.findByIdAndUpdate(id, userData, { new: true }).lean();
  return userUpdated;
}

const deleteUser = async (id) => {
  const userDeleted = await schoolModel.findByIdAndDelete(id);
  return userDeleted;
}

const deleteAllUsers = async () => {
  const deletedUsers = await schoolModel.deleteMany({});
  return deletedUsers;
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