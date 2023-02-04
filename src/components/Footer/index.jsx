import React from 'react'

import { Container,Section, Logo, Content, Wrapper, Line, Icons} from './style';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import { getValue } from '@testing-library/user-event/dist/utils';

export const Why = () => {
  const navigates = useNavigate();
  
  return (
    <Container>
      <Wrapper>
        <Content contact>
            <Content.Title contitle>Contact Us</Content.Title>
            <Content.Item> <Icons.Pin />
                  Samarqand region, Bulvar street, 2-floor</Content.Item>
             <Content.Item> <Icons.Phone />
          123 456 7890</Content.Item>
            <Content.Item> <Icons.Email1 />
               support@houzing.com</Content.Item>
             <Content.Item mar>
        <Icons.Facebook />
        <Icons.Instagram />
        <Icons.Twitter />
        <Icons.Linkedin />
         </Content.Item>
      </Content>
     
        <Content>
            <Content.Title>Discover</Content.Title>
            <Content.Item>Uzbekistan</Content.Item>
            <Content.Item>Belarus</Content.Item>
            <Content.Item>India</Content.Item>
            <Content.Item>Korea</Content.Item>
        </Content>
        <Content>
            <Content.Title>Houses</Content.Title>
            <Content.Item>Apartments</Content.Item>
            <Content.Item>Condos</Content.Item>
            <Content.Item>Offices</Content.Item>
            <Content.Item>Retail</Content.Item>
            <Content.Item>Villas</Content.Item>
        </Content>
        <Content>
          <Content.Title>About Us</Content.Title>
          <Content.Item>Terms & Conditions</Content.Item>
          <Content.Item>Support Center</Content.Item>
          <Content.Item>Contact Us</Content.Item>
        </Content>
      </Wrapper>
      <Line />

      <Wrapper center>
        <Section onClick={()=> navigates("/home")}  logo>
           <Logo /> <h3>Houzing</h3>
        </Section>
        <Content.Item marb>
          <Content.Item></Content.Item>
          Copyright © 2021 CreativeLayers. All Right Reserved. <span style={{margin: "0 20px"}}> </span>
         <Button width={`45`} marginLeft={20}>^</Button>
        </Content.Item>
      </Wrapper>
      
    </Container>
  );
};

export default Why;