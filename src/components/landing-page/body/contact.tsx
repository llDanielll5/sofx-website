import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsappPhone } from "../../../constants/phone";

const Contact = () => {
  const msg = `Olá!! Gostaria de realizar um orçamento com a SOFX, e saber mais a respeito dos seus serviços!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");

  return (
    <Container>
      <Typography variant="h5">Entre em Contato</Typography>
      <Typography variant="body1">
        Entre em contato e diga sobre sua ideia e faça seu orçamento!
      </Typography>

      <Box
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        rowGap={"2rem"}
      >
        <StyledImage src="/images/contact.png" />
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={openWhatsapp}
        >
          Entrar em Contato
        </Button>
      </Box>

      <Footer>
        <LogoImage src="/images/logo.jpg" />
      </Footer>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const StyledImage = styled("img")`
  max-width: 50vw;
  min-width: 30vw;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Footer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const LogoImage = styled("img")`
  max-width: 200px;
  min-width: 80px;
`;

export default Contact;
