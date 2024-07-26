import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";

const enterprises = [
  {
    name: "CEMIC - Centro Médico e de Implantes Comunitários",
    logo: "/images/partners/cemic.png",
    url: "https://ongcemic.org",
  },
  {
    name: "Sob Medida Móveis Planejados",
    logo: "/images/partners/sobmedida.png",
    url: "https://sobmedidamoveisplanejados.com.br",
  },
  {
    name: "Doutor Reparos - Consertos e Manutenções",
    logo: "/images/partners/drreparos.png",
    url: "https://doutorreparosoficial.com.br",
  },
  {
    name: "Diariaz",
    logo: "/images/partners/diariaz.png",
    url: "https://diariaz.vercel.app",
  },
];

export const openUrl = (url: string) => {
  window.open(url, "_blank", "noreferrer,noopener");
};

const Partners = () => {
  return (
    <Container>
      <Divider />
      <Typography variant="h5" p={"3rem"}>
        Nossos Clientes
      </Typography>
      <InnerContainer>
        {enterprises.map((v, i) => (
          <EnterpriseCard key={i} onClick={() => openUrl(v.url)}>
            <Logo src={v.logo} alt="" />
            <Paragraph variant="caption" color="gray">
              {v.name}
            </Paragraph>
          </EnterpriseCard>
        ))}
      </InnerContainer>

      <Divider />
    </Container>
  );
};

const Container = styled(Box)`
  margin: 2rem 0;
`;
const InnerContainer = styled(Box)`
  padding: 3rem;
  display: flex;
  align-items: center;

  row-gap: 2rem;
  column-gap: 5%;
  flex-wrap: wrap;
`;
const EnterpriseCard = styled(Box)`
  /* filter: grayscale(100%); */
  cursor: pointer;
  transition: 0.3s;
  scale: 0.9;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-right: 5%;
  :last-child {
    padding-right: 0%;
  }
  :hover {
    scale: 1;
  }
`;
const Logo = styled("img")`
  min-width: 150px;
  max-width: 200px;
`;
const Paragraph = styled(Typography)``;

export default Partners;
