import React, { useState, useEffect} from 'react'
import { Container} from './style';

// import { Carousel } from 'antd';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom/dist';
// import house1 from '../../assets/img/house1.png';
// import house2 from '../../assets/img/house2.png';
import CategoryCard from '../CategoryCard';
const { REACT_APP_BASE_URL: url } = process.env;



const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  arrows: true,
  adaptiveHeight: true,
  appendDots: (dots) => <h1>{ dots}</h1>
};



export const GenCarousel = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      })
  }, []);

    return (
      <Container>
         <Slider {...settings}>
          {
            data.map((value) => {
              return <CategoryCard onClick={()=> navigation(`/properties?category_id=${value?.id}`)} data={value} />;
            })
          }
        </Slider>
      
      </Container>
    );
  };
  
  export default GenCarousel;