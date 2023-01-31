import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garag } from '../../assets/icons/garag.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../assets/icons/resize.svg';

const Container = styled.div`
   width: 100%;
   max-width: 280px;
   min-width: 230px;
   max-height: 350px;
   min-height: 220px;
   filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06)) 
   drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06)) 
   drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
   display: flex;
   flex-direction: column;
`;
const Img = styled.img`
   width: 100%;
   max-height: 220px;
   min-height: 220px;

`;

const Content = styled.div`
   display: flex;
   flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
   justify-content: ${({ footer }) => footer && 'space-between'};
   background: #fff;
   padding: 16px 20px;
   padding-top: ${({ footer }) => footer ? '8px' : '24px'};
   
`;









export {
    Container, Img, Content
}