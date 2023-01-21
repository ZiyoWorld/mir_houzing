import React from 'react'
import {
  Container,
  Wrapper, Section, Logo,
  Link, Main
} from './style';
import { navbar } from '../../utils/navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>

      
      <Wrapper>
        <Section onClick={()=> navigate("/home")}  logo>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({title, path}, index) => {
              return (
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
          <button>
            Sign In
          </button>
        </Section>
       </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar;