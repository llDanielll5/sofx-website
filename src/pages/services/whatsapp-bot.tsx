/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Rating, Typography, styled } from "@mui/material";
import { COLORS } from "../../constants/cssVariables";
import { whatsappPhone } from "../../constants/phone";
import { advantagesMock } from "../../_mock/whatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ratings = [
  {
    name: "CEMIC - Centro Médico e de Implantes Comunitário",
    stars: 5,
    avatar: "/images/ratings/cemic.png",
    comment:
      "Excelente serviço! Nossa empresa trabalha com mais de 5 mil atendimentos Whatsapp por mês, e o robô foi uma mão na roda, aonde pudemos focar na gestão interna da empresa, e não mais ter a necessidade de ficar horas no atendimento!",
  },
];

const responsive = {
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
      <HeaderSection>
        {width! > 900 && <LogoImg src="/images/white-logo.png" />}
        <Typography
          variant="h4"
          color={COLORS.primary}
          className="text-effect-1"
        >
          Robô em Super Promoção!
        </Typography>
        <CallButton
          onClick={openWhatsapp}
          variant="contained"
          endIcon={<WhatsAppIcon fontSize="large" />}
        >
          Quero garantir minha Promoção!
        </CallButton>
      </HeaderSection>

      <CallSection>
        <CallTextContainer>
          {width! < 900 && <LogoImg src="/images/white-logo.png" />}
          <Typography
            color={COLORS.darkPrimary}
            variant="h2"
            fontWeight={"bold"}
            // fontFamily={"Disket Bold"}
          >
            Acelere o atendimento de sua empresa com nosso robô de Whatsapp!
          </Typography>
          <Typography
            color={COLORS.darkPrimary}
            variant="h5"
            fontWeight={"bold"}
          >
            Tenha o controle de seus atendimentos whatsapp na palma de sua mão.
          </Typography>
          <Typography
            color={COLORS.darkPrimary}
            variant="h6"
            fontWeight={"bold"}
          >
            Priorize seus atendimentos e consiga mais clientes com nossas
            soluções de automação.
          </Typography>
        </CallTextContainer>
        <img src="/images/bot-cell.png" alt="" />
      </CallSection>

      <Button
        onClick={openWhatsapp}
        variant="contained"
        sx={{ borderRadius: 0 }}
        fullWidth
        endIcon={<WhatsAppIcon fontSize="large" />}
      >
        Adquirir Meu Robô!
      </Button>

      <TitleContainer>
        <Typography
          variant="h3"
          color="white"
          fontFamily="'Disket Bold', sans-serif"
        >
          VANTAGENS
        </Typography>
      </TitleContainer>

      <AdvantagesSection>
        {advantagesMock(
          width! > 900 ? "120px" : width! > 720 ? "80px" : "55px"
        ).map((v, i) => (
          <CardAdvantages key={i}>
            {v.icon}
            <Typography variant="h6" textAlign="center">
              + {v.title}
            </Typography>
            <Typography variant="subtitle2" textAlign="center">
              {v.description}
            </Typography>
          </CardAdvantages>
        ))}
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
        <StrokeText variant="h3">
          Fale agora com nossa equipe e saiba como automatizar sua empresa hoje!
        </StrokeText>

        <CallButton
          variant="contained"
          fullWidth
          color="inherit"
          endIcon={<WhatsAppIcon fontSize="large" />}
          sx={{ color: COLORS.darkPrimary }}
        >
          Adquirir agora!
        </CallButton>
      </LastCallSection>

      <FooterSection>
        <LogoImg src="/images/logo.jpg" />
        <Typography variant="subtitle1" color={COLORS.primary}>
          2024 © Todos direitos reservados.
        </Typography>
      </FooterSection>
    </Container>
  );
};

export default WhatsappBotPage;

const Container = styled(Box)`
  position: relative;
  width: 100%;
`;

// Header Section ============================
const HeaderSection = styled(Box)`
  padding: 1.5rem;
  position: fixed;
  width: 100vw;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #241e48;
  border-bottom: 2px solid #f4f4f4;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;
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
`;
const TitleContainer = styled(Box)`
  background-color: ${COLORS.darkPrimary};
  padding: 3rem 3rem 0 3rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

// Call Section =============================
const CallSection = styled(Box)`
  background: linear-gradient(to right, ${COLORS.primary}, white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 2rem 2rem 2rem;

  @media screen and (max-width: 900px) {
    padding-top: 12rem;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding-top: 15rem;
  }
`;
const CallTextContainer = styled(Box)`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1%;
  row-gap: 1rem;
`;

// Advantages Section ================
const AdvantagesSection = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 3rem;
  background-color: ${COLORS.darkPrimary};

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
const CardAdvantages = styled(Box)`
  padding: 1rem;
  background-color: white;
  border-radius: 0;
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
  width: 120px;
`;

// Prices Section ===========================
const PricesSection = styled(Box)``;

// Last Call Section =======================
const LastCallSection = styled(Box)`
  background: linear-gradient(to right, ${COLORS.primary}, white);
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
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: white;
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
