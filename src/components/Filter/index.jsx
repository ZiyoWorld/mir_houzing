import React, { useRef, useEffect, useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
// import { query } from 'react-query';
import useSearch from "../../hooks/uzeSearch";
const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select Category");
  const location = useLocation();
  const query = useSearch();

  const onOpenChange = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value, placeholder);
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/v1/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };
  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };

  const items = [
    {
      key: 1,
      label: (
        <MenuWrapper>
          <h1 className="subtitle">Address</h1>
          <Section>
            <Input
              onChange={onChange}
              name="country"
              ref={countryRef}
              defaultValue={query.get("country")}
              placeholder={"Country"}
            />
            <Input
              onChange={onChange}
              name="region"
              ref={regionRef}
              defaultValue={query.get("region")}
              placeholder={"Region"}
            />
            <Input
              onChange={onChange}
              name="address"
              ref={cityRef}
              defaultValue={query.get("city")}
              placeholder={"City"}
            />
            <Input
              onChange={onChange}
              name="zip_code"
              ref={zipRef}
              defaultValue={query.get("zip_code")}
              placeholder={"Zip Code"}
            />
          </Section>
          <h1 className="subtitle">Apartment info</h1>
          <Section>
            <Input
              onChange={onChange}
              name="room"
              defaultValue={query.get("room")}
              ref={roomRef}
              placeholder={"Rooms"}
            />
            {/* <Input  ref={sortRef} placeholder={'Sort'} /> */}
            {/* <Input ref={sizeRef} placeholder={'Size'} /> */}
            <SelectAnt
              defaultValue={query.get("sort") || "Select Sort"}
              onChange={onChangeSort}
            >
              <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
              <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
              <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
            </SelectAnt>

            <SelectAnt value={value} onChange={onChangeCategory}>
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {data.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subtitle">Price</h1>
          <Section>
            <Input
              onChange={onChange}
              defaultValue={query.get("min_price")}
              name="min_price"
              ref={minPriceRef}
              placeholder={"Min price"}
            />
            <Input
              onChange={onChange}
              defaultValue={query.get("max_price")}
              name="max_price"
              ref={maxPriceRef}
              placeholder={"Max price"}
            />
          </Section>
          <h1 className="subtitle">Footer</h1>
          <Section></Section>
        </MenuWrapper>
      ),
    },
  ];

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        menu={{ items }}
        open={open}
        onOpenChange={onOpenChange}
        placement="topLeft"
        trigger={"click"}
      >
        <div>
          <Button width={150} type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button display={"true"} width={160} type="primary">
        {" "}
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
