// Button style

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
            background: "#0061DF",
            border: 'none',
            color: "#fff",
        }
    }
}



const Container = styled("button")`
display: flex;
justify-content: center;
align-items: center;
font-size: ${({fontSize})=> (fontSize ? `${fontSize}}px`: `14px`) };
height: ${({height})=> (height ? `${height}px`: `42px`) };
border-radius: 2px;
width: ${({width})=> (width ? `${width}px` : `120px`)};
${getType};
cursor: pointer;
&:active{
    opacity: 0.7;
}
`;

export { Container, };
