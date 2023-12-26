import axios from "axios";

const API_URL = "http://127.0.0.1:8002/api/auth";

const signup = async (email, password) => {
  const response = await axios.post(API_URL + "/register", {
    email,
    password,
  });
  if (response.data.accessToken) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "/login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
