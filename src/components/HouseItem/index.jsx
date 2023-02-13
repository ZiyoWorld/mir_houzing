import { Button, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Input } from '../Generic';
import { Yandex }  from '../Generic/Yandex';
import  Recent   from '../Recent';
import { Container, Content,Description,Details,Icons, Section, Title, Wrapper, User, Line } from './style';
import nouser from '../../assets/img/nouser.png';



const Filter = () => {
  const [data, setData] = useState({});
  const params = useParams();
  // const request = useRequest();

  useEffect(() => {
    // request({ url: `/houses/list/${params?.id}` }).then((res) =>
    //   setData(res?.data || {})
    // );
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
        console.log('params', res);
      });
  }, [params?.id]);

  console.log(data, 'data');

  return (
    <React.Fragment>

   
    <Wrapper>
    <Container flex={3}>
      <Content>
        <Section >
          <Section.Title large>
            {data?.name}
          </Section.Title>
            <div className='info'>
            {data?.city},
            {data?.address},
            {data?.country}
             </div>
        </Section>
        <Section flex>
          <Icons.Share1 />
          <Title>Share</Title>
          <Icons.Love1 />
          <Title>Save</Title>
        </Section>
      </Content>

      <Content>
      <Details>
        <Icons.Bed />
          <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
        <Icons.Bath />
          <Details.Title>Bath {data?.houseDetails?.bath || 0}</Details.Title>
        <Icons.Garage />
          <Details.Title>Garage {data?.houseDetails?.garage ||  0 }</Details.Title>
        <Icons.Ruler />
        <Details.Title>Area {data?.houseDetails?.area || 0}   </Details.Title>
        <Icons.Calendar />
        <Details.Title>Area {data?.houseDetails?.yearBuilt || 0}   </Details.Title>
        </Details>
        
      <Section ends>
         <Details pad>
            <Details.Title>
              <del>${data?.salePrice || 0}/mo</del>
            </Details.Title>
            <Section.Title>
              ${data?.price || 0}/mo
            </Section.Title>
          </Details>
          <Details.Title mar>
            {data?.user?.firstname || "Name"}
          </Details.Title>
      </Section>
      </Content>
      <Section.Title desc>
        Description
      </Section.Title>
         <Description >
            {data?.description} 
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa, tempora ratione amet beatae cum ipsum quos. Tenetur, eos nam. consectetur adipisicing elit. Cupiditate et praesentium minima, nam maxime temporibus adipisci vitae nostrum? Odit, natus? Quos odit, eos vitae ex id nostrum qui culpa corporis sapiente! Explicabo quae qui incidunt alias distinctio aperiam, labore facere delectus laudantium dolores in! Fuga, a laudantium dolore perferendis maiores facilis, exercitationem aspernatur necessitatibus, amet debitis officia sequi. Nulla cumque, voluptatem nisi ad ipsam placeat quas? Nisi odio rem minus quaerat incidunt dolore adipisci illum quam ducimus error! Earum, placeat magni iure obcaecati ab ea pariatur minus voluptatum perspiciatis mollitia, provident consequatur dolores soluta debitis voluptatem architecto repellendus nemo quos.
          </Description>
          
          <Line />
          
        <Section.Title mt={48} mb={24}>
            Location
          </Section.Title>
          <Section flex>
            <Content start={"true"}>
              <Content.Parag>Address: </Content.Parag>
               { data?.address }
            </Content>
            <Content start={"true"}>
              <Content.Parag>City: </Content.Parag>
               { data?.city }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Area: </Content.Parag>
               { data?.address }
            </Content>
          </Section>
          <Section flex>
            <Content start={"true"}>
              <Content.Parag>State/County: </Content.Parag>
               { data?.city }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Zip: </Content.Parag>
               { data?.zipCode }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Country: </Content.Parag>
               { data?.country }
            </Content>
          </Section>

          <Yandex />


          <Line  />

          <Section.Title mt={48} mb={0}>
              Property Details
          </Section.Title>
          <Section flex>
            <Content start={"true"}>
              <Content.Parag>Property ID: </Content.Parag>
               { data?.id }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Bedrooms: </Content.Parag>
               { data?.houseDetails?.beds }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Property Type: </Content.Parag>
               { data?.propertyType || "Apartment" }
            </Content>
          </Section>

          <Section flex>
            <Content start={"true"}>
              <Content.Parag>Price: </Content.Parag>
               { data?.price }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Bathrooms: </Content.Parag>
               {data?.houseDetails?.bath }
            </Content>
            <Content start={"true"}>
              <Content.Parag>Property Status: </Content.Parag>
               { data?.propertyStatus || "For Sale" }
            </Content>
          </Section>
          <Section flex>
            <Content start={"true"}>
              <Content.Parag>Property Size: </Content.Parag>
               { data?.area}
            </Content>
            <Content start={"true"}>
              <Content.Parag>Garage: </Content.Parag>
               {data?.houseDetails?.garage }
            </Content>
            <Content start={"true"}></Content>
          </Section>

          <Section flex>
            <Content start={"true"}>
              <Content.Parag>Year Built: </Content.Parag>
               { data?.yearBuilt}
            </Content>
            <Content start={"true"}>
              <Content.Parag>Garage size: </Content.Parag>
               {data?.garageSize || '200 SqFt' }
            </Content>
            <Content start={"true"}></Content>
          </Section>
        </Container>
        
      <Container height="true" className='user' flex={1}>
        <Content start={"true"}>
          <User.Img src={nouser} alt="user img" />
          <Section ends>
            <Section.Title>Mirziyod Sunatillayev</Section.Title>
            <Details.Title>+998 93 669 61 34</Details.Title>
          </Section>
         </Content>
         <Input placeholder='Name' />
         <Input placeholder='Phone' />
         <Input placeholder='Email' />
         <Input placeholder='Message' />
         <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
         <Button width={"100%"} type={"primary"} height={44}>Send Request</Button>
      </Container>
      </Wrapper>
     
      <Recent />
      </React.Fragment>
  )
}

export default Filter;