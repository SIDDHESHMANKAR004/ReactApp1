// server.js - Express Backend Setup with MongoDB
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './mongoConnection.js';
import {
  getProductsFromBackend,
  getSingleProductFromBackend,
  addProductToBackend,
  updateBackendProduct,
  deleteBackendProduct,
} from './mongoProductServices.js';
import {
  addUserToBackend,
  getUserFromBackend,
  getUserByEmailFromBackend,
  getUserByIdFromBackend,
  updateBackendUser,
  deleteBackendUser,
} from './mongoUserServices.js';
import {
  importBackendDataToBill,
  getLastBillNumberFromBackend,
  addBillToBackend,
  updateBackendLastBillNumber,
  getAllBillsFromBackend,
  updateBackendBill,
  deleteBackendBill,
  generateNextBillNumber,
} from './mongoBillNumberServices.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// ===================== PRODUCT ROUTES =====================

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await getProductsFromBackend();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await getSingleProductFromBackend(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add product
app.post('/api/products', async (req, res) => {
  try {
    const product = await addProductToBackend(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update product
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await updateBackendProduct({ id: req.params.id, ...req.body });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    await deleteBackendProduct({ id: req.params.id });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===================== USER ROUTES =====================

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await getUserFromBackend();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserByIdFromBackend(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by email
app.get('/api/users/email/:email', async (req, res) => {
  try {
    const user = await getUserByEmailFromBackend(req.params.email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add user
app.post('/api/users', async (req, res) => {
  try {
    const user = await addUserToBackend(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await updateBackendUser({ id: req.params.id, ...req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    await deleteBackendUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===================== BILL ROUTES =====================

// Get all bills
app.get('/api/bills', async (req, res) => {
  try {
    const bills = await getAllBillsFromBackend();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get bill by ID
app.get('/api/bills/:id', async (req, res) => {
  try {
    const bill = await importBackendDataToBill(req.params.id);
    if (bill) {
      res.json(bill);
    } else {
      res.status(404).json({ error: 'Bill not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add bill
app.post('/api/bills', async (req, res) => {
  try {
    const bill = await addBillToBackend(req.body);
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update bill
app.put('/api/bills/:id', async (req, res) => {
  try {
    const bill = await updateBackendBill({ id: req.params.id, ...req.body });
    res.json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete bill
app.delete('/api/bills/:id', async (req, res) => {
  try {
    await deleteBackendBill(req.params.id);
    res.json({ message: 'Bill deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===================== BILL NUMBER ROUTES =====================

// Get last bill number
app.get('/api/bill-number', async (req, res) => {
  try {
    const billNumber = await getLastBillNumberFromBackend();
    res.json(billNumber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate next bill number
app.post('/api/bill-number/generate', async (req, res) => {
  try {
    const nextNumber = await generateNextBillNumber();
    res.json({ billNumber: nextNumber });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update bill number
app.put('/api/bill-number/:id', async (req, res) => {
  try {
    const billNumber = await updateBackendLastBillNumber({ id: req.params.id, ...req.body });
    res.json(billNumber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
