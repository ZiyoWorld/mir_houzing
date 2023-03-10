import styled from "styled-components";

import { Tabs } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: #e6e9ec;
  padding: var(--tablet);
  @media (min-width: 0) and (max-width: 425px) {
    padding: var(--mobilM);
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: var(--mobilM);
  }
`;

const AntTabs = styled(Tabs)`
  width: 100%;
  max-width: 580px;
  margin: 64px;
`;

export { Container, AntTabs };
