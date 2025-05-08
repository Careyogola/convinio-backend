import bcrypt from 'bcryptjs';
import User from '../models/User-Model.js';

export const register = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if req.body is empty
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    // Check if user exists
    const [existingUser] = await User.findByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create user
    const [newUser] = await User.create({ name, email, password: hashPassword });
    res.status(201).json({ message: 'User created successfully!', userId: newUser.insertId });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};


export const login = (req, res) => {
    res.send('Signup route');
}
export const logout = (req, res) => {
    res.send('Signup route');
}
export const getMe = (req, res) => {
    res.send('Signup route');
}
export const updateDetails = (req, res) => {
    res.send('Signup route');
}
export const updatePassword = (req, res) => {
    res.send('...');
}