import styled from 'styled-components';


const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 500px;
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
  font-family: 'Montserrat';
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
`;




export { Container, Img, Blur, Content };