import styled from 'styled-components';

import { ReactComponent as discord } from '../../assets/icons/discord.svg';
import { ReactComponent as house1 } from '../../assets/icons/house1.svg';
import { ReactComponent as calculator } from '../../assets/icons/calculator.svg';
import { ReactComponent as maps } from '../../assets/icons/maps.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 48px 0px;
  max-width: 1440px;
  width: 100%;
  margin-top: 96px;
  background-color: #F5F7FC;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({width})=> width ? "100%" : "235px"};
  text-align: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  margin-top: 40px;
  /* height: 434px; */
`;

const Icons = styled.div`
   
`;
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