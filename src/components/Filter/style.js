import styled from "styled-components";
// Filter
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

import { Select } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: 10px auto;
  height: 50px;

  @media (min-width: 0) and (max-width: 768px) {
    padding: 10px 16px;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: 10px 16px;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: 10px 16px;
  }
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 0) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 425px) {
    flex-direction: column;
  }

  @media (min-width: 0) and (max-width: 375px) {
    flex-direction: column;
  }
`;

export { Container, Icons, SelectAnt, MenuWrapper, Section };
