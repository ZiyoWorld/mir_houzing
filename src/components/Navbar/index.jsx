import React from 'react'
import {
  Container,

  Wrapper, Section, Logo,
  Link, Main

 

} from './style';
import { navbar } from '../../utils/navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import  Button  from '../Generic/Button';
import Filter from '../Filter';
import Footer from '../Footer';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main >
      <Wrapper>
        <Section onClick={()=> navigate("/home")}  logo>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({title, path, hidden}, index) => {
              return !hidden && (
                <Link
                  className={({isActive})=> isActive && 'active'}
                  key={index}
                  to={path}>
                  {title}
                </Link>
              )
            })
          }
        </Section>
        <Section>
          <Button onClick={()=> navigate('/signin')} type={'dark'}>
            Sign In
          </Button>
        </Section>
       </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Navbar;