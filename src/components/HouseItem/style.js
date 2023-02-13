import styled from "styled-components";

import { ReactComponent as love1 } from "../../assets/icons/love1.svg";
import { ReactComponent as share1 } from "../../assets/icons/share1.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garag } from "../../assets/icons/garag.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  max-height: ${({height})=> height? "476px" : "fit-content"};
  ~ .user{
      background: #FFFFFF;
      /* border */
      border: 1px solid #E6E9EC;
      border-radius: 3px;
      margin-left: 20px;
      padding: 24px;
      gap:16px;
  }
`;


const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  margin: auto;
  display: flex;
  max-width: 1440px;
`;




const Section = styled.div`
  display: flex;
  align-items: ${({ ends }) => (ends ? "flex-end" : "center")};
  flex-direction: ${({ flex }) => !flex && "column"};
  justify-content: ${({ ends }) => (ends ? "flex-end" : "flex-start")};
  margin-top:${({flex})=> flex? "20px" : 0};
`;


const Content = styled.div`
  display: flex;
  justify-content: ${({start})=>start? "flex-start": "space-between"};
  align-items: center;
  width: 100%;
`;
Content.Parag = styled.div`
/* Paragraph/Small/Semibold */

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
padding-right: 10px;

/* Color/2 */

color: #0D263B;

`;


Section.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  /* identical to box height, or 133% */
  letter-spacing: -0.02em;
  width: 100%;
  /* text/1 */
  color: #0d263b;
  margin: ${({ desc }) => (desc ? "32px" : "0px")} 0;
  margin-top: ${({mt})=> `${mt}px`};
  margin-bottom: ${({mb})=> `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

Details.Title = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 ${({ mar }) => (mar ? "0px" : "24px")} 0 8px;
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garag)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;

Icons.Love1 = styled(love1)`
  &:active {
    transform: scale(1.1);
  }
  width: 25px;
  height: 25px;

  cursor: pointer;
`;
Icons.Share1 = styled(share1)`
  width: 25px;
  height: 25px;
  &:active {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0 10px;
  color: #696969;
`;

const Description = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  color: #696969;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 20px;
  max-height: 224px;
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar{
    width: 4px;
    background-color: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #696969;
    border-radius: 8px;
  }
`;

const User = styled.div``;
User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 15px;
`;
const Line = styled.div`
   height: 1px;
   width: 100%;
   background-color: #E6E9EC;
   margin-top: 48px;
`;

export { Container,Line, User, Wrapper, Content, Title, Details, Description, Section, Icons };
