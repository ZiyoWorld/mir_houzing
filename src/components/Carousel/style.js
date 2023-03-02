import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(0deg)" : "rotate(180deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 450px;
  @media screen and (max-width: 768px) {
    width: fit-content;
    height: 350px;
    background-size: cover;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 450px;
  @media screen and (max-width: 768px) {
    height: 350px;
  }
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
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */
  letter-spacing: -0.02em;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 25px;
  }
`;

Content.Desc = styled.div`
  /* Paragraph/Medium/Regular */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    width: 50%;
  }
`;

Content.Price = styled.div`
  /* Heading/H4/Semibold/Desktop */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */
  letter-spacing: -0.02em;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 25px;
  }
`;

export { Container, Arrow, Img, Blur, Content };
