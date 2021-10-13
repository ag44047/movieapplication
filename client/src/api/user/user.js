import axios from "axios";
import * as API from "../api";

export const login = async (email, password) =>
  API.requests.post("/Account/login", { email, password });

export const register = async (user) =>
  API.requests.post("/Account/register", user);

export const getUserById = async (id) =>
  await API.requests.get(`/Account/${id}`);

export const getCurrentUser = async () =>
  await API.requests.get(`/Account/currentuser`);

export const getUsers = async () => API.requests.get("/Account");

export const deleteUser = async (id) => API.requests.del(`/Account/${id}`);

export const editUser = async (id, user) =>
  API.requests.put(`/Account/${id}`, user);

export const refreshToken = async (user) =>
  API.requests.post("/Account/refreshToken", {});

////////dddd
// export const verifyEmail = async (token, email)=>
// API.requests.post(`/Account/verifyEmail?token=${token}&email=${email}`,{});

// export const resendEmailConfirm = async (email)=>
// API.requests.get(`/Account/resendEmailConfirmationLink?email=${email}`);
