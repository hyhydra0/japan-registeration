import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || window.location.origin,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // Log request in development
    if (import.meta.env.DEV) {
      console.log('Request:', config.method?.toUpperCase(), config.url);
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses
    if (import.meta.env.DEV) {
      console.log('Response:', response.status, response.data);
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle error responses
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.status, error.response.data);
      
      // You can handle different error codes here
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          console.error('Unauthorized');
          break;
        case 403:
          // Handle forbidden
          console.error('Forbidden');
          break;
        case 404:
          // Handle not found
          console.error('Not Found');
          break;
        case 500:
          // Handle server error
          console.error('Server Error');
          break;
        default:
          console.error('Unknown Error');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No Response:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request Setup Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;

