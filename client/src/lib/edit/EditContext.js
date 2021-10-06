import { useContext, createContext } from "react";

const initialState = {
  user: undefined,
  error: undefined,
  isLoading: false,
  movies: undefined,
  handleEditMovie: () => {},
  handleEditUser: () => {},
};

export const EditContext = createContext(initialState);

export const useEditContext = () => useContext(EditContext);
