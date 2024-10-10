/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Card, Rating, Typography, styled } from "@mui/material";
import BannerWhatsPremium, {
  StyledButtonWhatsBotPremium,
} from "../../components/whatsbot/premium/banner";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { whatsappPhone } from "../../constants/phone";
import { advantagesMock } from "../../_mock/whatsapp";
import { COLORS } from "../../constants/cssVariables";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderWhatsBotPremium from "../../components/whatsbot/premium/header";
import "react-multi-carousel/lib/styles.css";

const ratings = [
  {
    name: "CEMIC - Centro Médico e de Implantes Comunitário",
    stars: 5,
    avatar: "/images/ratings/cemic.png",
    comment:
      "Excelente serviço! Nossa empresa trabalha com mais de 5 mil atendimentos Whatsapp por mês, e o robô foi uma mão na roda, aonde pudemos focar na gestão interna da empresa, e não mais ter a necessidade de ficar horas no atendimento!",
  },
  {
    name: "Gamer Hamburgueria",
    stars: 5,
    avatar: "/images/whatsbot/premium/clients/gamerhamburgueria.png",
    comment:
      "Nós estamos muito felizes de usar o WhatsBot na nossa empresa. Ele acelerou nossas vendas e facilitou demais para trabalharmos com o sistema automático! Super recomendo.",
  },
];

const responsive: ResponsiveType = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const renderCarousel = (width: number) => (
  <Carousel
    ssr
    swipeable={false}
    draggable={false}
    // showDots
    autoPlay={width! < 720 ? true : false}
    responsive={responsive}
    className="carousel"
  >
    {ratings.map((v, i) => (
      <RatingCard key={i}>
        <RatingHeader>
          <RatingAvatar src={v.avatar} />
          <Rating name="read-only" value={v.stars} readOnly />
        </RatingHeader>
        <Typography variant="subtitle1">{v.name}</Typography>
        <Typography variant="caption">{v.comment}</Typography>
      </RatingCard>
    ))}
  </Carousel>
);

const WhatsappBotPage = () => {
  const { width } = useWindowSize();
  const msg = `Gostaria de realizar um orçamento para adquirir o Robô Whatsapp para minha empresa/negócio!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () => window.open(zapHref, "_blank");

  return (
    <Container>
      <HeaderWhatsBotPremium />
      <BannerWhatsPremium />

      <StyledButtonWhatsBotPremium
        onClick={openWhatsapp}
        variant="contained"
        sx={{ borderRadius: 0 }}
        fullWidth
        endIcon={<WhatsAppIcon fontSize="large" />}
      >
        Adquirir Meu Robô!
      </StyledButtonWhatsBotPremium>

      <TitleContainer>
        <Typography
          variant="h3"
          color="#036c6f"
          fontFamily="'Montserrat', sans-serif"
        >
          VANTAGENS
        </Typography>
      </TitleContainer>

      <AdvantagesSection>
        {advantagesMock(width! > 900 ? "240" : width! > 720 ? "120" : "80").map(
          (v, i) => (
            <CardAdvantages key={i} elevation={10}>
              {v.icon}
              <Typography
                variant="h6"
                textAlign="center"
                fontFamily={"Montserrat"}
              >
                + {v.title}
              </Typography>
              <Typography
                variant="subtitle2"
                textAlign="center"
                fontFamily={"Montserrat"}
              >
                {v.description}
              </Typography>
            </CardAdvantages>
          )
        )}
      </AdvantagesSection>

      <PackagesSection></PackagesSection>

      <RatingsSection>
        <Typography
          variant="h3"
          color={COLORS.darkPrimary}
          fontFamily="'Disket Bold', sans-serif"
        >
          AVALIAÇÕES
        </Typography>

        <CarouselContainer>{renderCarousel(width!)}</CarouselContainer>
      </RatingsSection>

      <PricesSection></PricesSection>

      <LastCallSection>
        <StrokeText variant="h3" className="text-effect-3">
          Fale agora com nossa equipe e saiba como automatizar sua empresa hoje!
        </StrokeText>

        <StyledButtonWhatsBotPremium
          variant="contained"
          fullWidth
          color="primary"
          endIcon={<WhatsAppIcon fontSize="large" />}
          onClick={openWhatsapp}
        >
          Adquirir agora!
        </StyledButtonWhatsBotPremium>
      </LastCallSection>

      <FooterSection>
        <StyledButtonWhatsBotPremium
          variant="contained"
          href="/whatsbot/premium"
          color="info"
        >
          Já sou membro Whatsbot Premium
        </StyledButtonWhatsBotPremium>
        <LogoImg
          src="/images/logo-transparent.png"
          onClick={() =>
            window.open("https://sofx.com.br", "_blank", "norefereer")
          }
        />
        <Typography variant="subtitle1" color={COLORS.primary}>
          2024 © Todos direitos reservados.
        </Typography>
        <a href="https://storyset.com/online">
          Online illustrations by Storyset
        </a>
      </FooterSection>
    </Container>
  );
};

export default WhatsappBotPage;

const Container = styled(Box)`
  background-attachment: fixed;
  background-image: url(/images/whatsbot/fundo.jpeg);
`;

// Header Section ============================

const CallButton = styled(Button)`
  color: white;
  font-size: 1.5vw;
  border-radius: 0;
  padding: 1rem;

  @media screen and (max-width: 900px) {
    width: 90%;
    font-size: 2vw;
  }
  @media screen and (max-width: 720px) {
    font-size: 2.5vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 3.5vw;
  }
  @media screen and (max-width: 350px) {
    font-size: 5vw;
  }
`;
const LogoImg = styled("img")`
  width: 100%;
  max-width: 200px;
  min-width: 120px;
  cursor: pointer;
`;
const TitleContainer = styled(Box)`
  background: none;
  padding: 3rem 3rem 0 3rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

// Advantages Section ================
const AdvantagesSection = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 3rem;
  background: none;
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div5 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div6 {
    grid-area: 2 / 3 / 3 / 4;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    padding-top: 1rem;
  }
`;
const CardAdvantages = styled(Card)`
  padding: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Packages Section ======================
const PackagesSection = styled(Box)``;

// Ratings Section ==========================
const RatingsSection = styled(Box)`
  padding: 3rem;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;
const CarouselContainer = styled(Box)`
  width: 100%;
`;
const RatingCard = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid ${COLORS.primary};
  padding: 1rem;
  border-radius: 0.5rem;
  width: 50vw;
  margin: 0 auto;
  -webkit-box-shadow: 1px 2px 4px 0px rgba(82, 113, 255, 0.75);
  -moz-box-shadow: 1px 2px 4px 0px rgba(82, 113, 255, 0.75);
  box-shadow: 1px 2px 4px 0px rgba(82, 113, 255, 0.75);

  @media screen and (max-width: 720px) {
    width: 80vw;
  }
`;
const RatingHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const RatingAvatar = styled("img")`
  width: 100px;
`;

// Prices Section ===========================
const PricesSection = styled(Box)``;

// Last Call Section =======================
const LastCallSection = styled(Box)`
  background: linear-gradient(to left, #241e48 10%, black 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  padding: 3rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

const StrokeText = styled(Typography)`
  /* -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: white; */
`;

// Footer Section =========================
const FooterSection = styled(Box)`
  border-top: 1px solid #c5c5c5;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
