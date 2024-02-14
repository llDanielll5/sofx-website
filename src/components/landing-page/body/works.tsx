import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { allWorks } from "../../../utils/data/landing-page";

const Works: React.FC = () => {
  const openHref = (href: string) => window.open(href, "_blank");

  return (
    <Container>
      <Typography variant="h5">Nossos Trabalhos</Typography>

      <Box position={"relative"} py={2}>
        <Typography variant="subtitle2" sx={{ width: "45vw" }}>
          Clique no projeto que deseja conhecer e veja os sites em funcionamento
          agora.
        </Typography>

        <StyledBackground src="/images/background-bubbles.png" />
      </Box>

      <CardsContainer>
        {allWorks.map((v, i) => (
          <CardSingle key={i} onClick={() => openHref(v.href)}>
            <CardImage src={v.img} />
            <Typography variant="subtitle2" textAlign="center" mt={1}>
              {v.title}
            </Typography>
          </CardSingle>
        ))}
      </CardsContainer>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 1rem 3rem;
`;

const StyledBackground = styled("img")`
  position: absolute;
  right: 3rem;
  bottom: 0;
  width: 35vw;
  max-width: 400px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const CardsContainer = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  padding: 3rem 0;
  @media screen and (max-width: 760px) {
  }
`;

const CardSingle = styled(Box)`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
  cursor: pointer;
  padding: 2rem 1rem;
  transition: 0.1s;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(83, 115, 255, 1);
  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 760px) {
  }
`;

const CardImage = styled("img")`
  width: 100%;
`;

export default Works;
