import styled from "styled-components";
import {
  COLORS,
  TYPOGRAPHY,
  TYPOGRAPHY1024,
  WEIGHTFONT,
} from "../../constants/cssVariables";

export const StyledParagraph = styled.p`
  font-size: ${({ size }) =>
    size === "biggest"
      ? TYPOGRAPHY.biggest
      : size === "h1Font"
      ? TYPOGRAPHY.h1Font
      : size === "h2Font"
      ? TYPOGRAPHY.h2Font
      : size === "h3Font"
      ? TYPOGRAPHY.h3Font
      : size === "normal"
      ? TYPOGRAPHY.normal
      : size === "small"
      ? TYPOGRAPHY.small
      : TYPOGRAPHY.smaller};
  font-weight: ${({ weight }) =>
    weight === "normal"
      ? WEIGHTFONT.normal
      : weight === "medium"
      ? WEIGHTFONT.medium
      : WEIGHTFONT.semibold};
  color: ${({ color }) => color ?? COLORS.firstColor};
  @media screen and (min-width: 1024px) {
    font-size: ${({ size }) =>
      size === "biggest"
        ? TYPOGRAPHY1024.biggest
        : size === "h1Font"
        ? TYPOGRAPHY1024.h1Font
        : size === "h2Font"
        ? TYPOGRAPHY1024.h2Font
        : size === "h3Font"
        ? TYPOGRAPHY1024.h3Font
        : size === "normal"
        ? TYPOGRAPHY1024.normal
        : size === "small"
        ? TYPOGRAPHY1024.small
        : TYPOGRAPHY1024.smaller};
  }
`;

export const StyledText = styled.div`
  font-size: ${({ size }) =>
    size === "biggest"
      ? TYPOGRAPHY.biggest
      : size === "h1Font"
      ? TYPOGRAPHY.h1Font
      : size === "h2Font"
      ? TYPOGRAPHY.h2Font
      : size === "h3Font"
      ? TYPOGRAPHY.h3Font
      : size === "normal"
      ? TYPOGRAPHY.normal
      : size === "small"
      ? TYPOGRAPHY.small
      : TYPOGRAPHY.smaller};
  font-weight: ${({ weight }) =>
    weight === "normal"
      ? WEIGHTFONT.normal
      : weight === "medium"
      ? WEIGHTFONT.medium
      : WEIGHTFONT.semibold};
  color: ${({ color }) => color ?? COLORS.firstColor};
  @media screen and (min-width: 1024px) {
    font-size: ${({ size }) =>
      size === "biggest"
        ? TYPOGRAPHY1024.biggest
        : size === "h1Font"
        ? TYPOGRAPHY1024.h1Font
        : size === "h2Font"
        ? TYPOGRAPHY1024.h2Font
        : size === "h3Font"
        ? TYPOGRAPHY1024.h3Font
        : size === "normal"
        ? TYPOGRAPHY1024.normal
        : size === "small"
        ? TYPOGRAPHY1024.small
        : TYPOGRAPHY1024.smaller};
  }
`;
