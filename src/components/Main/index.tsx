import React from "react";
import AboutUs from "../AboutUs";
import Home from "../Home";
import { StyledMain } from "./styles";

const Main = () => {
  return (
    <StyledMain>
      <Home />
      <AboutUs />
    </StyledMain>
  );
};

export default Main;
