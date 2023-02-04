import React, { useState, useEffect} from 'react'
import { Container, Content} from './style';

// import { Carousel } from 'antd';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom/dist';
// import house1 from '../../assets/img/house1.png';
// import house2 from '../../assets/img/house2.png';
import HouseCard from '../HouseCard';

const { REACT_APP_BASE_URL: url } = process.env;


const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <HouseCard
              key={index}
              gap={10}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;