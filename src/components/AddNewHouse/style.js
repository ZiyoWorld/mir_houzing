import { Select, Table } from "antd";
import styled from "styled-components";

import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trash } from "../../assets/icons/trash.svg";

const Container = styled.div`
    margin-top: 32px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 32px;
`;

const Wrapper = styled.div`
    padding: var(--padding);
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
`;
const AntTable = styled(Table)``;

const Icons = styled.div``;

Icons.Edit = styled(edit)`
   width: 16px;
   height: 16px;
   margin: 16px;
   cursor: pointer;
`;
Icons.Delete = styled(trash)`
   width: 16px;
   height: 16px;
   margin: 16px;
   cursor: pointer;
`;

const User = styled.div`
   display: flex;
   flex-direction: ${({ flex }) => flex ? "column" : "row"};
   margin-left: ${({ flex }) => flex && "16px"};
`;

User.Img = styled.img`
   width: 113px;
   height: 113px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  align-items: flex-start;
  gap: 20px;
  margin: 20px 0;
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

const IconDelete = styled(trash)`
  cursor: pointer;
  :hover {
   & path {
    fill: red;
   }
  };
`;

const Hidden = styled.pre`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar{
    height: 4px;
    background-color: #f2f2f2;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #696969;
    border-radius: 8px;
  }
`;





export {
  Container,
  IconDelete,
  SelectAnt,
  MenuWrapper,
  Section,
  Wrapper,
  AntTable,
  Icons,
  User,
  Hidden
};