import React, {forwardRef} from 'react'
import { Container, Wrapper, Icon } from './style';

export const Input = forwardRef(({
  type,
  height,
  width,
  onChange,
  value,
  defaultValue,
  placeholder,
  name,
  icon,}, ref) => {
  return (
    <Wrapper>
    <Icon>{icon}</Icon>
      <Container
      ref={ref}
      icon={icon}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      value={value}
      defaultValue={defaultValue}
    />
  </Wrapper>
 ) 
})

export default Input;