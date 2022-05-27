import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

const StyledApp = styled.div`
  height: 100vh;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
`;

export default function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    authIsReady && (
      <StyledApp>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="login" />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="*" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </StyledApp>
    )
  );
}
