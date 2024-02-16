import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { cardAboutUs } from "../../../utils/data/landing-page";

const AboutUs = () => {
  return (
    <Container id={"about-us"}>
      <Typography variant="h4">Sobre Nós</Typography>

      <CardsContainer>
        {cardAboutUs.map((v, i) => (
          <CardSingle key={i}>
            <ImageCard src={v.img} />
            <TitleCard variant="subtitle1">{v.title}</TitleCard>
          </CardSingle>
        ))}
      </CardsContainer>

      <Typography variant="body2">
        Garantimos a flexibilidade que sua empresa merece, permitindo
        atualizações contínuas, manutenções efetivas e, para sua comodidade,
        incluímos serviço de hospedagem gratuito. Conosco, sua visão ganha vida
        de maneira descomplicada e eficaz.
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 4rem 3rem;
`;

const CardsContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;
  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
  }
`;

const CardSingle = styled(Box)`
  border: 1px solid #5373ff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 250px;
  max-width: 25%;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  @media screen and (max-width: 760px) {
    min-width: 80%;
  }
`;

const ImageCard = styled("img")`
  width: 100%;
  mix-blend-mode: multiply;
  @media screen and (max-width: 760px) {
    scale: 0.8;
  }
`;

const TitleCard = styled(Typography)`
  font-size: 1.2rem;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 760px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.75rem;
  }
`;

export default AboutUs;
