import React, { useEffect, useCallback } from "react";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import AboutUs from "../AboutUs";
import Contact from "../Contact";
import Footer from "../Footer";
import Home from "../Home";
import { ScrollUpIcon, StyledMain } from "./styles";

const Main = () => {
  const currentScroll = useGetScrollPosition();
  const scrollUp = useCallback(() => {
    const scroll_up = document.getElementById("scroll_up");
    if (scrollY >= 350) scroll_up?.classList.add("show-scroll");
    else scroll_up?.classList.remove("show-scroll");
  }, []);

  useEffect(() => {
    scrollUp();
  }, [currentScroll, scrollUp]);

  return (
    <StyledMain>
      <Home />
      <AboutUs />
      <Contact />
      <Footer />
      <a href="#" className="scrollup" id="scroll_up">
        <ScrollUpIcon />
      </a>
    </StyledMain>
  );
};

export default Main;
