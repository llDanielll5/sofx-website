//@ts-nocheck
import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  onChangeText: (e: string) => void;
  value: string;
}

const Input = (props: InputProps) => {
  const { onChangeText, value } = props;
  return (
    <StyledInput
      onChange={(e) => onChangeText(e.target.value)}
      value={value}
      {...props}
    />
  );
};

export default Input;
