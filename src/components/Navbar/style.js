import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as nav } from "../../assets/icons/nav.svg";
import { ReactComponent as users } from "../../assets/icons/users.svg";
import { ReactComponent as close } from "../../assets/icons/close.svg";
import { ReactComponent as fac } from "../../assets/icons/fac.svg";
import { ReactComponent as inc } from "../../assets/icons/inc.svg";
import { ReactComponent as tw } from "../../assets/icons/tw.svg";
import { ReactComponent as ln } from "../../assets/icons/ln.svg";

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
const NavItem = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin: 24px 0;
  /* identical to box height, or 156% */

  /* text/1 */

  color: #0d263b;
  cursor: pointer;
  @media (min-width: 0) and (max-width: 768px) {
    display: ${({ hidden }) => hidden && "none"};
  }
  @media (min-width: 0) and (max-width: 425px) {
    display: ${({ hidden }) => hidden && "block"};
  }
  @media (min-width: 0) and (max-width: 375px) {
    display: ${({ hidden }) => hidden && "block"};
  }
`;

const Icons = styled.div``;
Icons.Navs = styled(nav)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
Icons.Users = styled(users)`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    display: flex;
    cursor: pointer;
  }
`;
Icons.Close = styled(close)`
  display: none;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 15px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavigationBar = styled.div`
  width: 0%;
  height: 100%;
  background-color: #fff;
  display: none;
  z-index: 5;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;

  @media (min-width: 0) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: black;
  }
`;
const Labels = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ marb }) => (marb ? "0" : "20px")};
  color: white;
  font-size: 14px;
  margin-top: ${({ mar }) => (mar ? "30px" : "0")};
  cursor: pointer;
  &:hover {
    color: red;
    transition: all 0.5s linear;
  }
  @media (min-width: 0) and (max-width: 768px) {
    margin-top: 10px 0;
  }
`;
Icons.Facebook = styled(fac)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Instagram = styled(inc)`
  margin-right: 24px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Twitter = styled(tw)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Linkedin = styled(ln)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;

export {
  Container,
  Icons,
  NavigationBar,
  Wrapper,
  Section,
  Logo,
  Link,
  Main,
  Item,
  NavItem,
  Labels,
  Content,
};
