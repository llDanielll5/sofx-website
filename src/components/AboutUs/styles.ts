//@ts-nocheck
import styled from "styled-components";
import { Container, Section } from "../Reusables/styles";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { ImStarFull } from "react-icons/im";
import { FaMedal } from "react-icons/fa";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
} from "../../constants/cssVariables";

export const StyledAbout = styled.section`
  padding: 4.5rem 0 2rem;
  @media screen and (max-width: 1023px) {
    padding: 4.5rem 1rem 2rem 0;
  }
`;

export const AboutContainer = styled(Container)`
  display: grid;
  row-gap: 3rem;
`;

export const AboutImages = styled.div`
  display: none;
  @media screen and (max-width: 1023px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutOrbe = styled.div`
  width: 266px;
  height: 175px;
  /* background-color: hsl(228, 24%, 97%); */
  border-radius: 135px 135px 16px 16px;
`;

export const AboutImg = styled.div`
  display: none;
  @media screen and (max-width: 1023px) {
    position: absolute;
    width: 300px;
    overflow: hidden;
    display: flex;
    border-radius: 125px 125px 12px 12px;
    inset: 0;
    margin: auto;
    box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.3);
  }
`;

export const AboutContent = styled.div`
  #valueDescription {
    font-size: ${TYPOGRAPHY.small};
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.small};
  }
`;

export const AboutData = styled.div``;

export const H2SectionTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const AboutAccordion = styled.div`
  display: grid;
  row-gap: 1.5rem;
`;

export const AboutAccordionItem = styled.div`
  background-color: ${COLORS.bodyColor};
  border: 2px solid ${COLORS.borderColor};
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  transition: 1s;
  box-shadow: ${({ dynamicHeight }) =>
    dynamicHeight === 0 ? undefined : "0 12px 50px hsla(228, 66%, 45%, 0.1)"};
`;

export const AboutAccordionHeader = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;

  .accordion-icon {
    background-color: ${COLORS.firstColorLighten};
    padding: 5px;
    border-radius: 0.25rem;
    font-size: ${TYPOGRAPHY.h1Font};
    color: ${COLORS.firstColor};
    margin-right: 0.75rem;
    transition: 0.3s;
  }
`;

export const AboutAccordionTitle = styled.h3`
  font-size: ${TYPOGRAPHY.small};

  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.small};
  }
`;

export const AboutAccordionArrow = styled.div`
  display: inline-flex;
  background-color: ${COLORS.firstColorLighten};
  padding: 0.25rem;
  color: ${COLORS.firstColor};
  border-radius: 2px;
  font-size: 10px;
  margin-left: auto;
  transition: 0.3s;
`;

export const AboutAccordionContent = styled.div`
  overflow: hidden;
  height: ${({ dynamicHeight }) => dynamicHeight ?? 0};
  transition: all 0.75s ease;
  &.accordion-open {
    background-color: red;
  }
`;

export const AboutAccordionDescription = styled.p`
  font-size: ${TYPOGRAPHY.smaller};
  padding: 1.25rem 2.5rem 0 2.75rem;
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.smaller};
  }
`;

export const ArrowDownIcon = styled(AiFillCaretDown)`
  transition: 1s;
  color: black;
  font-size: ${TYPOGRAPHY.h3Font};
  transform: ${({ dynamicHeight }) =>
    dynamicHeight !== 0 ? "rotate(-180deg)" : undefined};

  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
  }
`;

export const ShieldIcon = styled(BsShieldFillCheck)`
  transition: 0.4s;
  font-size: ${TYPOGRAPHY.normal};
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.normal};
  }
`;

export const StarIcon = styled(ImStarFull)`
  transition: 0.4s;
  font-size: ${TYPOGRAPHY.normal};
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.normal};
  }
`;

export const MedalIcon = styled(FaMedal)`
  transition: 0.4s;
  font-size: ${TYPOGRAPHY.normal};
  @media screen and (max-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.normal};
  }
`;
