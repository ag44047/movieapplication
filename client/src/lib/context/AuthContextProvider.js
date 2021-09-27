import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import * as API from "../../api/user/user";

export function AuthContextProvider(props) {
  const [state, setState] = useState({
    user: undefined,
    error: undefined,
    isLoading: false,
  });

  useEffect(() => {
    reloadAuthentication();
  }, []);

  const reloadAuthentication = () => {
    try {
      const user = localStorage.getItem("user");

      if (!user) return;

      const userDetails = "";
      console.log("reloaded");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      setState({ ...state, isLoading: true });
      const res = await API.login(email, password);

      const data = await res.data;

      console.log("data", data);
      localStorage.setItem("user", data);

      setState({ ...state, user: { ...data }, error: false });
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setState({ ...state, isLoading: false });
      console.log("stateee", state);
    }
  };

  const values = {
    user: state.user,
    error: state.error,
    isLoading: state.isLoading,
    reloadAuthentication,
    login,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}
