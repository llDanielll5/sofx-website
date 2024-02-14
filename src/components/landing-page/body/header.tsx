import React from "react";
import Link from "next/link";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { headerMenu } from "../../../utils/data/landing-page";
import { COLORS } from "../../../constants/cssVariables";
import useWindowSize from "../../../hooks/useWindowSize";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Header = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <StyledImg src={"/images/logo.jpg"} />

      {width! > 760 ? (
        <MenuContainer>
          {headerMenu.map((v, i) => (
            <Link key={i} passHref href={v.href}>
              <LinkText variant="subtitle1">{v.title}</LinkText>
            </Link>
          ))}
        </MenuContainer>
      ) : (
        <IconButton>
          <MenuOpenIcon fontSize="large" color="primary" />
        </IconButton>
      )}
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 3rem;

  @media screen and (max-width: 760px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 550px) {
    padding: 1rem 1rem;
  }
`;

const StyledImg = styled("img")`
  width: 10rem;
`;

const MenuContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 1rem;
`;

const LinkText = styled(Typography)`
  transition: 0.2s;
  :hover {
    color: ${COLORS.firstColor};
  }
`;

export default Header;
