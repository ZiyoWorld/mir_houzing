import styled from 'styled-components';
import { Tabs } from "antd";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid red;  
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFFFFF;
  gap: 20px;
   /* Border / Color */
   padding: 30px;
   /* margin: 64px; */
   border: 1px solid #E6E9EC;
   box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
   border-radius: 3px;
`;

const AntTabs = styled(Tabs)`
  max-width: 580px;
  width: 100%;
  margin: 64px;
`;


export { Container, Content, AntTabs };