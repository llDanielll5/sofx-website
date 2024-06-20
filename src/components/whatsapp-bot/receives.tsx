import { Box, Button, Card, Divider, Typography, styled } from "@mui/material";
import React from "react";

const ReceivesWhatsBot = () => {
  return (
    <Container>
      <Typography variant="h4" fontFamily={"Montserrat"} color="rgb(50,50,50)">
        O que lhe entregaremos com o WhatsBot Gold?
      </Typography>

      <ReceiveContainer elevation={12}>
        <ReceiveSingle>
          <Typography variant="h4" fontFamily={"Montserrat"}>
            Entrega #01
          </Typography>
          <ReceiveImg src="/images/whatsbot/receives/updateds.png" />
          <Typography
            variant="h5"
            sx={{ textDecorationLine: "underline" }}
            fontFamily={"Montserrat"}
          >
            Um pacote com todos nossos modelos de Robôs atualizados.
          </Typography>
          <ValueText>
            De <span>R$499,00</span> por ZERO
          </ValueText>
        </ReceiveSingle>

        <Divider sx={{ my: 4 }} />

        <ReceiveSingle>
          <Typography variant="h4" fontFamily={"Montserrat"}>
            Entrega #02
          </Typography>
          <ReceiveImg src="/images/whatsbot/receives/lives.png" />
          <Typography
            variant="h5"
            sx={{ textDecorationLine: "underline" }}
            fontFamily={"Montserrat"}
          >
            Aulas ao vivo e agendadas para acelerar seu desenvolvimento!
          </Typography>
          <ValueText>
            De <span>R$899,00</span> por ZERO
          </ValueText>
        </ReceiveSingle>

        <Divider sx={{ my: 4 }} />

        <ReceiveSingle>
          <Typography variant="h4" fontFamily={"Montserrat"}>
            Bônus Especial #01
          </Typography>

          <Typography
            variant="h5"
            sx={{ textDecorationLine: "underline" }}
            fontFamily={"Montserrat"}
          >
            Mini Curso para trabalhar com o Banco de Dados do Robô WhatsBot
          </Typography>
          <ValueText>
            De <span>R$799,00</span> por ZERO
          </ValueText>
        </ReceiveSingle>

        <Divider sx={{ my: 4 }} />

        <ReceiveSingle>
          <Typography variant="h4" fontFamily={"Montserrat"}>
            Bônus Especial #02
          </Typography>

          <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"}>
            Acesso ao nosso grupo especial de desenvolvedores do Discord!
          </Typography>
          <ValueText>
            De <span>R$79,00</span> por ZERO
          </ValueText>
        </ReceiveSingle>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" sx={{ textDecorationLine: "underline" }}>
          Para ter acesso a tudo isso, você investiria no total
        </Typography>

        <TotalValue>
          <Typography variant="h3" fontFamily={"Montserrat"} color="white">
            Valor Total:{" "}
            <span style={{ textDecorationLine: "line-through" }}>
              R$2.276,00
            </span>
          </Typography>
        </TotalValue>
      </ReceiveContainer>
      <ValueContainer elevation={12}>
        <Logo src={"/images/whatsbot/logo.png"} />
        <Typography
          variant="h3"
          fontFamily={"Montserrat"}
          color="white"
          fontWeight={500}
        >
          De:{" "}
          <span style={{ textDecorationLine: "line-through" }}>R$2.899,00</span>{" "}
          Por apenas
        </Typography>

        <Typography
          variant="h4"
          fontFamily={"Montserrat"}
          color="white"
          fontWeight={700}
        >
          12X de <span style={{ fontSize: "3rem" }}>R$39,90</span>
        </Typography>

        <Typography
          variant="h3"
          fontFamily={"Montserrat"}
          color="white"
          fontWeight={500}
        >
          Ou R$399,00 à vista!
        </Typography>

        <StyledButton>COMECE AGORA</StyledButton>
      </ValueContainer>
    </Container>
  );
};

const Container = styled(Box)`
  text-align: center;
  padding: 1.5rem;
`;
const ReceiveContainer = styled(Card)`
  padding: 1rem;
  width: 70%;
  margin: 1.5rem auto 0 auto;
  border-bottom: 4px solid orangered;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;
const ReceiveSingle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;
const ReceiveImg = styled("img")`
  width: 40%;
  border-radius: 1rem;
`;
const ValueText = styled("h2")`
  font-family: "Montserrat";
  color: orangered;
  span {
    font-family: "Montserrat";
    text-decoration-line: line-through;
    font-weight: 700;
  }
`;
const TotalValue = styled(Box)`
  border: 1.5px dotted orangered;
  border-radius: 0.5rem;
  background-image: url(/images/whatsbot-banner.png);
  background-size: cover;
  background-position: top center;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ValueContainer = styled(Card)`
  background-image: url(/images/whatsbot-banner.png);
  background-size: cover;
  background-position: top;
  background-color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  row-gap: 1rem;
  width: 70%;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;
const Logo = styled("img")`
  max-width: 50%;
  min-height: 30%;
`;

const StyledButton = styled(Button)`
  font-family: "Montserrat";
  text-transform: uppercase;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: white;
  z-index: 0;
  background-image: linear-gradient(90deg, #33f423, #35910a, #33f423, #35910a);
  background-size: 400% 200%;
  transition: opacity 0.3s linear;
  transition: background 1.6s all;
  animation: 3.4s infinite brilho;
  :hover {
    opacity: 0.8;
  }
`;

export default ReceivesWhatsBot;
