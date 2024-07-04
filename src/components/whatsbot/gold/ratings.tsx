import React from "react";
import { Box, Typography, styled } from "@mui/material";
import AccordionComponent from "./accordion";

const titleAccordionStyle = {
  color: "#c89116",
  fontFamily: "Montserrat",
  fontWeight: 600,
  ":hover": {
    color: "#f6dc0c",
  },
};
const detailsAccordionStyle = {
  color: "white",
  fontFamily: "Montserrat",
  fontWeight: 600,
};

const faq = [
  {
    title: "Como receberei meu produto?",
    details:
      "Após o pagamento, você receberá seu produto em nossa plataforma imediatamente.",
  },
  {
    title: "Quais as formas de pagamento?",
    details:
      "Você pode pagar em até 10x no cartão, ou no Pix, Boleto, Débito e Mercado Pago à vista.",
  },
  {
    title: "Quando começarei a ganhar dinheiro?",
    details:
      "Em geral se você seguir as dicas que lhe passarei em live, você começará a faturar em 1 semana, mas exigirá também um esforço de sua parte.",
  },
  {
    title: "É certeza de que ganharei dinheiro com o WhatsBot Gold?",
    details:
      "O WhatsBot Gold é um produto pré pronto. O ganho vai depender também de estratégias suas de venda que estarei lhe ajudando. Mas tudo exigirá esforço e dedicação também.",
  },
];

const RatingsWhatsBot = () => {
  return (
    <Container>
      {/* <Title
        variant="h4"
        className="text-effect-2"
        textAlign={"center"}
        my={2}
        fontFamily={"Montserrat"}
      >
        O que nossos membros falam
      </Title> */}

      <Typography
        variant="h4"
        fontFamily={"Montserrat"}
        textAlign={"center"}
        color="white"
        my={2}
      >
        Perguntas Frequentes
      </Typography>

      <AccordionContainer>
        {faq.map((v, i) => (
          <AccordionComponent
            key={i}
            title={v.title}
            details={v.details}
            style={{ backgroundColor: "rgb(60,60,60)", width: "70%" }}
            titleStyle={titleAccordionStyle}
            detailsStyle={detailsAccordionStyle}
          />
        ))}
      </AccordionContainer>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: rgb(50, 50, 50);
  padding: 1.5rem;
`;
const Title = styled(Typography)``;

const AccordionContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export default RatingsWhatsBot;
