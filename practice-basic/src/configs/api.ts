import axios from 'axios';

/**
 * Set config defaults
 * link to json-server deploy
 */
export const api = axios.create({
  baseURL: 'https://json-server-b2em.onrender.com'
});
