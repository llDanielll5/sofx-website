import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { whatsappPhone } from "../../../constants/phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import { useGetScrollPosition } from "../../../hooks/useGetScrollPosition";

const Banner = () => {
  const scroll = useGetScrollPosition();
  const msg = `Olá!! Preciso de um serviço digital e gostaria de saber mais sobre a SOFX!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");

  return (
    <Container>
      <TextContainer>
        <motion.div
          animate={{ opacity: 1 }}
          style={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <BigTitle variant="h4">
            Transforme sua visão em uma Solução Digital!
          </BigTitle>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          style={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Subtitle variant="subtitle1">
            Aqui na SOFX, acreditamos em você, e trabalhamos para transformar
            seu sonho e sua ideia em realidade, utilizando tecnologias de ultima
            geração para criação de aplicações de ponta. Venha nos conhecer
            melhor!
          </Subtitle>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          style={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <StyledButton
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={openWhatsapp}
          >
            Fale Conosco
          </StyledButton>
        </motion.div>
      </TextContainer>

      <ImgContainer>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <StyledImg src={"/images/background.png"} />
        </motion.div>
      </ImgContainer>
    </Container>
  );
};

const Container = styled(Box)`
  /* background-image: url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?t=st=1722029779~exp=1722033379~hmac=df30a2a2167b693b93bb57f9d529e264574065beea02f7f797a17583beec822e&w=996); */
  background-position: center top;
  background-attachment: local;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 3rem;
  column-gap: 6rem;
  margin-top: 93px;
`;
const TextContainer = styled(Box)`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
const ImgContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const StyledImg = styled("img")`
  min-height: 600px;
  max-height: 600px;

  @media screen and (max-width: 760px) {
    min-height: 400px;
    max-height: 450px;
  }
`;
const StyledButton = styled(Button)`
  width: max-content;
  padding: 0.4rem 3rem;
`;

const BigTitle = styled(Typography)`
  font-size: 3.5rem;

  @media screen and (max-width: 760px) {
    font-size: 2.7rem;
  }
`;
const Subtitle = styled(Typography)`
  font-size: 1rem;
  @media screen and (max-width: 760px) {
    font-size: 0.7rem;
  }
`;

export default Banner;
