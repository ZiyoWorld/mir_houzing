import React  from 'react'
import {  Blur, Container,Content, Img } from './style';
import noimg from '../../assets/img/noimg.png';
import category from '../../assets/img/category.png';

const HouseCard = ({onClick, data = {}}) => {
    const {   name
    } = data;
  return (
      <Container onClick={onClick}>
          <Img src={ category || noimg} />
          <Blur />
          <Content>
              {name || "Category name"}
          </Content>
      </Container>
  )
}

export default HouseCard;