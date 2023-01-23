//@ts-nocheck
import React from "react";
import {
  BannerImage,
  HomeContainer,
  HomeData,
  HomeDescription,
  HomeImages,
  HomeImg,
  HomeOrbe,
  HomeSection,
  HomeTitle,
} from "./styles";
import { COLORS } from "../../constants/cssVariables";

const Home = () => {
  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeTitle
          backColor={COLORS.firstColorLight}
          content="A solução digital que você precisa, está aqui!"
        />
        <HomeDescription>
          Nunca foi tão prático ter em suas mãos a solução digital que você
          precisava. Alavanque vendas e organize sua empresa com nossos
          Softwares de ponta.
        </HomeDescription>

        <HomeImages>
          <HomeOrbe />

          <HomeImg>
            <BannerImage
              src={"/images/backgroundDGS"}
              alt="Banner Image"
              objectFit="contain"
            />
          </HomeImg>
        </HomeImages>
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;
