import React, {useRef} from 'react'
import { Arrow, Container, Img, Blur, Content } from './style';

import { Carousel } from 'antd';
import house1 from '../../assets/img/house1.png';
import house2 from '../../assets/img/house2.png';

export const GenCarousel = () => {
    const slider = useRef();
  
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
  
    const onMove = ({
      target: {
        dataset: { name },
      },
    }) => {
      if (name === 'right') slider.current.next();
      if (name === 'left') slider.current.prev();
    };
  
    return (
      <Container>
        <Carousel  ref={slider} afterChange={onChange}>
          <Img src={house1} />
          <Img src={house2} />
        </Carousel>
        <Blur />
        <Content>
          <Content.Title>Skyper Pool Partment</Content.Title>
          <Content.Desc className='subChild'>
            112 Glenwood Ave Hyde Park, Boston, MA
          </Content.Desc>
          <Content.Price>5,250 / month</Content.Price>
        </Content>
        <Arrow data-name='left' onClick={onMove} left="true" />
        <Arrow data-name='right' onClick={onMove} name='right' />
      </Container>
    );
  };
  
  export default GenCarousel;