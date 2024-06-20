import React from "react";
import { Box, styled } from "@mui/material";
import BannerWhatsBot from "../../components/whatsapp-bot/banner";
import AdvantagesWhatsBot from "../../components/whatsapp-bot/advantages";
import JournalsWhatsBot from "../../components/whatsapp-bot/journals";
import ReceivesWhatsBot from "../../components/whatsapp-bot/receives";
import FooterWhatsBot from "../../components/whatsapp-bot/footer";

const WhatsBot = () => {
  return (
    <Container>
      <BannerWhatsBot />
      <AdvantagesWhatsBot />
      <JournalsWhatsBot />
      <ReceivesWhatsBot />
      <FooterWhatsBot />
    </Container>
  );
};

const Container = styled(Box)``;

export default WhatsBot;
