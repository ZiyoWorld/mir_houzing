import styled from "styled-components";

import { ReactComponent as discord } from "../../assets/icons/discord.svg";
import { ReactComponent as house1 } from "../../assets/icons/house1.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../assets/icons/maps.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 48px 0px;
  max-width: 1440px;
  width: 100%;
  margin-top: 96px;
  background-color: #f5f7fc;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
    display: ${({ mobileX }) => (mobileX ? "none" : "flex")};
  }
  @media screen and (max-width: 375px) {
    padding: var(--mobilM);
  } ;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ width }) => (width ? "100%" : "235px")};
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    max-width: 320px;
    margin-top: 20px;
    padding: 10px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    max-width: 90%;
    width: 100%;
    padding: 0 5px;
    margin: 10px 0;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    max-width: 80%;
    width: 100%;
    padding: 0 5px;
    margin: 10px 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    padding: var(--tablet);
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    padding: var(--mobilM);
    margin-top: 20px;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    padding: var(--mobilM);
  }
  /* height: 434px; */
`;

const Icons = styled.div``;
Icons.Discord = styled(discord)`
  margin-bottom: 24px;
`;
Icons.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icons.House1 = styled(house1)`
  margin-bottom: 24px;
`;
Icons.Maps = styled(maps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icons };
