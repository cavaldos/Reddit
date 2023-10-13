const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
import { db } from '../../config/database';

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await db.user.findUnique({ where: { email } });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }

      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  logout: async (req, res) => {

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    res.status(200).json({ message: 'Logged out successfully' });
  },
  register: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const existingUser = await db.user.findUnique({ where: { email } });

      if (existingUser) {
        throw new Error('Email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await db.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });


      await db.account.create({
        data: {
          userId: user.id,
          type: 'email',
          provider: 'local',
          providerAccountId: '001',
        },
      });

      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  resetPassword: async (req, res) => {
    const { userId, newPassword } = req.body;
    try {
      const user = await db.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new Error('User not found');
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await db.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      res.status(200).json({ message: 'Password reset successful' });
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  refreshToken: async (req, res) => {
    const { refreshToken } = req.body;

    try {
      const decodedToken = verifyToken(refreshToken);
      const user = await db.user.findUnique({ where: { id: decodedToken.userId } });

      if (!user) {
        throw new Error('User not found');
      }

      const accessToken = generateAccessToken(user.id);
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.status(200).json({ message: "true" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
module.exports = authController;
