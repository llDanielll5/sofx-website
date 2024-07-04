import React from "react";
import { Box, styled } from "@mui/material";
import BannerWhatsBot from "../../components/whatsbot/gold/banner";
import AdvantagesWhatsBot from "../../components/whatsbot/gold/advantages";
import JournalsWhatsBot from "../../components/whatsbot/gold/journals";
import ReceivesWhatsBot from "../../components/whatsbot/gold/receives";
import FooterWhatsBot from "../../components/whatsbot/gold/footer";
import RatingsWhatsBot from "../../components/whatsbot/gold/ratings";
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
