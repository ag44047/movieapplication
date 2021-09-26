import React, { useState, useEffect } from "react";

export function AuthContextProvider() {
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

      if(!user) return;
    
      const userDetails = '';

    } catch (error) {
      console.log(error);
    }
  };
}
