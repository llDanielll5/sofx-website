import React from "react";
import { Box, styled } from "@mui/material";
import BannerWhatsBot from "../../components/whatsapp-bot/banner";
import AdvantagesWhatsBot from "../../components/whatsapp-bot/advantages";

const WhatsBot = () => {
  return (
    <Container>
      <BannerWhatsBot />
      <AdvantagesWhatsBot />
    </Container>
  );
};

const Container = styled(Box)``;

export default WhatsBot;
