import React from "react";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";

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
    name: "Acqua Kids",
    logo: "/images/partners/acquakids.png",
    url: "https://metodologiaconnect.com.br",
  },
  {
    name: "Kairós Spa",
    logo: "/images/partners/kairos.svg",
    url: "https://kairosspa.com.br",
  },
  {
    name: "CRAS - IntegraSUAS",
    logo: "/images/partners/logo_cras.webp",
    url: "https://integrasuas.com.br",
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
      <InnerContainer container spacing={3}>
        {enterprises.map((v, i) => (
          <EnterpriseCard item key={i} onClick={() => openUrl(v.url)}>
            <Logo src={v.logo} alt="" />
            <Paragraph variant="caption" color="gray">
              {v.name}
            </Paragraph>
          </EnterpriseCard>
        ))}
      </InnerContainer>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="neutral.500"
        fontWeight={400}
      >
        Clique em um dos clientes para ver seus websites
      </Typography>
      <Divider />
    </Container>
  );
};

const Container = styled(Box)`
  margin: 2rem 0;
`;
const InnerContainer = styled(Grid)`
  padding: 2rem 5%;
  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;
const EnterpriseCard = styled(Grid)`
  /* filter: grayscale(100%); */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scale: 0.9;
  transition: 0.2s;
  :hover {
    scale: 1;
  }
`;
const Logo = styled("img")`
  min-height: 120px;
  max-width: 200px;
  object-fit: contain;
`;
const Paragraph = styled(Typography)``;

export default Partners;
