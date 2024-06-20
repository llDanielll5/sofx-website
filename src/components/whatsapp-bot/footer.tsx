import React from "react";
import { Box, Typography, styled } from "@mui/material";

const FooterWhatsBot = () => {
  return (
    <Container>
      <Typography variant="h6" fontFamily={"Montserrat"} color="white">
        SOFX-Soluções Digitais © Todos os direitos reservados.
      </Typography>

      <Typography variant="body1" fontFamily={"Montserrat"} color="white">
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        Depois que você sair do Facebook, a responsabilidade não é deles e sim
        do nosso site. Fazemos todos os esforços para indicar claramente e
        mostrar todas as provas do produto. Nós não vendemos o seu e-mail ou
        qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
        Se você tiver alguma dúvida, sinta-se à vontade para mandar uma mensagem
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: rgb(50, 50, 50);
  text-align: center;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export default FooterWhatsBot;
