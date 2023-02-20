import React, {useContext} from 'react'
import { Container } from './style';
import HouseCard from '../HouseCard'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import {PropertiesContext} from '../../context/properteis';
const { REACT_APP_BASE_URL } = process.env;


const Favorite = () => {
 
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const { search } = useLocation();
  const [dispatch] = useContext(PropertiesContext)
  const { refetch, data } = useQuery(
    [search],
  async  () => {
    const res = await fetch(`${REACT_APP_BASE_URL}/houses/getAll/favouriteList`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json());
    return res;
    },
     {
   onSuccess: (res) => {
    // setData(res?.data || []);
    dispatch({ type: "refetch", payload: refetch });
   }
 }
 );
//  .then((res) => res.json())
//  .then((res) => {
//    console.log(res);
//    
//  }
// )

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  }
  return (
    <React.Fragment>
      <div className='title'>Favorite</div>
      <div className='subTitle' style={{ textAlign: 'center', marginTop: "8px", }}>
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
      {data?.data?.length ? (
        data?.data.map((value) => {
          return <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value}
          />
        })): (<h1>No Data Found</h1>)
      }
    </Container>
      </React.Fragment>
  )
}

export default Favorite;