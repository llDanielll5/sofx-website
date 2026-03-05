// pages/index.tsx
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Grid,
  Card,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PriceCheck } from "@mui/icons-material";
import { COLORS } from "../../../constants/cssVariables";
import { BlurText } from "../components/blur-text";
import Link from "next/link";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#050807",
        color: "#fff",
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 6 },
        pb: { xs: 10, md: 12 },
      }}
    >
      {/* NAVBAR */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ bgcolor: "transparent", py: 2 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <StyledImg src={"/images/white-logo.png"} />

            <Stack direction="row" spacing={4} alignItems="center">
              <Link passHref href="/case-studies">
                <Typography
                  sx={{
                    opacity: 0.8,
                    color: "#fff",
                    "&:hover": { color: COLORS.firstColor },
                  }}
                >
                  Sobre Nós
                </Typography>
              </Link>
              <Link passHref href="/company">
                <Typography
                  sx={{
                    opacity: 0.8,
                    color: "#fff",
                    "&:hover": { color: COLORS.firstColor },
                  }}
                >
                  Serviços
                </Typography>
              </Link>
              <Link passHref href="/services">
                <Typography
                  sx={{
                    opacity: 0.8,
                    color: "#fff",
                    "&:hover": { color: COLORS.firstColor },
                  }}
                >
                  Nossos Clientes
                </Typography>
              </Link>
              <Link passHref href="/clients">
                <Typography
                  sx={{
                    opacity: 0.8,
                    color: "#fff",
                    "&:hover": { color: COLORS.firstColor },
                  }}
                >
                  Portfólio
                </Typography>
              </Link>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              {/* <IconButton color="inherit">
                <SearchIcon />
              </IconButton> */}

              <Button
                variant="contained"
                sx={{
                  ml: 1,
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 3,
                }}
                endIcon={<MailOutlineIcon />}
              >
                Falar Conosco
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Container maxWidth="xl" sx={{ pt: { xs: 18, md: 24 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                fontWeight={500}
                lineHeight={1.1}
                sx={{ mb: 3 }}
              >
                <BlurText color={COLORS.firstColor}>Expanda </BlurText> sua
                empresa com
                <br /> <BlurText color={COLORS.firstColor}>
                  Tecnologia
                </BlurText>{" "}
                de ponta e IA.
              </Typography>

              <Typography sx={{ opacity: 0.7, maxWidth: 520, mb: 5 }}>
                Gere aplicações específicas e demonstre desempenho com
                velocidade e fidelidade sem precedentes. Utilizando IA e uma
                equipe profissional dedicada, garantimos resultados
                excepcionais.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    borderRadius: 999,
                    px: 4,
                  }}
                >
                  Contate-nos
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#fff",
                    borderRadius: 999,
                    px: 4,
                  }}
                >
                  Ver Demonstração
                </Button>
              </Stack>
            </MotionBox>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: 420,
              }}
            >
              {/* Glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 50% 30%, hsl(228, 66%, 53%), transparent 60%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Steps */}
              <Stack spacing={2} sx={{ position: "relative", zIndex: 2 }}>
                {[
                  "Estudo de Mercado, Benchmarking",
                  "Brainstorm e Prototipagem UI/UX",
                  "Requisitos de Sistema, Fluxogramas e Diagramas",
                  "Desenvolvimento de Software e Teste de Software",
                ].map((item, i) => (
                  <Card
                    key={item}
                    sx={{
                      ml: i * 4,
                      bgcolor:
                        i === 1
                          ? "hsl(228, 66%, 13%)"
                          : "rgba(255,255,255,0.04)",
                      border:
                        i === 1
                          ? `1px solid ${COLORS.firstColor}`
                          : "1px solid rgba(255,255,255,0.08)",
                      color: "#fff",
                      px: 3,
                      py: 2,
                      borderRadius: 3,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Typography fontWeight={600}>{item}</Typography>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* CATEGORIES */}
        <Grid container spacing={2} sx={{ mt: { xs: 1, md: 10 } }}>
          {[
            "Inteligencia Artificial",
            "Aprendizado de Máquina",
            "Desenvolvimento de Software",
            "Desenvolvimento Mobile (Android/iOS)",
            "Design UI/UX",
            "Teste de Software",
          ].map((item) => (
            <Grid item xs={6} sm={4} md={2} key={item}>
              <Card
                sx={{
                  height: 110,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: 3,
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography fontWeight={500} textAlign="center">
                  {item}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const StyledImg = styled("img")`
  width: 10rem;
`;
