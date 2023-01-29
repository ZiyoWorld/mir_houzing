import React, {useRef, useState} from 'react'
import { Input, Button } from '../Generic';
import { Container, Icons, MenuWrapper, Section } from './style';
import { Dropdown, Space } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { query } from 'react-query';
import useSearch from '../../hooks/uzeSearch';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const query = useSearch();
  console.log(query.get('region', 'params'));
  const onOpenChange = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();


 
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  console.log(location);

  const onChange = ({ target: { name, value} }) => {
    // console.log(name, value, placeholder);
    navigate(`${location.pathname}${uzeReplace(name, value)}`)
  }
  const items = [
    {
      key:  1,
      label: (
        <MenuWrapper>
            <h1 className='subtitle'>Address</h1>
          <Section>
            <Input
              onChange={onChange}
              name="country"
              ref={countryRef}
              defaultValue={query.get('country')}
              placeholder={'Country'} />
            <Input onChange={onChange}
             name="region" 
              ref={regionRef}
              defaultValue={query.get('region')}
              placeholder={'Region'} />
            <Input 
            onChange={onChange}
             name="city" 
              ref={cityRef}
              defaultValue={query.get('city')}
              placeholder={'City'} />
            <Input 
            onChange={onChange}
             name="zip_code" 
              ref={zipRef}
              defaultValue={query.get('zip_code')}
            placeholder={'Zip Code'} />
          </Section>
            <h1 className='subtitle'>Apartment info</h1>
          <Section>
             <Input ref={roomsRef} placeholder={'Rooms'} />
             <Input ref={sizeRef} placeholder={'Size'} />
            <Input  ref={sortRef} placeholder={'Sort'} />
          </Section>
            <h1 className='subtitle'>Price</h1>
          <Section>
            <Input ref={minPriceRef} placeholder={'Mini price'} />
            <Input ref={ maxPriceRef} placeholder={'Max price'} />
          </Section>
            <h1 className='subtitle'>Footer</h1>
          <Section>
          </Section>
        </MenuWrapper>
      ),
    },
  ];

  


  console.log(uzeReplace("address", "Tashkent"));

  return (
    <Container>
      <Input icon={<Icons.Houses />} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
      <Dropdown
        menu={{ items }}
        open={open}
        onOpenChange={onOpenChange}
        placement="bottomRight"
        trigger={'click'}
        arrow={{ pointAtCenter: true }}
       >
       <div>
          <Button width={150} type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button
        width={180}
        type="primary"> <Icons.Search /> Search</Button>
    </Container>
  )
}

export default Filter;