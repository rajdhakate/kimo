import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://web-dev.dev.kimo.ai/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
