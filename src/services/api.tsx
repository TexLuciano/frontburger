import axios, { InternalAxiosRequestConfig } from 'axios';
import { UserType } from '../types/types';

const baseUrl = import.meta.env.VITE_REACT_API_URL;

const apiCodeBurger = axios.create({
  baseURL: baseUrl,
});

apiCodeBurger.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    const userData: string | null = await localStorage.getItem(
      'chicoburguer:userData',
    );
    if (userData) {
      const token: UserType = JSON.parse(userData).token;
      config.headers.Authorization = `Bearer ${token}`;

    }

    return config;
  },
);

export default apiCodeBurger;
