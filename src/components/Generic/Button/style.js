// Button style

import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "rgb(13,38,59)",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
    case "light":
      return {
        background: "#F6F8F9;",
        border: "1px solid #E6E9EC",
        color: "#000",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

const Container = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}}px` : `14px`)};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}}px` : `0px`)};
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  border-radius: 3px;
  width: ${getWidth};
  padding: 0 16px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${getType};
  &:active {
    opacity: 0.7;
  }
  @media (min-width: 0) and (max-width: 1980px) {
    display: ${({ display }) => (display ? "none" : "flex")};
  }
  @media (min-width: 0) and (max-width: 768px) {
    display: ${({ display }) => (display ? "none" : "flex")};
  }

  @media (min-width: 0) and (max-width: 425px) {
    display: ${({ display }) => (display ? "none" : "flex")};
  }
  @media (min-width: 0) and (max-width: 375px) {
    display: ${({ display }) => (display ? "none" : "flex")};
  }
`;

export { Container };
