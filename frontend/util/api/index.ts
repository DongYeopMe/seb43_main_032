import axios from 'axios';
import { getCookie } from '../cookie';

axios.defaults.withCredentials = true;

// const baseURL =
//   process.env.NODE_ENV === 'production'
//     ? process.env.NEXT_RESOURCE_URL
//     : 'https://side-quest-1.com';

const api = axios.create({
  baseURL: 'https://side-quest-1.com',
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('accessToken'),
    // Refresh: getCookie('refreshToken'),
  },
});

export { api };
