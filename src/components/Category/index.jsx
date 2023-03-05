import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom/dist";

import CategoryCard from "../CategoryCard";
const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: false,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  arrows: true,
  adaptiveHeight: true,
  initialSlide: 2,
  appendDots: (dots) => <h1>{dots}</h1>,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
      },
    },
  ],
};

export const GenCarousel = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <div className="info centers">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              key={value.id}
              onClick={() => navigation(`/properties?category_id=${value?.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCarousel;
