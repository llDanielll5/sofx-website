"use client";

import { Box, styled } from "@mui/material";
import Head from "next/head";
import BannerWhatsBot from "@/src/components/whatsbot/gold/banner";
import AdvantagesWhatsBot from "@/src/components/whatsbot/gold/advantages";
import JournalsWhatsBot from "@/src/components/whatsbot/gold/journals";
import ReceivesWhatsBot from "@/src/components/whatsbot/gold/receives";
import RatingsWhatsBot from "@/src/components/whatsbot/gold/ratings";
import FooterWhatsBot from "@/src/components/whatsbot/gold/footer";

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
