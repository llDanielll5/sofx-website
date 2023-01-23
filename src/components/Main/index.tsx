//@ts-nocheck
import React, { useEffect, useCallback, useState } from "react";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import AboutUs from "../AboutUs";
import Projects from "../Projects";
import { ScrollUpIcon, StyledMain } from "./styles";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  HomeContainer,
  HomeData,
  HomeDescription,
  HomeInnerContainer,
  HomeTitle,
} from "../Home/styles";
import Header from "../Header";
import Contact from "../Contact";
import Footer from "../Footer";
import { COLORS } from "../../constants/cssVariables";
import { WhatsappIcon } from "../Contact/styles";

export type PagesType = "home" | "aboutus" | "projects" | "contacts";

const Main = () => {
  const currentScroll = useGetScrollPosition();
  const pages = ["home", "aboutus", "projects", "contacts"];
  const [activePage, setActivePage] = useState<PagesType>("home");
  const sectionColors = ["rgba(0,0,0,0.6)", "white", "white", "white"];

  const scrollUp = useCallback(() => {
    const scroll_up = document.getElementById("scroll_up");
    if (activePage === "home") {
      scroll_up?.classList.add("show-scroll");
    } else scroll_up?.classList.remove("show-scroll");
  }, [activePage]);

  useEffect(() => {
    scrollUp();
  }, [currentScroll, scrollUp]);

  return (
    <StyledMain>
      <Header activePage={activePage} />
      <ReactFullpage
        anchors={pages}
        navigation={false}
        navigationTooltips={pages}
        sectionsColor={sectionColors}
        scrollingSpeed={1000}
        scrollHorizontally={false}
        onLeave={(origin, destination, direction) => {
          if (destination.anchor === "home") {
            setActivePage("home");
          } else if (destination.anchor === "aboutus") {
            setActivePage("aboutus");
          } else if (destination.anchor === "projects") {
            setActivePage("projects");
          } else if (destination.anchor === "contacts") {
            setActivePage("contacts");
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id="home" className="section">
                <HomeContainer>
                  <HomeData />
                  <HomeInnerContainer />
                  <HomeTitle>Soluções Digitais DGS</HomeTitle>
                  <HomeDescription size="h2Font">
                    Nunca foi tão prático ter em suas mãos a solução digital que
                    você precisava. <br />
                    Alavanque vendas e organize sua empresa com nossos Softwares
                    de ponta.
                  </HomeDescription>
                </HomeContainer>
              </div>

              <div className="section" id="aboutus">
                <AboutUs />
              </div>
              <div className="section" id="projects">
                <Projects />
              </div>
              <div className="section" id="contacts">
                <Contact />
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <a href="#" className="scrollup" id="scroll_up">
        <ScrollUpIcon color={"#25D366"} />
      </a>
    </StyledMain>
  );
};

export default Main;
