import User from '../models/User.js'

const getAllUsers = (req, res) => {
  User.find()
    .then(Users => res.status(200).json(Users)); // responde 200 OK
};

const getUser = (req, res) => {
  User.findOne()
    .then(User => res.status(200).json(User));
}

const deleteUser = (req, res) => {
  User.deleteOne({ id: req.params.id })
  .then(() => res.status(200).json({ msg: 'User deleted!' }));
}

const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.status(200).json({ msg: 'User created' }));
}

const controller = { 
  getAllUsers,
  getUser,
  deleteUser,
  createUser
}

export default controller;