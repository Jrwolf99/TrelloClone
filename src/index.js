import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./globalstyles/reset.css";
import "./globalstyles/fonts.css";

import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

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
