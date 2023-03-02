import React, { useState, useEffect } from "react";
import { Container, Content, SliderAnt, List } from "./style";

// import { Carousel } from 'antd';
// import Slider from "react-slick";
import { useNavigate } from "react-router-dom/dist";
// import house1 from '../../assets/img/house1.png';
// import house2 from '../../assets/img/house2.png';
import HouseCard from "../HouseCard";
import { Button } from "../Generic";

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

  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const count = 3;
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        setList(res?.data.slice(0, 3) || []);
      });
  }, []);

  const onLoadMore = () => {
    setLoad(!load ? setList(data) : setList(data.slice(0, 3)));
  };

  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <SliderAnt mobilM tablet {...settings}>
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
      </SliderAnt>
      <List mobilM tablet list={list}>
        {list.map((value, index) => {
          return (
            <HouseCard
              key={index}
              onClick={() => navigate(`/properties/${value.id}`)}
              data={value}
            />
          );
        })}
        <Button onClick={onLoadMore} margin={"0 auto"}>
          loading more
        </Button>
      </List>
    </Container>
  );
};

export default Recommended;
