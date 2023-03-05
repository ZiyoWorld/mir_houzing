import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  /* justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px; */
  padding: var(--padding);
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 0) and (max-width: 992px) {
    padding: var(--tablet);
    grid-gap: 15px;
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    grid-gap: 5px;
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    grid-gap: 5px;
    margin: 50px auto;
  }
`;

export { Container };
