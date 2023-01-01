import React from "react";
import { MdLocationOn } from "react-icons/md";
import Button from "../Button";
import {
  AboutSection,
  BannerImage,
  HomeContainer,
  HomeData,
  HomeDescription,
  HomeImages,
  HomeImg,
  HomeOrbe,
  HomeSearch,
  HomeSearchInput,
  HomeSection,
  HomeTitle,
  HomeValue,
  HomeValueNumber,
  Section,
  StyledMain,
} from "./styles";
import BannerImg from "../../../public/images/banner.jpg";

const Main = () => {
  const test = ["", "", ""];

  const ComponentValue = () => (
    <div>
      <h1>
        9k <span>+</span>
      </h1>
      <span>
        Premium <br /> Product
      </span>
    </div>
  );
  return (
    <StyledMain>
      <HomeSection id="home">
        <HomeContainer>
          <HomeData>
            <HomeTitle>
              Torne real seus sonhos! <br /> Tecnologias de ponta! <br />{" "}
              Automatize sua empresa!
            </HomeTitle>
            <HomeDescription>
              Torne seu sonho em realidade com aplicações para todas plataformas
              que desejar! Suas ideias tornam-se reais na DGS
            </HomeDescription>

            <HomeSearch action="">
              <MdLocationOn />
              <HomeSearchInput
                type={"search"}
                placeholder={"Buscar por localização"}
              />
              <Button>Buscar</Button>
            </HomeSearch>

            <HomeValue>
              {test?.map((item, index) => (
                <ComponentValue key={index} />
              ))}
            </HomeValue>
          </HomeData>

          <HomeImages>
            <HomeOrbe></HomeOrbe>

            <HomeImg>
              <BannerImage src={BannerImg} alt="" objectFit="contain" />
            </HomeImg>
          </HomeImages>
        </HomeContainer>
      </HomeSection>
      <AboutSection></AboutSection>
      <Section></Section>
    </StyledMain>
  );
};

export default Main;
