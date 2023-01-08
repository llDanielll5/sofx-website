import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../../constants/cssVariables";
import { Section } from "../Reusables/styles";

export const FacebookIcon = styled(FaFacebookSquare)``;

export const InstagramIcon = styled(BsInstagram)``;

export const FooterLogo = styled.a`
  color: ${COLORS.firstColor};
  font-size: ${TYPOGRAPHY.h3Font};
  font-weight: ${WEIGHTFONT.semibold};
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  margin-bottom: 0.75rem;
  padding-top: 1rem;
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
  }
`;

export const FooterSection = styled.footer`
  padding: 0 1.5rem 0 1.5rem;
  background-color: ${COLORS.firstColorLighten};
`;

export const FooterTitle = styled.h3`
  font-size: ${TYPOGRAPHY.h3Font};
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
  }
`;

export const FooterSocialLink = styled.a`
  font-size: 1.25rem;
  color: ${COLORS.textColor};
  transition: 0.3s;
  :hover {
    color: ${COLORS.titleColor};
  }
`;

export const FooterCopy = styled.span`
  text-align: center;
  width: 100%;
  font-size: ${TYPOGRAPHY.smaller};
  font-weight: ${WEIGHTFONT.medium};
  color: ${COLORS.textColor};
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.smaller};
  }
`;
