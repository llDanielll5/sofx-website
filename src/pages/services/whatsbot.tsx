import React from "react";
import { Box, styled } from "@mui/material";
import BannerWhatsBot from "../../components/whatsapp-bot/banner";
import AdvantagesWhatsBot from "../../components/whatsapp-bot/advantages";
import JournalsWhatsBot from "../../components/whatsapp-bot/journals";
import ReceivesWhatsBot from "../../components/whatsapp-bot/receives";
import FooterWhatsBot from "../../components/whatsapp-bot/footer";
import RatingsWhatsBot from "../../components/whatsapp-bot/ratings";
import Head from "next/head";

const WhatsBot = () => {
  return (
    <Container>
      <Head>
        <title>WhatsBot Gold | Saia do CLT e seja seu Chefe!</title>
        <meta
          name="description"
          content="Saia do CLT e ganhe mais com essa solução!"
        />
      </Head>
      <BannerWhatsBot />
      <AdvantagesWhatsBot />
      <JournalsWhatsBot />
      <ReceivesWhatsBot />
      <RatingsWhatsBot />
      <FooterWhatsBot />
    </Container>
  );
};

const Container = styled(Box)`
  background-attachment: fixed;
  background-image: url(/images/whatsbot/fundo.jpeg);
`;

export default WhatsBot;
