// customerAPI.js - Centralized API handling
import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com/api';

export const customerAPI = {
  // Fetch all customers
  getAllCustomers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers`);
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  },

  // Fetch verified customers
  getVerifiedCustomers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers/verified`);
      return response.data;
    } catch (error) {
      console.error('Error fetching verified customers:', error);
      throw error;
    }
  },

  // Add new customer
  addCustomer: async (customerData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/customers`, customerData);
      return response.data;
    } catch (error) {
      console.error('Error adding customer:', error);
      throw error;
    }
  },

  // Update customer
  updateCustomer: async (id, customerData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/customers/${id}`, customerData);
      return response.data;
    } catch (error) {
      console.error('Error updating customer:', error);
      throw error;
    }
  },

  // Delete customer
  deleteCustomer: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/customers/${id}`);
    } catch (error) {
      console.error('Error deleting customer:', error);
      throw error;
    }
  },

  // Verify customer
  verifyCustomer: async (id, verificationData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/customers/${id}/verify`, verificationData);
      return response.data;
    } catch (error) {
      console.error('Error verifying customer:', error);
      throw error;
    }
  }
};