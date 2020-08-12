import axios from 'axios';

export const basicJsonHeader = { 'Content-Type': 'application/json' };

export const client = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: basicJsonHeader
});
