import React, { useCallback, useEffect, useState } from "react";
import { Box, IconButton, MenuList, Paper, styled } from "@mui/material";
import { useGetScrollPosition } from "../../../hooks/useGetScrollPosition";
import { headerMenu } from "../../../utils/data/landing-page";
import { COLORS } from "../../../constants/cssVariables";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import useWindowSize from "../../../hooks/useWindowSize";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";

const Header = () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const currentScroll = useGetScrollPosition();
  const [path, setPath] = useState(router.asPath ?? "");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const hasPatthed = (patthed: string) => {
    if (patthed === path) return { color: "#5271FF", fontWeight: "600" };
  };
  const handleChangeMenuVisible = () =>
    setMobileMenuVisible(!mobileMenuVisible);

  const getActiveScroll = useCallback(() => {
    const sections = document.querySelectorAll("div[id]");
    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((item: any, index: number) => {
        const sectionHeight = item?.offsetHeight;
        const sectionTop = item?.offsetTop - 58;
        const sectionId = item?.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionId !== "__next") {
            setPath(`/#${sectionId}`);
          }
        }
      });
    }
    scrollActive();
  }, []);

  useEffect(() => {
    getActiveScroll();
  }, [currentScroll, getActiveScroll]);

  useEffect(() => {
    if (width! > 760) setMobileMenuVisible(false);
  }, [width]);

  return (
    <Container>
      <StyledImg src={"/images/logo-transparent.png"} />

      {width! > 760 ? (
        <MenuContainer>
          {headerMenu.map((v, i) => (
            <LinkText key={i} href={v.href} style={hasPatthed(v.href)}>
              {v.title}
            </LinkText>
          ))}
        </MenuContainer>
      ) : (
        <IconButton onClick={handleChangeMenuVisible}>
          {mobileMenuVisible ? (
            <CloseIcon fontSize="large" color="primary" />
          ) : (
            <MenuOpenIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      )}

      {mobileMenuVisible && (
        <StyledPaper>
          <MenuList>
            {headerMenu.map((v, i) => (
              <MenuMobileContainer
                key={i}
                onClick={handleChangeMenuVisible}
                href={v.href}
                passHref
                scroll={false}
              >
                <LinkText style={hasPatthed(v.href)}>{v.title}</LinkText>
              </MenuMobileContainer>
            ))}
          </MenuList>
        </StyledPaper>
      )}
    </Container>
  );
};

const Container = styled(Box)`
  background-color: white;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 3rem;
  border-bottom: 1px solid #d4d4d4;

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

const LinkText = styled("a")`
  transition: 0.2s;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  :hover {
    color: ${COLORS.firstColor};
  }
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  max-width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
`;

const MenuMobileContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.4rem;
  border-bottom: 1px solid #f5f5f5;
  :last-child {
    padding: 0.4rem 0.4rem 0 0.4rem;
    border-bottom: none;
  }
`;

export default Header;
