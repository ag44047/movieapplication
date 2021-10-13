import { useContext, createContext } from "react";

const initialState = {
  user: undefined,
  error: undefined,
  isLoading: false,
  reloadAuthentication: () => {},
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
};

export const AuthContext = createContext(initialState);

export const useAuthContext = () => useContext(AuthContext);
