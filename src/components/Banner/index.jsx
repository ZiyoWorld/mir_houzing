import React from 'react';
import { Container, Img, Blur, Content } from './style';
import { Button } from "../Generic";


import house2 from '../../assets/img/house2.png';

export const Banner = () => {
    
    
  
    return (
      <Container>
          <Img src={house2} />
        <Blur />
        <Content>
          <Content.Title>
            Vermont Farmhouse With Antique Jail Is
            the Week's Most Popular Home
          </Content.Title>
          <Button> Read More</Button>
        </Content>
      </Container>
    );
  };
  
  export default Banner;