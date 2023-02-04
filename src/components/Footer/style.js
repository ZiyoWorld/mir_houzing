import styled from 'styled-components';

import { ReactComponent as pin } from '../../assets/icons/pin.svg';
import { ReactComponent as email1 } from '../../assets/icons/email1.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 0px 130px;
  width: 100%;
  margin-top: 96px;
  background-color: #0D263B;
  height: 417px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  color:white;
  font-size: 14px;
`;

const Icons = styled.div`
   
`;
Icons.Email1 = styled(email1)`
  margin-right: 24px;
`;
Icons.Pin = styled(pin)`
   margin-right: 24px;
`;
Icons.Phone = styled(phone)`
  margin-right: 24px;
`;



export { Container, Content, Icons };