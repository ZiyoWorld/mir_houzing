import styled from 'styled-components';

import { ReactComponent as pin } from '../../assets/icons/pin.svg';
import { ReactComponent as email1 } from '../../assets/icons/email1.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as f } from '../../assets/icons/f.svg';
import { ReactComponent as i } from '../../assets/icons/i.svg';
import { ReactComponent as t } from '../../assets/icons/t.svg';
import { ReactComponent as l } from '../../assets/icons/l.svg';
import {ReactComponent as logo} from '../../assets/icons/logo.svg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-top: 48px;
  background-color: #0D263B;
  height: 417px;
  max-width: 1440px;
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: ${({center})=> center ? "space-between": "flex-around"}; 
    align-items: ${({center})=> center ? "center": "flex-start"}; 
    padding: 0 130px;
`;
const Content = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: ${({contact})=> contact ? "400px" : "235px"};
  width: 100%;
  margin-top: 96px;
`;

Content.Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({marb})=> marb ? "0" : "20px"};
  color:white;
  font-size: 14px;
  margin-top: ${({ mar }) => mar ? "30px" : "0"};
  cursor: pointer;
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
  &:hover{
    transform: scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Instagram = styled(i)`
  margin-right: 24px;
  cursor: pointer;
  &:hover{
    transform:scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Twitter = styled(t)`
  margin-right: 24px;
  cursor: pointer;
  &:hover{
    transform:scale(1.5);
    transition: all linear 0.5s;
  }
`;
Icons.Linkedin = styled(l)`
  margin-right: 24px;
  cursor: pointer;
  &:hover{
    transform:scale(1.5);
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
    cursor: ${({ logo }) => logo && 'pointer'};
    .active{
        color: #b8ff06;
     }
     h3{
      color: white;
     }
`;
const Logo = styled(logo)`
    width: 30px;
    margin-right: 12px;
    & path{
        fill: #fff;
    }
`;


export { Container,Wrapper, Section, Logo, Line, Content, Icons };