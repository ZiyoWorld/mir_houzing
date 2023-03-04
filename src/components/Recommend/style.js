import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 0px 130px;
  max-width: 1440px;
  width: 100%;
  margin-top: 96px;
  @media (min-width: 0) and (max-width: 768px) {
    padding: 0;
    margin-top: 48px;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 0) and (max-width: 425px) {
    padding: 0;
    margin-top: 48px;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 0) and (max-width: 375px) {
    padding: 0;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
  } ;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  margin: 0 auto;
  @media (min-width: 0) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 0) and (max-width: 425px) {
    /* display: ${({ mobilM }) => (mobilM ? "none" : "flex")}; */
    width: 80%;
  }
  @media (min-width: 0) and (max-width: 375px) {
    /* display: ${({ mobilM }) => (mobilM ? "none" : "flex")}; */
    width: 80%;
  } ;
`;
const SliderAnt = styled(Slider)`
  @media (min-width: 0) and (max-width: 768px) {
    display: ${({ tablet }) => (tablet ? "none" : "flex")};
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 425px) {
    display: ${({ mobilM }) => (mobilM ? "none" : "flex")};
  }
  @media (min-width: 0) and (max-width: 375px) {
    display: ${({ mobilM }) => (mobilM ? "none" : "flex")};
  } ;
`;

const List = styled("div")`
  display: none;
  gap: 20px;
  /* padding-right: 20px; */
  margin: 0 auto;
  @media (min-width: 0) and (max-width: 768px) {
    display: ${({ tablet }) => (tablet ? "flex" : "none")};
    flex-direction: column;
    margin: 15px auto;
  }
  @media (min-width: 0) and (max-width: 425px) {
    display: ${({ mobilM }) => (mobilM ? "flex" : "none")};
    flex-direction: column;
  }
  @media (min-width: 0) and (max-width: 375px) {
    display: ${({ mobilM }) => (mobilM ? "flex" : "none")};
    flex-direction: column;
    padding: var(--mobilM);
  } ;
`;

export { Container, Content, List, SliderAnt };
