import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = (() => {
    return axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      params: {
          'apikey': import.meta.env.VITE_API_KEY
      },
      timeout: 10000,
    });
  })();