import styled from "styled-components";
// import house2 from "../../assets/img/house2.png";

const Container = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  @media (min-width: 0) and (max-width: 768px) {
    width: 100%;
    height: 350px;
    background-size: cover;
  }
  @media (min-width: 0) and (max-width: 425px) {
    width: 100%;
    height: 350px;
    background-size: cover;
  }
  @media (min-width: 0) and (max-width: 375px) {
    width: 100%;
    height: 300px;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 500px;
  @media (min-width: 0) and (max-width: 768px) {
    height: 350px;
  }
  @media (min-width: 0) and (max-width: 425px) {
    height: 350px;
  }
  @media (min-width: 0) and (max-width: 375px) {
    height: 300px;
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
  margin: 0 auto;
  @media (min-width: 0) and (max-width: 768px) {
  }
  @media (min-width: 0) and (max-width: 425px) {
    width: 80%;
  }
  @media (min-width: 0) and (max-width: 375px) {
    width: 70%;
  }
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  /* identical to box height, or 109% */
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 555px;
  width: 100%;
  margin-bottom: 48px;
  @media (min-width: 0) and (max-width: 768px) {
  }
  @media (min-width: 0) and (max-width: 425px) {
    font-size: 24px;
    width: 90%;
  }
  @media (min-width: 0) and (max-width: 375px) {
    font-size: 20px;
    width: 80%;
  }
`;

export { Container, Img, Blur, Content };
