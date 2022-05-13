export const API_URL = 'http://localhost:3001';

const applicationJson = 'application/json';

export const LOGIN_POST = (body) => ({
  url: `${API_URL}/login`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': applicationJson,
    },
    body: JSON.stringify(body),
  },
});

export const REGISTER_POST = (body) => ({
  url: `${API_URL}/register`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': applicationJson,
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

export const SALES_POST = (token, body) => ({
  url: `${API_URL}/customer/orders`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': applicationJson,
      Authorization: token,
    },
    body: JSON.stringify(body),
  },
});
