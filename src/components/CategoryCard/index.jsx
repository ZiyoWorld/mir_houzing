import React  from 'react'
import {  Container, Details, Content, Img, Icons,Divider  } from './style';
import noimg from '../../assets/img/noimg.png';

const HouseCard = ({data = {}}) => {
    const {  city,
        country, description,
        address,
        attachments
    } = data;
  return (
      <Container>
          <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
          <Content>
              <div className='text-hidden'>
                <div className='subTitle inline'>{city}, {country} {description} </div>
                <span className='text-hid'>...</span>  
              </div>
              <div className='info'>{address || "Quincy St, Brooklyn, NY, USA" }</div>
          </Content>
      </Container>
  )
}

export default HouseCard;