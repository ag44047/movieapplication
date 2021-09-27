import axios from "axios";
import * as API from "../api";

export const login = async (email, password) =>
  API.requests.post("/Account/login", { email, password });

export const getUserById = async (id) => API.requests.get(`/Account/${id}`);

export const getUsers = async () => API.requests.get("/Account");
