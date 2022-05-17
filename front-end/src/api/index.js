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

export const REGISTER_POST = (body, token) => ({
  url: `${API_URL}/register`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': applicationJson,
      Authorization: token,
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

export const SELLER_ORDERS_GET = (token, id) => ({
  url: `${API_URL}/seller/orders/${id}`,
  options: {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  },
});

export const SELLER_PREPARE_PUT = (token, id) => ({
  url: `${API_URL}/seller/orders/${id}/preparing`,
  options: {
    method: 'PUT',
    headers: {
      Authorization: token,
    },
  },
});

export const SELLER_TRANSIT_PUT = (token, id) => ({
  url: `${API_URL}/seller/orders/${id}/transit`,
  options: {
    method: 'PUT',
    headers: {
      Authorization: token,
    },
  },
});

export const CUSTOMER_DELIVERED_PUT = (token, id) => ({
  url: `${API_URL}/seller/orders/${id}/delivered`,
  options: {
    method: 'PUT',
    headers: {
      Authorization: token,
    },
  },
});
