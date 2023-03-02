import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Section,
  Logo,
  Icons,
  Link,
  Main,
  Item,
} from "./style";
import { navbar } from "../../utils/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";
const Navbar = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClick = () => {
    navigate("/signin");
  };

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/signin");
    } else {
      navigate(`${name}`);
    }
  };

  const items = [
    {
      key: 1,
      label: (
        <Item data-name="my-profile" onClick={onClickProfile}>
          My profile
        </Item>
      ),
    },
    // {
    //   key: 2,
    //   label: (
    //       <Item data-name="my-properties" onClick={onClickProfile}>My Properties</Item>
    //   )
    // },
    {
      key: 3,
      label: (
        <Item data-name="favorite" onClick={onClickProfile}>
          Favorites
        </Item>
      ),
    },
    {
      key: 4,
      label: (
        <Item data-name="logout" onClick={onClickProfile}>
          Log out
        </Item>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Container>
        <Main>
          <Wrapper>
            <Icons.Navs />
            <Section tablet onClick={() => navigate("/home")} logo>
              <Logo /> <h3>Houzing</h3>
            </Section>
            <Section mobileM mobileX>
              {navbar.map(({ title, path, hidden }, index) => {
                return (
                  !hidden && (
                    <Link
                      className={({ isActive }) => isActive && "active"}
                      key={index}
                      to={path}
                    >
                      {title}
                    </Link>
                  )
                );
              })}
            </Section>

            <Section mobileM mobileX tablet>
              {token ? (
                <Dropdown
                  menu={{ items }}
                  open={open}
                  onOpenChange={onOpenChange}
                  placement="topRight"
                  trigger={"click"}
                  arrow={{ pointAtCenter: true }}
                >
                  <div>
                    <Button type={"dark"}>Profile</Button>
                  </div>
                </Dropdown>
              ) : (
                <Button onClick={onClick} type={"dark"}>
                  Sign In
                </Button>
              )}
            </Section>
            <Icons.Users />
          </Wrapper>
        </Main>
        <Filter />
        <Outlet />
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
