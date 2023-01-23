import Image from "next/legacy/image";
import styled from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
} from "../../constants/cssVariables";
import { Container, Section } from "../Reusables/styles";
import { BsWhatsapp } from "react-icons/bs";

export const ContactSection = styled.div`
  padding: 6rem 0 0;
  height: 50vh;
  @media screen and (max-width: 1023px) {
    padding: 4.5rem 1rem 0 0;
  }
`;

export const ContactContainer = styled(Container)`
  row-gap: 0;
  @media screen and (max-width: 1024px) {
    display: grid;
  }
`;

export const ContactImg = styled(Image)`
  position: absolute;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 70px 70px 8px 8px;
  inset: 0;
  margin: auto;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
`;

export const SubtitleContact = styled.span`
  display: block;
  margin-top: 2rem;
  color: ${COLORS.secondColor};
  font-size: ${TYPOGRAPHY.small};
  @media screen and (min-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.small};
  }
`;

export const TitleContact = styled.h2`
  margin-bottom: 1rem;
`;

export const ContactDescription = styled.p`
  font-size: ${TYPOGRAPHY.h2Font};
  margin-bottom: 2.5rem;
  text-align: center;
  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
    margin-top: 1rem;
    font-size: ${TYPOGRAPHY1024.normal};
  }
`;

export const ContactButton = styled.button`
  padding: 16px 32px;
  color: ${COLORS.firstColor};
  border-radius: 0.25rem;
  font-weight: 600;
  background-color: ${COLORS.firstColorLighten};
  font-size: ${TYPOGRAPHY.normal};
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: ${COLORS.firstColor};
    color: white;
  }
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.normal};
  } ;
`;

export const WhatsappIcon = styled(BsWhatsapp)`
  margin-left: 8px;
  font-size: ${TYPOGRAPHY.h2Font};
  background-color: ${COLORS.firstColorLighten};
  color: ${COLORS.firstColor};
  border-radius: 4px;
  padding: 6px;

  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h2Font};
  } ;
`;
