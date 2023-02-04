import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from './style';


const { REACT_APP_BASE_URL: url } = process.env;


const Filter = () => {
  const params = useParams();
  console.log(params, 'params');

  const [data, setData] = useState({});

  useEffect(() => {
    params?.id && fetch(`${url}/houses/list/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || {});
      })
  }, [params.id]);


  return (
    <Container>
      <h1>House Items</h1>
    </Container>
  )
}

export default Filter;