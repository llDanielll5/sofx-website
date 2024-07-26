import React, { useCallback, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import Header from "./body/header";
import Banner from "./body/banner";
import AboutUs from "./body/about-us";
import Services from "./body/services";
import Works from "./body/works";
import Contact from "./body/contact";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import { useRouter } from "next/router";
import Partners from "./body/partners";
import OurProducts from "./body/our-products";

const LandingPage = () => {
  const currentScroll = useGetScrollPosition();
  const router = useRouter();

  // const scrollUp = useCallback(() => {
  //   const scroll_up = document.getElementById("scroll_up");
  //   if (currentScroll > 50) {
  //     scroll_up?.classList.add("show-scroll");
  //   } else scroll_up?.classList.remove("show-scroll");
  // }, [currentScroll]);

  // useEffect(() => {
  //   scrollUp();
  // }, [scrollUp]);

  return (
    <Container>
      <Header />
      <Banner />
      <AboutUs />
      <OurProducts />
      <Partners />
      <Services />
      <Works />
      <Contact />
    </Container>
  );
};

const Container = styled(Box)`
  /* background-image: url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blue-blur-background-anna-omelchenko.jpg); */
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;
`;

export default LandingPage;
