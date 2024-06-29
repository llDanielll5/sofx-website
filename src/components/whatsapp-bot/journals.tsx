import { Box, Card, Typography, styled } from "@mui/material";
import React from "react";

interface JournalsInterface {
  img: string;
  title: string;
  url: string;
}

const journals: JournalsInterface[] = [
  {
    img: "/images/whatsbot/journals/news1.png",
    title: "",
    url: "https://g1.globo.com/pr/parana/especial-publicitario/bw8/nova-economia/noticia/2023/04/04/whatsapp-e-chatbot-na-automacao-de-vendas.ghtml",
  },
  {
    img: "/images/whatsbot/journals/news2.png",
    title: "",
    url: "https://blog.publicidade.uol.com.br/insights/uso-de-bots-no-atendimento-ao-cliente-traz-aumento-nas-vendas-diz-pesquisa/",
  },
  {
    img: "/images/whatsbot/journals/news3.png",
    title: "",
    url: "https://www.jornalcontabil.com.br/noticia/73814/beneficios-e-5-passos-para-criar-chatbot-de-whatsapp-para-negocios",
  },
];

const JournalsWhatsBot = () => {
  return (
    <Container>
      <Title
        variant="h4"
        className="text-effect-2"
        textAlign={"center"}
        my={2}
        fontFamily={"Montserrat"}
      >
        O que a mídia fala sobre Robô de Atendimento!
      </Title>

      <Typography
        variant="subtitle1"
        fontFamily={"Montserrat"}
        fontWeight={"300"}
        textAlign={"center"}
        color="white"
        mb={2}
      >
        Clique nos anúncios para ler detalhadamente a matéria!
      </Typography>

      <JournalsContainer>
        {journals.map((v, i) => (
          <JournalSingle
            key={i}
            image={v.img}
            onClick={() => window.open(v.url, "_blank")}
          />
        ))}
      </JournalsContainer>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: rgb(50, 50, 50);
  padding: 1.5rem;
`;
const Title = styled(Typography)``;

const JournalsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 1rem;
  column-gap: 2%;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const JournalSingle = styled(Card)<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: 100% 100%;
  background-position: top center;
  width: 30%;
  height: 400px;
  padding: 1rem;
  :hover {
    opacity: 0.7;
    background-color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 780px) {
    width: 85%;
    height: 450px;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 350px;
  }
`;

export default JournalsWhatsBot;
