// Import required dependencies
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// Initialize PrismaClient
const prisma = new PrismaClient();

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes

// GET /users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /users
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
