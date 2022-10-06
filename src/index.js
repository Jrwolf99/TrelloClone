import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./globalstyles/reset.css";
import "./globalstyles/index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authentication/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
