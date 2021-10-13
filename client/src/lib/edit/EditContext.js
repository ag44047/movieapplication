import { useContext, createContext } from "react";

const initialState = {
  user: undefined,
  error: undefined,
  isLoading: false,
  movies: undefined,
  movie: undefined,
  list: undefined,
  handleEditMovie: () => {},
  handleEditMovies: () => {},
  handleEditUser: () => {},
  handleEditList: () => {},
};

export const EditContext = createContext(initialState);

export const useEditContext = () => useContext(EditContext);
