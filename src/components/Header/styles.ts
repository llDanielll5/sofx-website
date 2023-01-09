import styled from "styled-components";
import { ZINDEXES, WEIGHTFONT, COLORS } from "../../constants/cssVariables";
import { Container } from "../Reusables/styles";
import { SlHome } from "react-icons/sl";
import { BsPersonBadge } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  z-index: ${ZINDEXES.zFixed};
  transition: 0.4s;
  &.scroll-header {
    background-color: ${COLORS.bodyColor};
    box-shadow: 0 1px 4px hsla(228, 4%, 15%, 0.1);
    #NavLogo {
      color: ${COLORS.firstColor};
    }
  }
`;

export const StyledNav = styled(Container)`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  color: white;
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: ${WEIGHTFONT.medium};
  transition: 0.3s;
  :hover {
    color: ${COLORS.firstColor};
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 1023px) {
    position: fixed;
    bottom: 2rem;
    background-color: ${COLORS.containerColor};
    box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.15);
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1.3rem 3rem;
    border-radius: 1.25rem;
    transition: 0.4s;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  padding: 0 1rem;
  @media screen and (max-width: 1023px) {
    color: ${COLORS.textColor};
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    span {
      display: none;
    }
  }
`;

export const NavButton = styled.a`
  display: none;
`;

export const HomeIcon = styled(SlHome)`
  font-size: 1rem;
  display: none;
  &.active-icon {
    color: white;
  }
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;

export const AboutIcon = styled(BsPersonBadge)`
  font-size: 1rem;
  display: none;
  &.active-icon {
    color: white;
  }
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;

export const ContactIcon = styled(AiOutlinePhone)`
  font-size: 1rem;
  display: none;
  &.active-icon {
    color: white;
  }
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;
