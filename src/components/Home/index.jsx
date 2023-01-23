import React from 'react'
// import  Input  from '../Generic/Input';
// import  Button  from '../Generic/Button';
import { Input, Button } from '../Generic';
import { Container } from './style';

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input
        placeholder={"Mirziyod"}
        type={"light"}
        width={100}
        height={40}
      />
      <Button>
        Test
      </Button>
    </Container>
  )
}

export default Home;