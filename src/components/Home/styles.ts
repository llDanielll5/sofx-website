import Image from "next/legacy/image";
import styled, { keyframes } from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../../constants/cssVariables";
import Paragraph from "../Paragraph";
import { Container, Section } from "../Reusables/styles";
import { MdLocationOn } from "react-icons/md";
import Button from "../Button";
import { AiOutlineArrowDown } from "react-icons/ai";

export const HomeSection = styled.div`
  padding: 4.5rem 0 2rem;
  @media screen and (max-width: 1023px) {
    padding: 4.5rem 1rem 2rem 0;
  }
`;

export const HomeContainer = styled(Container)`
  display: grid;
  padding-top: 7rem;
  @media screen and (max-width: 1023px) {
    padding-top: 7rem;
  }
`;

export const HomeData = styled.div`
  background-image: url("/images/backgroundDGS.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 99.8vh;
  width: 99.8vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HomeInnerContainer = styled.div`
  z-index: 2;
  background-color: rgba(57, 76, 150, 0.6);
  height: 99.9vh;
  width: 99.9vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const animateText = keyframes`
0% {
      right: -50%;
    }
    15%{
        right: 10%;
    }
    50% {
      right: 20%;
    }
    70%{
        right: 10%
    }
    90%{
        right: -15%
    }
    100%{
      right: -30%
    }
`;
const animateTextMobile = keyframes`
0% {
      right: -100%;
    }
    15%{
        right:2%;
    }
    50% {
      right: 5%;
    }
    70%{
        right: 4%
    }
    90%{
        right: 2%
    }
    100%{
      right: -100%
    }
`;

export const HomeTitle = styled.h1`
  font-size: 4rem;
  color: white;
  padding-top: 6rem;
  z-index: 3;
  position: absolute;
  right: -20%;
  animation-name: ${animateText};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    animation-name: ${animateTextMobile};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;

export const HomeDescription = styled(Paragraph)`
  font-size: ${TYPOGRAPHY.h2Font};
  color: white;
  padding-top: 16rem;
  z-index: 3;
  position: absolute;
  right: -20%;
  animation-name: ${animateText};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 960px) {
    font-size: ${TYPOGRAPHY1024.h3Font};
    text-align: center;
    animation-name: ${animateTextMobile};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;

export const HomeSearch = styled.form`
  background-color: ${COLORS.bodyColor};
  padding: 0.35rem 0.35rem 0.35rem 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  border: 3px solid ${COLORS.textColor};
  margin-bottom: 2rem;
`;

export const HomeSearchInput = styled.input`
  width: 90%;
  background-color: ${COLORS.bodyColor};
  color: ${COLORS.textColor};
  margin: 0 0.5rem;
  ::placeholder {
    color: ${COLORS.textColorLight};
  }
`;

export const HomeSearchIcon = styled(MdLocationOn)`
  font-size: 1.25rem;
  color: ${COLORS.firstColor};
`;

export const HomeValue = styled.div`
  color: white;
  display: flex;
  column-gap: 2.5rem;
  #valueNumber {
    font-size: ${TYPOGRAPHY.h1Font};
    font-weight: ${WEIGHTFONT.medium};
    span {
      color: ${COLORS.secondColor};
    }
    @media screen and (min-width: 1024px) {
      font-size: ${TYPOGRAPHY1024.h1Font};
    }
  }
  #valueDescription {
    display: flex;
    color: ${COLORS.textColorLight};
    font-size: ${TYPOGRAPHY.smaller};
    @media screen and (min-width: 1024px) {
      font-size: ${TYPOGRAPHY1024.smaller};
    }
  }
`;

export const HomeImages = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HomeOrbe = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    180deg,
    hsl(0, 0%, 16%) 93%,
    hsl(0, 0%, 67%) 100%
  );
  border-radius: 13px 13px 0 0;
  @media screen and (max-width: 760px) {
    height: 225px;
  }
`;

export const HomeImg = styled.div`
  position: absolute;
  width: 99%;
  height: 515px;
  overflow: hidden;
  border-radius: 12px 12px 12px 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  bottom: -1.5rem;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
  @media screen and (max-width: 760px) {
    height: 250px;
    border-radius: 24px 24px 24px 24px;
  }
`;

export const SearchButton = styled(Button)`
  display: inline-block;
  background: linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%));
  color: white;
  padding: 14px 28px;
  border-radius: 0.5rem;
  font-size: ${TYPOGRAPHY.normal};
  font-weight: ${WEIGHTFONT.medium};
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
  transition: 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: 0 4px 12px hsla(228, 66%, 45%, 0.25);
  }

  @media screen and (min-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.normal};
  }
`;

export const ArrowDown = styled(AiOutlineArrowDown)`
  position: absolute;
  left: 50%;
  right: 0;
  bottom: 20px;
  color: white;
  z-index: 2;
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    bottom: 7rem;
  }
`;

export const BannerImage = styled(Image)``;

export const AboutSection = styled(Section)``;
