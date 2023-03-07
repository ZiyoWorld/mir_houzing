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
  max-height: ${({ height }) => (height ? "476px" : "fit-content")};
  ~ .user {
    background: #ffffff;
    /* border */
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 16px;
    @media (min-width: 0) and (max-width: 768px) {
      padding: var(--tablet);
      flex-direction: column;
      margin-top: 40px;
    }
    @media (min-width: 0) and (max-width: 425px) {
      padding: var(--mobilM);
      flex-direction: column;
      margin-top: 40px;
    }
    @media (min-width: 0) and (max-width: 375px) {
      padding: var(--mobilM);
      flex-direction: column;
      margin-top: 40px;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  margin: auto;
  display: flex;
  max-width: 1440px;
  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: ${({ ends }) => (ends ? "flex-end" : "center")};
  flex-direction: ${({ flex }) => !flex && "column"};
  justify-content: ${({ ends }) => (ends ? "flex-end" : "flex-start")};
  margin-top: ${({ flex }) => (flex ? "20px" : 0)};
  gap: 5px;
  @media (min-width: 0) and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 0) and (max-width: 425px) {
    flex-wrap: wrap;
    flex-direction: ${({ flex }) => !flex && "column"};
  }
  @media (min-width: 0) and (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: ${({ flex }) => !flex && "column"};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "space-between")};
  align-items: center;
  width: 100%;
  @media (min-width: 0) and (max-width: 768px) {
  }
  @media (min-width: 0) and (max-width: 425px) {
    flex-wrap: wrap;
  }
  @media (min-width: 0) and (max-width: 375px) {
    flex-wrap: wrap;
  }
`;
Content.Parag = styled.div`
  /* Paragraph/Small/Semibold */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  padding-right: 10px;

  /* Color/2 */

  color: #0d263b;
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
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  @media (min-width: 0) and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 0) and (max-width: 425px) {
    flex-wrap: wrap;
  }
  @media (min-width: 0) and (max-width: 375px) {
    flex-wrap: wrap;
  }
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
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb {
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
  background-color: #e6e9ec;
  margin-top: 48px;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  gap: 10px;
  margin-bottom: 24px;
  margin-top: 24px;
  @media (min-width: 0) and (max-width: 1200px) {
    /* padding: var(--tablet); */
    justify-content: center;
  }
  @media (min-width: 0) and (max-width: 900px) {
    /* padding: var(--tablet); */
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--tablet);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 560px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    flex-direction: column;
    gap: 5px;
  }
  @media (min-width: 0) and (max-width: 320px) {
    padding: var(--mobilM);
    flex-direction: column;
    gap: 5px;
  }
`;
ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 540px;
  max-height: 400px;
  @media (min-width: 0) and (max-width: 1200px) {
    width: 100%;
    max-width: 540px;
    max-height: 400px;
  }
  @media (min-width: 0) and (max-width: 900px) {
    width: 100%;
    max-width: 700px;
    max-height: 340px;
  }
  @media (min-width: 0) and (max-width: 768px) {
    width: 100%;
    max-width: 600px;
    max-height: 340px;
  }
  @media (min-width: 0) and (max-width: 425px) {
    width: 100%;
    max-width: 375px;
    max-height: 250px;
  }
  @media (min-width: 0) and (max-width: 375px) {
    width: 100%;
    max-width: 343px;
    max-height: 200px;
  }
`;
ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 250px;
  max-height: 190px;
  @media (min-width: 0) and (max-width: 1200px) {
    width: 100%;
    max-width: 230px;
    max-height: 130px;
  }
  @media (min-width: 0) and (max-width: 900px) {
    width: 100%;
    max-width: 220px;
    max-height: 140px;
  }
  @media (min-width: 0) and (max-width: 768px) {
    width: 100%;
    max-width: 220px;
    max-height: 140px;
  }
  @media (min-width: 0) and (max-width: 560px) {
    width: 100%;
    max-width: 190px;
    max-height: 110px;
  }
  @media (min-width: 0) and (max-width: 425px) {
    width: 100%;
    max-width: 161px;
    max-height: 94px;
  }
  @media (min-width: 330px) and (max-width: 375px) {
    width: 100%;
    max-width: 140px;
    max-height: 75px;
  }
  @media (min-width: 0) and (max-width: 330px) {
    width: 100%;
    max-width: 250px;
    max-height: 190px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 20px;
  @media (min-width: 0) and (max-width: 1200px) {
    /* justify-content: space-between; */
    margin-left: 0px;
    margin-top: 15px;
    gap: 15px;
  }
  @media (min-width: 0) and (max-width: 900px) {
    justify-content: space-between;
    margin-left: 0px;
    margin-top: 15px;
    gap: 20px;
  }
  @media (min-width: 0) and (max-width: 768px) {
    justify-content: space-between;
    margin-left: 0px;
    margin-top: 15px;
    gap: 20px;
  }
  @media (min-width: 0) and (max-width: 560px) {
    justify-content: space-around;
    margin-left: 0px;
    margin-top: 15px;
    gap: 5px;
  }

  @media (min-width: 0) and (max-width: 425px) {
    justify-content: space-around;
    margin-left: 0px;
    margin-top: 10px;
    gap: 5px;
  }
  @media (min-width: 330px) and (max-width: 375px) {
    justify-content: space-between;
    margin-left: 0px;
    margin-top: 10px;
    gap: 5px;
  }
  @media (min-width: 0) and (max-width: 330px) {
    justify-content: center;
    margin-left: 0px;
    margin-top: 10px;
    gap: 4px;
  }
`;

const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  max-height: 190px;
  @media (min-width: 0) and (max-width: 1200px) {
    width: 100%;
    max-width: 230px;
    max-height: 130px;
  }
  @media (min-width: 0) and (max-width: 900px) {
    width: 100%;
    max-width: 230px;
    max-height: 150px;
  }
  @media (min-width: 0) and (max-width: 768px) {
    width: 100%;
    max-width: 220px;
    max-height: 140px;
  }
  @media (min-width: 0) and (max-width: 560px) {
    width: 100%;
    max-width: 190px;
    max-height: 110px;
  }
  @media (min-width: 0) and (max-width: 425px) {
    width: 100%;
    max-width: 161px;
    max-height: 94px;
  }
  @media (min-width: 330px) and (max-width: 375px) {
    width: 100%;
    max-width: 140px;
    max-height: 75px;
  }
  @media (min-width: 0) and (max-width: 330px) {
    width: 100%;
    max-width: 250px;
    max-height: 190px;
  }
`;

export {
  Container,
  ImgContainer,
  Line,
  User,
  Wrapper,
  Content,
  Title,
  Details,
  Description,
  Section,
  Icons,
  ImageContainer,
  Blur,
};
