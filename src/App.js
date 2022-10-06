import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/authentication/useAuthContext";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

const StyledApp = styled.div`
  height: 100vh;
  overflow: hidden;
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
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="signup"
            element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route
            path="*"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
      </StyledApp>
    )
  );
}
