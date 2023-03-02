import React from "react";
import { Container } from "./style";
const Button = ({
  children,
  display,
  height,
  disabled,
  type,
  marginLeft,
  width,
  onClick,
  margin,
}) => {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      type={type}
      width={width}
      display={display}
      height={height}
      marginLeft={marginLeft}
      margin={margin}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
