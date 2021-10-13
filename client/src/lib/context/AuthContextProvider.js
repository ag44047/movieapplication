import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as API from "../../api/user/user";

export function AuthContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      await reloadAuthentication();
    })();
  }, []);

  const reloadAuthentication = () => {
    setIsLoading(true);
    const loggedUser = localStorage.getItem("user");
    const userObj = JSON.parse(loggedUser);
    setIsLoading(false);
    if (!loggedUser) return;
    setUser({ ...userObj });
    setIsAuthenticated(true);

    console.error(error.toString());
  };

  const login = async (email, password) => {
    try {
      setIsLoading(isLoading);
      const res = await API.login(email, password);

      const data = await res.data;

      console.log("data", data);
      localStorage.setItem("user", JSON.stringify(data));

      setUser({ ...data });
    } catch (err) {
      console.error(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("user");
    setUser(undefined);
    setError(false);
  };

  const values = {
    user: user,
    error: error,
    isLoading: isLoading,
    reloadAuthentication,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}
