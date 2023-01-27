import styled from "styled-components";

import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

const Container = styled.div`
   height: 571px;
   /* position: relative; */
`;

const Arrow = styled(arrow)`
    position: absolute;
    top:50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: ${({ left }) => left ? "rotate(180deg)" : 'rotate(0deg)'};
    left: ${({ left }) => !left && "20px" };
    right: ${({ left }) => left && "20px" };
    cursor: pointer;
    &:hover{
        background: rgba(255, 255, 255, 0.4); 
    }
`;

const Img = styled.img`
    width: 100%;
`;

const Blur = styled.div`
position: absolute;
top: 0;
bottom: 20px;
left: 0;
right: 0;
width: 100%;
background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;
Content.Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    /* identical to box height, or 109% */
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;
Content.Desc = styled.div`
    /* Paragraph/Medium/Regular */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-top: 8px;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: #FFFFFF;
`;


export {Container, Arrow,Img, Blur, Content}