/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import useWindowSize from "../../../hooks/useWindowSize";
import { whatsappPhone } from "../../../constants/phone";

const BannerWhatsBot = () => {
  const { width } = useWindowSize();
  const msg = `Gostaria de saber mais sobre o WhatsBot Gold e como posso faturar com ele.`;
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
        rowGap={"1rem"}
      >
        <CallText variant="h4" color="white" fontFamily={"Montserrat"}>
          Você é <b>Desenvolvedor</b> e quer <b>Sair do CLT?</b>
          <br />
          Quer ganhar bem trabalhando no que <b>Gosta?</b>
        </CallText>

        <Typography
          variant="h5"
          color="white"
          fontWeight={"300"}
          fontFamily={"Montserrat"}
        >
          Assista esse vídeo e entenda como posso te ajudar a mudar de vida!
        </Typography>

        <VSL
          allowFullScreen
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/UE-PIzk3kas?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&widgetid=1"
        />

        <StyledButton onClick={openWhatsapp}>Começar Vender</StyledButton>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  background-image: url(/images/whatsbot-banner.png);
  background-position: top center;
  background-size: cover;
  background-color: rgb(30, 30, 30);
  padding: 1.5rem;
  text-align: center;
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
const VSL = styled("iframe")`
  width: 70vw;
  height: 450px;
  border-radius: 0.5rem;
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

export default BannerWhatsBot;
