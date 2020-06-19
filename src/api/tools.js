import axios from 'axios';

export const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const basicJsonHeader = { 'Content-Type': 'application/json' };

export const client = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  headers: basicJsonHeader
});
