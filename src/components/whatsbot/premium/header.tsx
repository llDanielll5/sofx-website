import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, styled, Typography } from "@mui/material";
import { StyledButtonWhatsBotPremium } from "./banner";
import { whatsappPhone } from "../../../constants/phone";

const HeaderWhatsBotPremium = () => {
  const { width } = useWindowSize();
  const msg = `Gostaria de realizar um orçamento para adquirir o Robô Whatsapp para minha empresa/negócio!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg,
  )}`;

  const openWhatsapp = () =>
    window.open(zapHref, "_blank", "noopener,noreferrer");
  return (
    <HeaderSection>
      {width! > 900 && (
        <LogoImg
          src="/images/white-logo.png"
          onClick={() => window.open(`/`)}
        />
      )}

      <StyledButtonWhatsBotPremium
        onClick={openWhatsapp}
        variant="contained"
        endIcon={<WhatsAppIcon sx={{ fontSize: "50px" }} />}
      >
        Quero automatizar minha empresa!
      </StyledButtonWhatsBotPremium>
    </HeaderSection>
  );
};

const HeaderSection = styled(Box)`
  padding: 1.5rem;
  position: fixed;
  width: 100vw;
  z-index: 999999;
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
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export default HeaderWhatsBotPremium;
