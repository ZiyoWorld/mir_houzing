import { Table } from "antd";
import styled from "styled-components";

import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trash } from "../../assets/icons/trash.svg";

const Container = styled.div`
  margin-top: 32px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 32px;
  @media (min-width: 0) and (max-width: 1200px) {
    padding: 0 90px;
    grid-gap: 15px;
    margin: 50px auto;
  }

  @media (min-width: 0) and (max-width: 992px) {
    padding: var(--tablet);
    grid-gap: 15px;
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    grid-gap: 15px;
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    grid-gap: 15px;
    margin: 50px auto;
  }
`;

const Wrapper = styled.div`
  padding: var(--padding);
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;
  @media (min-width: 0) and (max-width: 1200px) {
    padding: 0 90px;
    grid-gap: 15px;
    margin: 50px auto;
  }

  @media (min-width: 0) and (max-width: 992px) {
    padding: var(--tablet);
    grid-gap: 15px;
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
    margin: 50px auto;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
    /* grid-gap: 15px;   */
    margin: 50px auto;
  }
`;
const AntTable = styled(Table)`
  padding: 0;
`;

const Icons = styled.div``;

Icons.Edit = styled(edit)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: blue;
    }
  }
`;
Icons.Delete = styled(trash)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ flex }) => flex && "16px"};

  @media (min-width: 0) and (max-width: 425px) {
  }
  @media (min-width: 0) and (max-width: 375px) {
  }
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;

  @media (min-width: 0) and (max-width: 425px) {
    width: 91px;
    height: 91px;
  }
`;

export { Container, Wrapper, AntTable, Icons, User };
