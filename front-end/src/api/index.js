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

export const PRODUCTS_GET = (token) => ({
  url: `${API_URL}/customer/products`,
  options: {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  },
});
/** requisçoes do backend */
export const USERS_GET = () => {

};

export const SALES_POST = () => {

};
