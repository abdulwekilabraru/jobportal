// src/api/authService.js
// Centralized auth service using an environment-based base URL.
// Falls back to production URL if VITE_API_BASE_URL not provided.
import axios from 'axios';

const BASE = (import.meta.env?.VITE_API_BASE_URL || 'https://jobportalkiot.onrender.com/auth').replace(/\/$/, '');

// Create a dedicated axios instance (token injection can be added later)
const authClient = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Helper: attach token if present (expand later if refresh logic added)
authClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = async (userData) => {
  const { data } = await authClient.post('/register', userData);
  return data;
};

export const loginUser = async (userData) => {
  const { data } = await authClient.post('/login', userData);
  return data;
};

// Optional: future endpoints (password reset, etc.) can follow same pattern.
