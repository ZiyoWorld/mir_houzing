import React from 'react'
import Carousel from '../Carousel';
// import  Input  from '../Generic/Input';
// import  Button  from '../Generic/Button';
// import { Input, Button } from '../Generic';

import Category  from '../Category';
import { Container } from './style';

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
    </Container>
  )
}

export default Home;