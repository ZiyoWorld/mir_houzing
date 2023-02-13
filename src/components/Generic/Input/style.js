// Input style
import styled from "styled-components";


const getType = ({type})=>{
    switch(type){
        case 'dark' : return {
            background: "transparent",
            border: '1px solid #fff',
            color: "#fff"
        };
        case 'primary': return {
            background: "#0061DF",
            border: 'none',
            color: "#fff"
        };
        case 'light': return{
            background: "#F6F8F9;",
            border: '1px solid #0D263B',
            color: "#000"
        }
        default : return {
            background: "#F6F8F9;",
            border: '1px solid #0D263B',
            color: "#000",
        }
    }
};



const Container = styled("input")`
display: flex;
justify-content: center;
align-items: center;
font-size: ${({fontSize})=> (fontSize ? `${fontSize}}px`: `14px`) };
height: ${({height})=> (height ? `${height}px`: `42px`) };
border-radius: 2px;
width: ${({width})=> (width ? `${width}px` : `100%`)};
${getType};
outline: none;
border: 1px solid #e6e9ec;
&:focus{
    border: 1px solid #0061DF;
}
cursor: pointer;
padding-left: ${({icon})=> icon ? "35px" : "20px"};
&:active{
    opacity: 0.7;
}
`;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   width: ${({ width }) => (width ? `${width}px` : `100%`)};
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;





export { Container, Wrapper,Icon};
