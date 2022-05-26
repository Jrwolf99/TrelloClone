import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

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
  return (
    <StyledApp>
      <Navbar />
      <Outlet />
    </StyledApp>
  );
}
