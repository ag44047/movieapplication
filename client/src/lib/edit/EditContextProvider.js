import React, { useState, useEffect } from "react";
import { EditContext } from "./EditContext";

export function EditContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [movies, setMovies] = useState(undefined);
  const [movie, setMovie] = useState(undefined);
  const [list, setList] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditUser = (user) => {
    setUser({ ...user });
  };
  const handleEditMovies = (movie) => {
    setMovies({ ...movie });
  };
  const handleEditMovie = (movie) => {
    setMovie({ ...movie });
  };
  const handleEditList = (list) => {
    setList({ ...list });
  };

  const values = {
    user: user,
    error: error,
    isLoading: isLoading,
    movies: movies,
    movie: movie,
    handleEditMovies,
    handleEditUser,
    handleEditMovie,
    list,
    handleEditList,
  };

  return (
    <EditContext.Provider value={values}>{props.children}</EditContext.Provider>
  );
}
