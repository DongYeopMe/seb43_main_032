import axios from 'axios';
import { getCookie } from '../cookie';

axios.defaults.withCredentials = true;

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_RESOURCE_URL
    : 'http://52.78.90.190:8080';

const api = axios.create({
  baseURL,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('accessToken'),
    // Refresh: getCookie('refreshToken'),
  },
});

export { api };
