import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../../constants/cssVariables";

const TextFadeIn = (props: { content: string; backColor: string }) => {
  return <Text backColor={props.backColor}>{props.content}</Text>;
};

const animateText = keyframes`
    0% {
      left: 0%;
    }
    15%{
        left: 30%;
    }
    50% {
      left: 60%;
    }
    70%{
        left: 120%
    }
    100%{
        left: 20%
    }
`;

const Text = styled("h2")<{ backColor: string }>`
  position: relative;
  font-size: 3rem;
  color: ${COLORS.firstColor};
  overflow: hidden;
  text-align: center;
  ::before {
    content: "";
    position: absolute;
    left: 10%;
    width: 120%;
    height: 100%;
    background: ${({ backColor }) =>
      `linear-gradient(90deg, transparent 0%, ${backColor} 5%, ${backColor} 100%)`};
    animation-name: ${animateText};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export default TextFadeIn;
