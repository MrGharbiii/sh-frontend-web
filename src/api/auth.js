import axios from 'axios';

const API_URL = 'http://localhost:8081/admin';

const signup = async (username, password) => {
  return axios.post(`${API_URL}/signup`, {
    username,
    password,
    roles: ['ADMIN'],
  });
};

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });

  if (response.data.jwt) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const getUsers = async () => {
  const user = getCurrentUser();
  return axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
  getUsers,
};
