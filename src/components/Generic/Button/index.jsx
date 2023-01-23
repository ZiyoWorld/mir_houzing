import React from 'react'
import { Container } from './style'
const Button = ({children,height, type, width, onClick}) => {
  return (
    <Container onClick={onClick}
      type={type}
      width={width}
      height={height}
    >
          {children || 'Generic Button'}
    </Container>
  )
}

export default Button