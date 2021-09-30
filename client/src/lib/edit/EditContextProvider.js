import React, { useState, useEffect } from "react";
import { EditContext } from "./EditContext";

export function EditContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [movies, setMovies] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditUser = (user) => {
    setUser({ ...user });
  };
  const handleEditMovie = (movie) => {
    setMovies({ ...movie });
  };

  const values = {
    user: user,
    error: error,
    isLoading: isLoading,
    movies: movies,
    handleEditUser,
    handleEditMovie,
  };

  return (
    <EditContext.Provider value={values}>{props.children}</EditContext.Provider>
  );
}
