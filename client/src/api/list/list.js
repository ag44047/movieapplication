import axios from "axios";
import * as API from "../api";

export const editList = async (id, list) =>
  API.requests.put(`/Listts/${id}`, list);

////////dddd
// export const verifyEmail = async (token, email)=>
// API.requests.post(`/Account/verifyEmail?token=${token}&email=${email}`,{});

// export const resendEmailConfirm = async (email)=>
// API.requests.get(`/Account/resendEmailConfirmationLink?email=${email}`);
