import axios from 'axios';
import { parseCookies } from 'nookies';

export const getApi = (ctx?: any) => {
  const { labs_token: token } = parseCookies(ctx);

  if (token) {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    return api;
  } else {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return api;
  }
};
