import Image from "next/legacy/image";
import styled from "styled-components";
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

export const HomeSection = styled.section`
  padding: 4.5rem 0 2rem;
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-bottom: 0;
`;

export const HomeContainer = styled(Container)`
  display: grid;
  padding-top: 4rem;
  row-gap: 3.5rem;
`;

export const HomeData = styled.div``;

export const HomeTitle = styled.h1`
  color: white;
  font-size: ${TYPOGRAPHY.biggest};
  line-height: 120%;
  margin-bottom: 1.25rem;

  @media screen and (min-width: 1024px) {
    font-size: ${TYPOGRAPHY1024.biggest};
  }
`;

export const HomeDescription = styled(Paragraph)`
  color: ${COLORS.textColor};
  margin-bottom: 2rem;
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

export const BannerImage = styled(Image)``;

export const AboutSection = styled(Section)``;
