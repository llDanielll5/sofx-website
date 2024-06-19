import React from "react";
import { Box, Card, Divider, Typography, styled } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SellIcon from "@mui/icons-material/Sell";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface AdvantagesInterface {
  title: string;
  description: string;
  img: string;
}
interface MiniCardsInterface {
  title: string;
  icon: any;
}

const advantages: AdvantagesInterface[] = [
  {
    title: "Código Pronto",
    description: "Produto Pronto para vender em até 1 dia!",
    img: "/images/whatsbot/code.png",
  },
  {
    title: "Suporte Vitalício",
    description: "Aulas e suporte a todo instante para membros",
    img: "/images/whatsbot/support.png",
  },
  {
    title: "Produto Vendedor",
    description:
      "Produto totalmente qualificado e que traz excelentes resultados!",
    img: "/images/whatsbot/winner.png",
  },
];
const minicards: MiniCardsInterface[] = [
  {
    icon: <SupportAgentIcon sx={{ fontSize: "80px" }} />,
    title: "Suporte 24H",
  },
  {
    icon: <AllInclusiveIcon sx={{ fontSize: "80px" }} />,
    title: "Acesso Vitalício",
  },
  {
    icon: <SellIcon sx={{ fontSize: "80px" }} />,
    title: "O Produto que vende!",
  },
  {
    icon: <SnowshoeingIcon sx={{ fontSize: "80px" }} />,
    title: "Passo a Passo para você vender",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: "80px" }} />,
    title: "Tendência do mercado",
  },
  {
    icon: <DoneOutlineIcon sx={{ fontSize: "80px" }} />,
    title: "Pouca concorrência",
  },
];

const AdvantagesWhatsBot = () => {
  const advantageCard = ({ v, i }: { v: AdvantagesInterface; i: number }) => (
    <CardContainer key={i}>
      <StyledCard image={v.img} />

      <Typography
        variant="h6"
        textAlign={"center"}
        color="grey"
        mt={2}
        fontFamily={"Montserrat"}
      >
        {v.description}
      </Typography>
    </CardContainer>
  );
  const miniCard = ({ v, i }: { v: MiniCardsInterface; i: number }) => (
    <MiniCard key={i} elevation={10}>
      {v.icon}
      <Typography variant="h6" fontFamily={"Montserrat"} color="rgb(50,50,50)">
        {v.title}
      </Typography>
    </MiniCard>
  );

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        mb={4}
        fontFamily={"Montserrat"}
      >
        Com nosso pacote você terá:
      </Typography>
      <AdvantagesContainer>
        {advantages.map((v: AdvantagesInterface, i: number) =>
          advantageCard({ v, i })
        )}
      </AdvantagesContainer>

      <Divider sx={{ my: 4 }} />

      <MiniCardsContainer>
        {minicards.map((v: MiniCardsInterface, i: number) =>
          miniCard({ v, i })
        )}
      </MiniCardsContainer>
    </Container>
  );
};

const Container = styled(Box)`
  margin: 2rem 0;
  padding: 2rem 0;
`;
const AdvantagesContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
    column-gap: 1%;
    row-gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  column-gap: 0.5rem;
  min-height: 500px;
  height: 500px;
  width: 100%;
  align-items: center;
`;
const CardImage = styled("img")``;
const StyledCard = styled(Card)<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  min-height: 400px;
  max-height: 400px;
  min-width: 30vw;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 760px) {
    min-height: 400px;
    max-height: 400px;
    min-width: 80vw;
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    min-width: 80vw;
    max-width: 80vw;
  }
  @media screen and (max-width: 500px) {
    min-height: 400px;
    max-height: 400px;
    min-width: 90vw;
    max-width: 90vw;
  }
`;

const MiniCardsContainer = styled(Box)`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  text-align: center;
  padding: 1.5rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;
const MiniCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 20vw;
  min-width: 20vw;
  row-gap: 0.5rem;

  @media screen and (max-width: 760px) {
    max-width: 90vw;
    min-width: 90vw;
  }
`;

export default AdvantagesWhatsBot;
