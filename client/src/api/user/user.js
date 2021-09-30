import axios from "axios";
import * as API from "../api";

export const login = async (email, password) =>
  API.requests.post("/Account/login", { email, password });

export const register = async (user) =>
  API.requests.post("/Account/register", user);

export const getUserById = async (id) => API.requests.get(`/Account/${id}`);

export const getUsers = async () => API.requests.get("/Account");

export const deleteUser = async (id) => API.requests.del(`/Account/${id}`);

export const editUser = async (id, user) =>
  API.requests.put(`/Account/${id}`, user);
