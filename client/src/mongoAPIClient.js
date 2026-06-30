// mongoAPIClient.js - Client-side API service for React components
import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/$/, '');

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function logApiError(action, error) {
  const status = error?.response?.status;
  const message = error?.response?.data?.error || error?.message || 'Unknown error';
  console.error(`[mongoAPIClient] ${action} failed${status ? ` (HTTP ${status})` : ''}: ${message}`, error);
}

async function requestWithErrorHandling(method, path, data, action) {
  try {
    const response = await apiClient.request({
      method,
      url: path,
      data,
    });
    return response.data;
  } catch (error) {
    logApiError(action, error);
    throw error;
  }
}

// ===================== PRODUCT API CALLS =====================

async function getProductsFromBackend() {
  return requestWithErrorHandling('get', '/api/products', null, 'fetch products');
}

async function getSingleProductFromBackend(id) {
  return requestWithErrorHandling('get', `/api/products/${id}`, null, 'fetch product');
}

async function addProductToBackend(product) {
  const responseData = await requestWithErrorHandling('post', '/api/products', product, 'add product');
  console.log('Product added with ID:', responseData?.id);
  return responseData;
}

async function updateBackendProduct(product) {
  return requestWithErrorHandling('put', `/api/products/${product.id || product._id}`, product, 'update product');
}

async function deleteBackendProduct(product) {
  return requestWithErrorHandling('delete', `/api/products/${product.id || product._id}`, null, 'delete product');
}

// ===================== USER API CALLS =====================

async function addUserToBackend(user) {
  const responseData = await requestWithErrorHandling('post', '/api/users', user, 'add user');
  console.log('User created with ID:', responseData?.id);
  return responseData;
}

async function getUserFromBackend() {
  return requestWithErrorHandling('get', '/api/users', null, 'fetch users');
}

async function getUserByEmailFromBackend(email) {
  return requestWithErrorHandling('get', `/api/users/email/${email}`, null, 'fetch user by email');
}

async function getUserByIdFromBackend(id) {
  return requestWithErrorHandling('get', `/api/users/${id}`, null, 'fetch user by ID');
}

async function updateBackendUser(user) {
  return requestWithErrorHandling('put', `/api/users/${user.id}`, user, 'update user');
}

async function deleteBackendUser(userId) {
  return requestWithErrorHandling('delete', `/api/users/${userId}`, null, 'delete user');
}

// ===================== BILL API CALLS =====================

async function importBackendDataToBill(id) {
  return requestWithErrorHandling('get', `/api/bills/${id}`, null, 'fetch bill');
}

async function getLastBillNumberFromBackend() {
  return requestWithErrorHandling('get', '/api/bill-number', null, 'fetch bill number');
}

async function addBillToBackend(billObj) {
  const responseData = await requestWithErrorHandling('post', '/api/bills', billObj, 'add bill');
  console.log('Bill created with ID:', responseData?.id);
  return responseData;
}

async function updateBackendLastBillNumber(billNumber) {
  return requestWithErrorHandling('put', `/api/bill-number/${billNumber.id}`, billNumber, 'update bill number');
}

async function getAllBillsFromBackend() {
  return requestWithErrorHandling('get', '/api/bills', null, 'fetch bills');
}

async function updateBackendBill(bill) {
  return requestWithErrorHandling('put', `/api/bills/${bill.id}`, bill, 'update bill');
}

async function deleteBackendBill(billId) {
  return requestWithErrorHandling('delete', `/api/bills/${billId}`, null, 'delete bill');
}

async function generateNextBillNumber() {
  const responseData = await requestWithErrorHandling('post', '/api/bill-number/generate', null, 'generate bill number');
  return responseData.billNumber;
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
