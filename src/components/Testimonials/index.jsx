import React from 'react';
import { Container, Content} from './style';

// import { Carousel } from 'antd';
import Slider from 'react-slick';





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

export const Testimonials = () => {
  // const [data, setData] = useState([
  //  {id: 1, name: "Mirziyod Sunatillayev", job: "Designer", message: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"},
  //  {id: 2, name: "Mirziyod Sunatillayev", job: "Designer", message: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"},
  // ]);

  // useEffect(() => {
  //   fetch(`${url}/houses/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);

  
  return (
    <Container>
      <Content>
        <h1 className="title">Testimonials Properties for Rent</h1>
        <div className="info" style={{marginTop: "25px"}}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {/* {data.map((value, index) => {
          return (
            <Wrapper key={value.id}>
              <Content>
                
              </Content>
            </Wrapper>
          );
        })} */}
      </Slider>
    </Container>
  );
};

export default Testimonials;