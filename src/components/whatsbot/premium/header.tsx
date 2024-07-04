import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, styled, Typography } from "@mui/material";
import { StyledButtonWhatsBotPremium } from "./banner";
import { whatsappPhone } from "../../../constants/phone";
import { COLORS } from "../../../constants/cssVariables";

const HeaderWhatsBotPremium = () => {
  const { width } = useWindowSize();
  const msg = `Gostaria de realizar um orçamento para adquirir o Robô Whatsapp para minha empresa/negócio!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");
  return (
    <HeaderSection>
      {width! > 900 && <LogoImg src="/images/white-logo.png" />}
      <Typography
        variant="h4"
        color={COLORS.primary}
        className="text-effect-3"
        textAlign={"center"}
      >
        Robô em Super Promoção!
      </Typography>
      <StyledButtonWhatsBotPremium
        onClick={openWhatsapp}
        variant="contained"
        endIcon={<WhatsAppIcon sx={{ fontSize: "50px" }} />}
      >
        Quero garantir minha Promoção!
      </StyledButtonWhatsBotPremium>
    </HeaderSection>
  );
};

const HeaderSection = styled(Box)`
  padding: 1.5rem;
  position: fixed;
  width: 100vw;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to left, #241e48 10%, black 100%);
  border-bottom: 2px solid #f4f4f4;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const LogoImg = styled("img")`
  width: 100%;
  max-width: 200px;
  min-width: 120px;
`;

export default HeaderWhatsBotPremium;
