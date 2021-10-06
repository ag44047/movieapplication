import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./lib/context/AuthContextProvider";
import { EditContextProvider } from "./lib/edit/EditContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EditContextProvider>
        <App />
      </EditContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
