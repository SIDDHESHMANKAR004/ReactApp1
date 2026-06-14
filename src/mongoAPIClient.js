// mongoAPIClient.js - Client-side API service for React components
import axios from 'axios';
import dotenv from 'dotenv';
  
dotenv.config();

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5173/';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ===================== PRODUCT API CALLS =====================

async function getProductsFromBackend() {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

async function getSingleProductFromBackend(id) {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

async function addProductToBackend(product) {
  try {
    const response = await apiClient.post('/products', product);
    console.log('Product added with ID:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

async function updateBackendProduct(product) {
  try {
    const response = await apiClient.put(`/products/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

async function deleteBackendProduct(product) {
  try {
    const response = await apiClient.delete(`/products/${product.id || product._id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}

// ===================== USER API CALLS =====================

async function addUserToBackend(user) {
  try {
    const response = await apiClient.post('/users', user);
    console.log('User created with ID:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}

async function getUserFromBackend() {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

async function getUserByEmailFromBackend(email) {
  try {
    const response = await apiClient.get(`/users/email/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

async function getUserByIdFromBackend(id) {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

async function updateBackendUser(user) {
  try {
    const response = await apiClient.put(`/users/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

async function deleteBackendUser(userId) {
  try {
    const response = await apiClient.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// ===================== BILL API CALLS =====================

async function importBackendDataToBill(id) {
  try {
    const response = await apiClient.get(`/bills/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bill:', error);
    throw error;
  }
}

async function getLastBillNumberFromBackend() {
  try {
    const response = await apiClient.get('/bill-number');
    return response.data;
  } catch (error) {
    console.error('Error fetching bill number:', error);
    throw error;
  }
}

async function addBillToBackend(billObj) {
  try {
    const response = await apiClient.post('/bills', billObj);
    console.log('Bill created with ID:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('Error adding bill:', error);
    throw error;
  }
}

async function updateBackendLastBillNumber(billNumber) {
  try {
    const response = await apiClient.put(`/bill-number/${billNumber.id}`, billNumber);
    return response.data;
  } catch (error) {
    console.error('Error updating bill number:', error);
    throw error;
  }
}

async function getAllBillsFromBackend() {
  try {
    const response = await apiClient.get('/bills');
    return response.data;
  } catch (error) {
    console.error('Error fetching bills:', error);
    throw error;
  }
}

async function updateBackendBill(bill) {
  try {
    const response = await apiClient.put(`/bills/${bill.id}`, bill);
    return response.data;
  } catch (error) {
    console.error('Error updating bill:', error);
    throw error;
  }
}

async function deleteBackendBill(billId) {
  try {
    const response = await apiClient.delete(`/bills/${billId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting bill:', error);
    throw error;
  }
}

async function generateNextBillNumber() {
  try {
    const response = await apiClient.post('/bill-number/generate');
    return response.data.billNumber;
  } catch (error) {
    console.error('Error generating bill number:', error);
    throw error;
  }
}

export {
  // Products
  getProductsFromBackend,
  getSingleProductFromBackend,
  addProductToBackend,
  updateBackendProduct,
  deleteBackendProduct,
  // Users
  addUserToBackend,
  getUserFromBackend,
  getUserByEmailFromBackend,
  getUserByIdFromBackend,
  updateBackendUser,
  deleteBackendUser,
  // Bills
  importBackendDataToBill,
  getLastBillNumberFromBackend,
  addBillToBackend,
  updateBackendLastBillNumber,
  getAllBillsFromBackend,
  updateBackendBill,
  deleteBackendBill,
  generateNextBillNumber,
};
