import React from 'react'
import Carousel from '../Carousel';
// import  Input  from '../Generic/Input';
// import  Button  from '../Generic/Button';
import { Input, Button } from '../Generic';
import HouseCard from '../HouseCard';
import CategoryCard  from '../CategoryCard';
import { Container } from './style';

const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  )
}

export default Home;