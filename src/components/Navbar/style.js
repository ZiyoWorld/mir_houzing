import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icons/logo.svg';
import { NavLink } from "react-router-dom";
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
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    cursor: ${({ logo }) => logo && 'pointer'};
    .active{
        color: #b8ff06;
     }
`;
const Logo = styled(logo)`
    width: 30px;
    margin-right: 12px;
    & path{
        fill: #fff;
    }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;


const Item = styled.div`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   /* identical to box height, or 143% */
   color: #000000;
   &:hover{
    background-color: #f2f2f2;
   };
   width: 100%;
   padding: 0 15px;
`;




export {
    Container, Wrapper,
    Section, Logo, Link,
    Main,Item

   
}