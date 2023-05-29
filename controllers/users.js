// import { find, findById, create } from '../schemas/Fact';
import User from '../models/User.js';
import mongoose from 'mongoose';

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(400).json({ error: 'No users found' });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create User
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: 'An empty field is not much of a fun fact!' });
  }

  const newUser = await User.create({ name, email, password });
  res.status(201).json(newUser);
};

export { getUsers, createUser };
