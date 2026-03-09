import React from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { whatsappPhone } from "../../constants/phone";

// import { Container } from './styles';

const WhatsBotNewClient = () => {
  const msg = `Olá, realizei o pagamento do WhatsBot Gold e gostaria de obter meu acesso instantâneo ao meu produto!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");
  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        my={3}
      >
        <Logo src="/images/whatsbot/logo.png" alt="" />
      </Stack>

      <Box
        width={"100%"}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        rowGap={"3rem"}
      >
        <CallText variant="h4" color="white" fontFamily={"Montserrat"}>
          Você ainda não realizou o <b>pagamento.</b>
          <br />
          Faça o pagamento do seu produto hoje e comece a <b>faturar</b> em
          poucos dias
        </CallText>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  background-image: url(/images/whatsbot-banner.png);
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 30, 30);
  padding: 1.5rem;
  text-align: center;
  height: 100vh;
`;
const Logo = styled("img")`
  max-width: 500px;

  @media screen and (max-width: 760px) {
    max-width: 300px;
  }
`;
const CallText = styled(Typography)`
  max-width: 80%;
  b {
    background: linear-gradient(90deg, #ef7916 17.85%, #f4ba23 82.56%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledButton = styled(Button)`
  font-family: "Montserrat";
  text-transform: uppercase;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;
  z-index: 0;
  background-image: linear-gradient(90deg, #f4ba23, #ca7f0f, #f4ba23, #ca7f0f);
  background-size: 400% 200%;
  transition: opacity 0.3s linear;
  transition: background 1.6s all;
  animation: 3.4s infinite brilho;

  :hover {
    opacity: 0.8;
  }
`;

export default WhatsBotNewClient;
