import React from 'react'
import Carousel from '../Carousel';
// import  Input  from '../Generic/Input';
// import  Button  from '../Generic/Button';
// import { Input, Button } from '../Generic';

import Category  from '../Category';
import Recommend  from '../Recommend';
import Why  from '../Why';
import Banner  from '../Banner';
import Recent  from '../Recent';

import { Container } from './style';
import Testimonials from '../Testimonials';

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommend />
      <Why />
      <Category />
      <Banner />
      <Recent />
      <Testimonials />
    </Container>
  )
}

export default Home;