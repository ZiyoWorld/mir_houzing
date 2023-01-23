import React from 'react'
import { Container } from './style'
const Input = ({type,height, width, onChange, value, defaultValue, placeholder, name}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      value={value}
      defaultValue={defaultValue}
    />
  )
}

export default Input;