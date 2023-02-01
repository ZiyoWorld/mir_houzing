import styled from "styled-components";

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
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;

  /* Paragraph/Large/Semibold */
  
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 22px;
   line-height: 28px;
/* identical to box height, or 156% */


   color: #FFFFFF;

`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;




const Icon = styled.div``;



export {
    Container, Img, Content, Blur, Icon
}