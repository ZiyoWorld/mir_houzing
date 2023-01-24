import React, {useRef} from 'react'
import { Input, Button } from '../Generic';
import { Container, Icons, MenuWrapper, Section } from './style';
import { Dropdown, Space } from 'antd';

const Filter = () => {

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const items = [
    {
      key: '1',
      label: (
        <MenuWrapper>
            <h1 className='subtitle'>Address</h1>
          <Section>
            <Input placeholder={'Country'} />
            <Input placeholder={'Region'} />
            <Input placeholder={'City'} />
            <Input placeholder={'Zip Code'} />
          </Section>
            <h1 className='subtitle'>Apartment info</h1>
          <Section>
             <Input placeholder={'Rooms'} />
             <Input placeholder={'Size'} />
             <Input placeholder={'Sort'} />
          </Section>
            <h1 className='subtitle'>Price</h1>
          <Section>
            <Input placeholder={'Mini price'} />
            <Input placeholder={'Max price'} />
          </Section>
            <h1 className='subtitle'>Footer</h1>
          <Section>
          </Section>
        </MenuWrapper>
      ),
    },
  ];
  return (
    <Container>
      <Input icon={<Icons.Houses />} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
      
     
      <Dropdown menu={{items}}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
       >
       <div>
          <Button width={150} type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>

      <Button width={180} type="primary"> <Icons.Search /> Search</Button>
    </Container>
  )
}

export default Filter;