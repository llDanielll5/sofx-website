import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/cssVariables";

const TextFadeIn = (props: { content: string; backColor: string }) => {
  return <Text backColor={props.backColor}>{props.content}</Text>;
};

const Text = styled("h2")<{ backColor: string }>`
  position: relative;
  font-size: 3rem;
  color: ${COLORS.firstColor};
  overflow: hidden;
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const FadeInText = styled.div<{ backColor: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ backColor }) =>
    `linear-gradient(90deg, transparent 0%, ${backColor} 5%, ${backColor} 100%)`};
  transition: 1.8s;
`;

export default TextFadeIn;
