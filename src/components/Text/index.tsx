import React from "react";
import { StyledText } from "./styles";

export interface TextProps {
  size?:
    | "biggest"
    | "h1Font"
    | "h2Font"
    | "h3Font"
    | "normal"
    | "small"
    | "smaller";
  weight?: "normal" | "medium" | "semibold";
}

const Text = (props: TextProps) => {
  const { weight, size } = props;
  return (
    <StyledText
      {...props}
      weight={weight ?? "normal"}
      size={size ?? "normal"}
    />
  );
};

export default Text;
