import React from "react";
import { Box } from "@mui/material";
import Header from "./body/header";
import Banner from "./body/banner";
import AboutUs from "./body/about-us";
import Services from "./body/services";
import Works from "./body/works";
import Contact from "./body/contact";

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Works />
      <Contact />
    </Box>
  );
};

export default LandingPage;
