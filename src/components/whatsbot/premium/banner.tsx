/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import useWindowSize from "../../../hooks/useWindowSize";
import { whatsappPhone } from "../../../constants/phone";
import { COLORS } from "../../../constants/cssVariables";

const BannerWhatsPremium = () => {
  const { width } = useWindowSize();
  const msg = `Gostaria de saber mais sobre o WhatsBot Gold e como posso faturar com ele.`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg,
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");

  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        my={2}
      >
        <Logo src="/images/whatsbot/premium/logo.png" alt="" />
      </Stack>
      <Box
        width={"100%"}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        rowGap={"1rem"}
      >
        <CallText variant="h5" color="white" fontFamily={"Montserrat"}>
          Aumente seu faturamento até 70% mais com nosso robozinho para
          WhatsApp. <br />
          Tenha o controle de sua empresa na palma de sua mão <br />
          Não perca mais clientes por falta de atendimento!
        </CallText>

        <Typography
          variant="body1"
          color="white"
          fontWeight={"300"}
          fontFamily={"Montserrat"}
        >
          Conheça o WhatsBot Premium e mude totalmente sua vida.
        </Typography>

        {/* <VSL
          allowFullScreen
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/UE-PIzk3kas?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&widgetid=1"
        /> */}

        <StyledButtonWhatsBotPremium onClick={openWhatsapp}>
          Adquirir o meu Robô!
        </StyledButtonWhatsBotPremium>

        <CallSection>
          <CallText variant="h4" fontFamily={"Montserrat"} color="white">
            <span>
              Saiba como o WhatsBot Premium pode mudar seus atendimentos
            </span>
          </CallText>
          <CallTextContainer>
            {/* {width! < 900 && <LogoImg src="/images/white-logo.png" />} */}
          </CallTextContainer>
          <PhoneImg src="/images/whatsbot/premium/phone-message.png" alt="" />
        </CallSection>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  background-image: url(/images/whatsbot/premium/banner.png);
  background-position: top center;
  background-size: cover;
  background-color: rgb(30, 30, 30);
  padding: 10rem 1.5rem 1.5rem 1.5rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding-top: 12rem;
  }
`;
const Logo = styled("img")`
  max-width: 500px;

  @media screen and (max-width: 760px) {
    max-width: 300px;
  }
`;
const CallText = styled(Typography)`
  max-width: 80%;
  line-height: 2.5rem;
  b {
    background: linear-gradient(90deg, #036c6f 17.85%, #89c6e9 82.56%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    background-color: #036c6f;
    padding: 0.3rem;
  }
`;
const VSL = styled("iframe")`
  width: 70vw;
  height: 450px;
  border-radius: 0.5rem;
`;

export const StyledButtonWhatsBotPremium = styled(Button)`
  font-family: "Montserrat";
  text-transform: uppercase;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  color: white;
  z-index: 0;
  background: linear-gradient(90deg, #04484b, #3fb2f5, #04484b, #3fb2f5);
  background-size: 400% 200%;
  transition: opacity 0.3s linear;
  transition: background 1.6s all;
  animation: 3.4s infinite brilho;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 760px) {
    font-size: 1.2rem;
    padding: 1rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

// Call Section
const CallSection = styled(Card)`
  background-image: url(/images/whatsbot/fundo.jpeg);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
  }
`;
const CallTextContainer = styled(Box)`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1%;
  row-gap: 1rem;
`;
const PhoneImg = styled("img")`
  max-height: 500px;
`;

export default BannerWhatsPremium;
