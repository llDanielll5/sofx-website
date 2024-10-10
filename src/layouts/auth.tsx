/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

const welcomeStyle = {
  fontSize: "24px",
  lineHeight: "32px",
  mb: 1,
  color: "var(--dark-blue)",
  alignItems: "center",
};
const gradient = {
  alignItems: "center",
  background: "url(/images/whatsbot/premium/banner.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  color: "white",
  display: "flex",
  justifyContent: "center",
  "& img": {
    maxWidth: "100%",
  },
};
const headerGrid = {
  background: "url(/images/whatsbot/fundo.jpeg)",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
const headerStyle = {
  left: 0,
  p: 3,
  position: "fixed",
  top: 0,
  width: "100%",
};
const logoStyle = {
  display: "inline-flex",
  height: 50,
  width: 50,
};

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <Box component="main" sx={{ display: "flex", flex: "1 1 auto" }}>
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid xs={12} lg={8} sx={headerGrid}>
          <Box component="header" sx={headerStyle}>
            {/* <Box component={NextLink} href="/" sx={logoStyle}>
              <img src="/images/whatsbot-premium-logo.png" alt="" />
              <Typography>Entrar</Typography>
            </Box> */}
          </Box>
          {children}
        </Grid>
        <Grid xs={12} lg={4} sx={gradient}>
          <Box sx={{ p: 3 }}>
            <img alt="" src="/images/whatsbot/premium/logo.png" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

AuthLayout.prototypes = {
  children: PropTypes.node,
};
