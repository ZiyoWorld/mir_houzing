import styled from "styled-components";
// Filter
import {ReactComponent as houses } from '../../assets/icons/houses.svg';
import {ReactComponent as filter } from '../../assets/icons/filter.svg';
import {ReactComponent as search } from '../../assets/icons/search.svg';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
`;
const Icons = styled.div``;
Icons.Search = styled(search)`
   margin-right: 8px;
`;
Icons.Filter = styled(filter)`
   margin-right: 8px;
`;
Icons.Houses = styled(houses)`
   margin-right: 8px;
`;

const MenuWrapper = styled.div`
   padding: 30px;
   background: white;
   //border: 1px solid #e6e9ec;
`;
const Section = styled.div`
   display: flex;
   justify-content: start;
   gap: 20px;
   margin-bottom: 20px;
   
`;



export {
   Container, Icons,
   MenuWrapper, Section
}