import { useContext, createContext } from "react";

const initialState = {
  user: undefined,
  error: undefined,
  isLoading: false,
};

export const store = createContext(initialState);

export const useAuthContext = () => useContext(store);
