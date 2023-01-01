import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} onClick={props.onClick} />;
};

export default Button;
