import React from "react";
import { Box, Card, styled, Typography } from "@mui/material";
import { openUrl } from "./partners";
import { COLORS } from "../../../constants/cssVariables";

const products = [
  {
    name: "WhatsBot Premium",
    logo: "/images/whatsbot/premium-full.png",
    url: "https://sofx.com.br/services/whatsapp-bot",
  },
  {
    name: "WhatsBot Gold",
    logo: "/images/whatsbot/gold-full.png",
    url: "https://sofx.com.br/services/whatsbot",
  },
];

const OurProducts = () => {
  return (
    <Container>
      <Typography variant="h5" p={"3rem"}>
        Nossos Produtos
      </Typography>

      <InnerContainer>
        {products.map((v, i) => (
          <EnterpriseCard key={i} onClick={() => openUrl(v.url)} elevation={10}>
            <Logo src={v.logo} alt="" />
            <Typography variant="caption" color="gray">
              {v.name}
            </Typography>
          </EnterpriseCard>
        ))}
      </InnerContainer>
    </Container>
  );
};

const Container = styled(Box)`
  /* background-color: ${COLORS.primary}; */
`;

const InnerContainer = styled(Box)`
  padding: 3rem;
  display: flex;
  align-items: center;
  row-gap: 2rem;
  column-gap: 5%;
  flex-wrap: wrap;
`;
const EnterpriseCard = styled(Card)`
  /* filter: grayscale(100%); */

  cursor: pointer;
  transition: 0.3s;
  scale: 0.9;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 5px;
  :last-child {
    padding-right: 0%;
  }
  :hover {
    scale: 1;
  }
`;
const Logo = styled("img")`
  min-width: 150px;
  max-width: 250px;
  border-radius: 0.4rem;
`;

export default OurProducts;
