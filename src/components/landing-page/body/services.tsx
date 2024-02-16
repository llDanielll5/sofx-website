import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { allServices } from "../../../utils/data/landing-page";

const Services = () => {
  return (
    <Container id={"services"}>
      <Typography variant="h5" py={2}>
        Nossos Serviços
      </Typography>
      <CardsContainer>
        {allServices.map((v, i) => (
          <CardSingle key={i}>
            {v.icon ?? undefined}
            <Typography variant="body1">{v.title}</Typography>
          </CardSingle>
        ))}

        <SmallText variant="body2">
          Os serviços digitais como sites, aplicativos e sistemas são essenciais
          para empresas que desejam expandir sua presença online e melhorar sua
          eficiência operacional. A automação desses processos oferece inúmeras
          vantagens, como a redução de erros humanos, aumento da produtividade,
          economia de tempo e redução de custos.
        </SmallText>
      </CardsContainer>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 1rem 3rem;
`;

const CardsContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem 0;
  column-gap: 1.5rem;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  max-width: 70vw;
  @media screen and (max-width: 760px) {
  }
`;

const CardSingle = styled(Box)`
  border: 1px solid #5373ff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  padding: 2rem;
  column-gap: 1rem;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  @media screen and (max-width: 760px) {
  }
`;

const SmallText = styled(Typography)`
  width: 60vw;
`;

export default Services;
