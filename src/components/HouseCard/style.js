import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garag } from '../../assets/icons/garag.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../assets/icons/resize.svg';

const Container = styled.div`
   width: 380px;
   height: 430px;
   filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06)) 
   drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06)) 
   drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
   border: 1px solid red;
   margin: 100px;
`;
const Img = styled.img`
   width: 100%;
   max-height: 220px;
   margin-bottom: 24px;
`;

const Content = styled.div`
   display: flex;
   flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
   justify-content: ${({ footer }) => footer && 'space-between'};
   background: #fff;
   padding: 16px 20px;
   padding-top: ${({footer})=> footer ? '8px' : '24px'};
`;
const Details = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 16px;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;

const Icons = styled.div`
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garag)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
 width: 35px;
 height: 27px;
 padding: 6px;
 background-color: #f6f8f9;
 border-radius: 50%;
 margin-left: 20px;
 cursor: pointer;
 &:active{
   transform: scale(0.9);
   color: red;
 }
`;
Icons.Resize = styled(resize)`
   cursor: pointer;
`;


const Divider = styled.div`
   background:  #e6e9ec;
   height: 1px;
   width: 100%;
`;
 


export {
    Container, Img, Divider, Content, Details, Icons
}