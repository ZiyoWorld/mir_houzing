import React from 'react'
import { Container, Content,  Icons} from './style';

export const Why = () => {
 
  
  return (
    <Container >
        <Content>
            <Content.Title>Contact Us</Content.Title>
        <Content.Item> <Icons.Pin />
          Samarqand region, Bulvar street, 2-floor</Content.Item>
        <Content.Item> <Icons.Phone />
          123 456 7890</Content.Item>
        <Content.Item> <Icons.Email1 />
          support@houzing.com</Content.Item>
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
    </Container>
  );
};

export default Why;