import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;

  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--tablet);
    margin: 48px auto;
  }
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
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 400px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  text-align: center;
  width: 100%;
  h1 {
    margin-bottom: 8px;
  }
`;

export { Container, Arrow, Img, Blur, Content };
