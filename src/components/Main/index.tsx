//@ts-nocheck
import React, { useEffect, useCallback, useState, useRef } from "react";
import { ScrollUpIcon, StyledMain } from "./styles";
import { useGetScrollPosition } from "../../hooks/useGetScrollPosition";
import {
  ArrowDown,
  HomeContainer,
  HomeData,
  HomeDescription,
  HomeInnerContainer,
  HomeTitle,
} from "../Home/styles";
import Header from "../Header";
import AboutUs from "../AboutUs";
import Contact from "../Contact";
import Footer from "../Footer";

export type PagesType = "home" | "aboutus" | "projects" | "contacts";

const Main = () => {
  const currentScroll = useGetScrollPosition();
  var [activePage, setActivePage] = useState<PagesType>("home");
  const msg = `Olá!! 
  Gostaria de receber um orçamento para a criação de uma aplicação para minha empresa!
  Como funciona?`;
  const zapHref = `https://api.whatsapp.com/send?phone=5561984455304&text=${encodeURIComponent(
    msg
  )}`;

  const scrollUp = useCallback(() => {
    const scroll_up = document.getElementById("scroll_up");
    if (currentScroll > 50) {
      scroll_up?.classList.add("show-scroll");
    } else scroll_up?.classList.remove("show-scroll");
  }, [currentScroll]);

  useEffect(() => {
    scrollUp();
  }, [scrollUp]);

  return (
    <StyledMain>
      <Header
        activePage={activePage}
        onChangeActivePage={(e) => setActivePage(e)}
      />
      <div id="home" className="section">
        <HomeContainer>
          <HomeData />
          <HomeInnerContainer />
          <HomeTitle>Soluções Inteligentes para sua empresa!</HomeTitle>
          <HomeDescription size="h2Font">
            Nunca foi tão prático ter em suas mãos a solução digital que você
            precisava. <br />
            Alavanque vendas e organize sua empresa com nossos Softwares de
            ponta.
          </HomeDescription>
          <a href={"#aboutus"}>
            <ArrowDown />
          </a>
        </HomeContainer>
      </div>

      <AboutUs />
      <div id="contacts">
        <Contact />
        <Footer />
      </div>
      <a
        href={zapHref}
        className="scrollup"
        id="scroll_up"
        target={"_blank"}
        rel="noreferrer"
      >
        <ScrollUpIcon color={"#25D366"} />
      </a>
    </StyledMain>
  );
};

export default Main;
