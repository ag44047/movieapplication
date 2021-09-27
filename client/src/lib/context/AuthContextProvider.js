import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as API from "../../api/user/user";
import { useHistory } from "react-router";

export function AuthContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reloadAuthentication();
  }, []);

  const reloadAuthentication = async () => {
    try {
      setIsLoading(true);
      const user = localStorage.getItem("user");

      if (!user) return;

      const userObj = JSON.parse(user);

      const userDetails = await API.getUserById(userObj.id);
      const userData = await userDetails.data;
      setUser({ ...userData });
    } catch (error) {
      setError(
        "Something wrong happened in realoadauthentication method",
        error
      );
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
      throw new Error(
        "Something wrong happened while logging in! ",
        err.message
      );
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
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}
