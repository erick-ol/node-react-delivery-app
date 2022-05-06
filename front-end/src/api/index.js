export const API_URL = 'http://localhost:3001';

export const LOGIN_POST = (body) => ({
  url: `${API_URL}/login`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  },
});

export const REGISTER_POST = (body) => ({
  url: `${API_URL}/register`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  },
});

/**
 * import axios from 'axios';

const API_URL = 'http://localhost:3001';

  export const LOGIN_POST = (email, password) => axios
  .post(`${API_URL}/login`,
    { email, password },
    { headers: { 'Content-Type': 'application/json' },
    });

  export const REGISTER_POST = (user) => axios
  .post(`${API_URL}/register`, user);

  export const GET_PRODUCTS = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const headers = {
      authorization: token,
    };
    try {
      const products = await axios.get(`${API_URL}/product`, { headers });
      return products;
    } catch (error) {
      return false;
    }
  };
 */
