import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { whatsappPhone } from "../../../constants/phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Banner = () => {
  const msg = `Olá!! Preciso de um serviço digital e gostaria de saber mais sobre a SOFX!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");

  return (
    <Container>
      <TextContainer>
        <BigTitle variant="h4">
          Transforme sua visão em uma Solução Digital!
        </BigTitle>

        <Subtitle variant="subtitle1">
          Aqui na SOFX, acreditamos em você, e trabalhamos para transformar seu
          sonho e sua ideia em realidade, utilizando tecnologias de ultima
          geração para criação de aplicações de ponta. Venha nos conhecer
          melhor!
        </Subtitle>

        <StyledButton
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={openWhatsapp}
        >
          Saber Mais
        </StyledButton>
      </TextContainer>

      <ImgContainer>
        <StyledImg src={"/images/background.png"} />
      </ImgContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 3rem;
  column-gap: 6rem;
`;
const TextContainer = styled(Box)`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
const ImgContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const StyledImg = styled("img")`
  min-height: 600px;
  max-height: 600px;

  @media screen and (max-width: 760px) {
    min-height: 400px;
    max-height: 450px;
  }
`;
const StyledButton = styled(Button)`
  width: max-content;
  padding: 0.4rem 3rem;
`;

const BigTitle = styled(Typography)`
  font-size: 3.5rem;

  @media screen and (max-width: 760px) {
    font-size: 2.7rem;
  }
`;
const Subtitle = styled(Typography)`
  font-size: 1rem;
  @media screen and (max-width: 760px) {
    font-size: 0.7rem;
  }
`;

export default Banner;
