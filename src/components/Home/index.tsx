import React from "react";
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
  HomeSearchIcon,
  HomeSearchInput,
  HomeSection,
  HomeTitle,
  HomeValue,
  SearchButton,
} from "./styles";
import BannerImg from "../../../public/images/banner.jpg";

const Home: React.FC = () => {
  const test = ["", "", ""];

  const ComponentValue = () => (
    <div>
      <h1 id="valueNumber">
        9k <span>+</span>
      </h1>
      <span id="valueDescription">
        Premium <br /> Product
      </span>
    </div>
  );
  return (
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
            <HomeSearchIcon />
            <HomeSearchInput
              type={"search"}
              placeholder={"Buscar por localização"}
            />
            <SearchButton>Buscar</SearchButton>
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
  );
};

export default Home;
