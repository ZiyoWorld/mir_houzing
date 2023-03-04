import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as nav } from "../../assets/icons/nav.svg";
import { ReactComponent as users } from "../../assets/icons/users.svg";
import { NavLink } from "react-router-dom";

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--mobilM);
    justify-content: space-between;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    justify-content: space-between;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  @media screen and (max-width: 768px) {
    display: ${({ tablet }) => (tablet ? "flex" : "none")};
  }
  @media screen and (max-width: 425px) {
    display: ${({ mobileX }) => (mobileX ? "none" : "flex")};
  }
  @media screen and (max-width: 375px) {
    display: ${({ mobileM }) => (mobileM ? "none" : "flex")};
  } ;
`;
const Logo = styled(logo)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;

const Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  color: #000000;
  &:hover {
    background-color: #f2f2f2;
  }
  width: 100%;
  padding: 0 15px;
`;

const Icons = styled.div``;
Icons.Navs = styled(nav)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
Icons.Users = styled(users)`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
  }
`;

export { Container, Icons, Wrapper, Section, Logo, Link, Main, Item };
