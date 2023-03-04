import styled from "styled-components";

import { ReactComponent as pin } from "../../assets/icons/pin.svg";
import { ReactComponent as email1 } from "../../assets/icons/email1.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as f } from "../../assets/icons/f.svg";
import { ReactComponent as i } from "../../assets/icons/i.svg";
import { ReactComponent as t } from "../../assets/icons/t.svg";
import { ReactComponent as l } from "../../assets/icons/l.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
const Container = styled.div`
  width: 100%;
  background-color: #0d263b;
  margin-top: 96px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    padding: var(--mobilM);
  }
  @media screen and (max-width: 375px) {
    padding: var(--mobilM);
  } ;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ center }) =>
    center ? "space-between" : "flex-around"};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  padding: 0 130px;
  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--tablet);
    flex-direction: column;
    justify-content: center;
    margin: 15px 0;
    align-items: ${({ center }) => (center ? "space-between" : "flex-start")};
  }
  @media (min-width: 0) and (max-width: 425px) {
    flex-direction: column;
    padding: var(--mobilM);
    justify-content: center;
  }
  @media (min-width: 0) and (max-width: 375px) {
    /* padding: var(--mobilM); */
    flex-direction: column;
    justify-content: center;
    padding: var(--mobilM);
  } ;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ contact }) => (contact ? "400px" : "235px")};
  width: 100%;
  margin-top: 96px;

  @media screen and (max-width: 768px) {
    margin-top: 36px;
    justify-content: center;
    margin-right: 20px;
    max-width: ${({ contact }) => (contact ? "285px" : "235px")};
  }
  @media screen and (max-width: 425px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 375px) {
    margin-right: 20px;
  } ;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  cursor: pointer;
`;
Content.Item = styled.div`
  display: flex;
  justify-content: flex-start;
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

const Icons = styled.div``;
Icons.Email1 = styled(email1)`
  margin-right: 24px;
  cursor: pointer;
`;
Icons.Pin = styled(pin)`
  margin-right: 24px;
  cursor: pointer;
`;
Icons.Phone = styled(phone)`
  margin-right: 24px;
  cursor: pointer;
`;
Icons.Facebook = styled(f)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Instagram = styled(i)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Twitter = styled(t)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Linkedin = styled(l)`
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
const Line = styled.div`
  background: rgba(255, 255, 255, 0.95);
  height: 1px;
  width: 100%;
  padding: 0;
  margin: 10px 0;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
  h3 {
    color: white;
  }
`;
const Logo = styled(logo)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

export { Container, Wrapper, Section, Body, Logo, Line, Content, Icons };
