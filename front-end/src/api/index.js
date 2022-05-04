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
