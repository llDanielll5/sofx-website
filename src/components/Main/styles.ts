import Image from "next/legacy/image";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import { Container } from "../Reusables/styles";

export const StyledMain = styled.div`
  overflow: hidden;
`;
export const Section = styled.section``;

export const HomeSection = styled(Section)``;

export const HomeContainer = styled(Container)`
  display: grid;
`;

export const HomeData = styled.div``;

export const HomeTitle = styled.h1``;

export const HomeDescription = styled(Paragraph)``;

export const HomeSearch = styled.form``;

export const HomeSearchInput = styled.input``;

export const HomeValue = styled.div``;

export const HomeValueNumber = styled.h1``;

export const HomeImages = styled.div``;

export const HomeOrbe = styled.div``;

export const HomeImg = styled.div``;

export const BannerImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const AboutSection = styled(Section)``;
