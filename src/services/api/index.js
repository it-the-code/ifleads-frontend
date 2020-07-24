import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3016',
});

export default api;
