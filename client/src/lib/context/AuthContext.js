import { useContext, createContext } from "react";

const initialState = {
  user: undefined,
  error: undefined,
  isLoading: false,
  reloadAuthentication: () => {},
  login: () => {},
};

export const AuthContext = createContext(initialState);

export const useAuthContext = () => useContext(AuthContext);
