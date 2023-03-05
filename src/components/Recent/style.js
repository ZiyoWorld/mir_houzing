import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  margin-top: 96px;
  @media (min-width: 0) and (max-width: 768px) {
    padding: var(--tablet);
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--tablet);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export { Container, Content };
