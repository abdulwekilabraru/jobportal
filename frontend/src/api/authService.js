// src/api/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://jobportalkiot.onrender.com/auth'; // Production backend

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response.data;
};
