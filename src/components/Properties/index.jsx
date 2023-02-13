import React, {useEffect, useState} from 'react'
import { Container } from './style';
import HouseCard from '../HouseCard'; 
import { useLocation, useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/useReqest';
const { REACT_APP_BASE_URL: url } = process.env;


const Properties = () => {
 
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = useRequest();
  
  const { search } = useLocation();

  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`)
  }
  return (
    <React.Fragment>
      <div className='title'>Properties</div>
      <div className='subTitle' style={{ textAlign: 'center', marginTop: "8px", }}>
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
      {
        data.map((value) => {
          return <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value}
          />
        })
      }
    </Container>
      </React.Fragment>
  )
}

export default Properties;