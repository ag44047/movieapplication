import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as API from "../../api/user/user";
import { useHistory } from "react-router";

export function AuthContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    reloadAuthentication();
  }, []);

  const reloadAuthentication = async () => {
    try {
      setIsLoading(true);
      const loggedUser = localStorage.getItem("user");

      if (!loggedUser) return;

      const userObj = JSON.parse(loggedUser);
      console.log("userjjjobj", userObj.id);

      // const userDetails = await API.getUserById(userObj.id);
      // const userDetails = await API.getUserById(
      //   "62c6671c-3520-450a-90f0-de241f01522e"
      // );
      // const userDetails = "";

      const userDetails = await API.getCurrentUser();

      console.log("user details", userDetails);
      const userData = await userDetails.data;
      setUser({ ...userData });
      console.log("userdata", userData);

      console.log(userDetails.status);
      if (userDetails.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error.toString());
    } finally {
      setIsLoading(false);
    }
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
