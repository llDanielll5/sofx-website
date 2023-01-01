import React from "react";
import { TextProps } from "../Text";
import { StyledParagraph } from "../Text/styles";

const Paragraph = (props: TextProps) => {
  const { weight, size } = props;
  return (
    <StyledParagraph
      {...props}
      weight={weight ?? "normal"}
      size={size ?? "normal"}
    />
  );
};

export default Paragraph;
