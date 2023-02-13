import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  margin-top: 96px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ width }) => width ? "100%" : "380px"};
  text-align: center;
  width: 100%;
  border: 1px solid red;
  margin: 32px 15px;
`;
// const Message = styled.div`
//    background: #FFFFFF;
// /* Box - Shadow */
//   box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
//   border-radius: 3px;
//   height: 197px;

// `;

export { Container, Content, Wrapper };