import React, { useEffect, useState } from "react";
import sc from "styled-components";
import axios from '../axios'
import OfferCard from "./OfferCard";

function Offer() {
  const [data, setData] = useState();

  const fetchPlaces = async () => {
    try {
      const response = await axios.get('/offer');
      console.log(response.data.items);
      setData(response?.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  function expire(item) {
    return Date.now() < new Date(item.date);
  }
  useEffect(() => {
    fetchPlaces()
  }, [])
  return (
    <Section>
      <Container>
        <Title>Offer</Title>
        <Wrapper>
          {
            data?.filter(expire).map((item) => (
              <OfferCard
                key={item._id}
                item={item}
              />
            ))}
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Offer;

const Section = sc.section`
padding:8vh 0 5vh;
width:100vw;
height:max-content;
display:grid;
place-items:center;
background-blend-mode:overlay;
`;

const Container = sc.div`
display:flex;
flex-direction:column;
width:90%;
height:100%;
justify-content:center;
position:relative;
`;

const Title = sc.h1`
width:100%;
font-size:2rem;
text-align:center;
padding:0 0 1rem;
border-bottom:2px solid ${props => props.theme.color.main};
position:relative;
&:before { 
  position:absolute;
  bottom:0;
  content:'';
  right:41%;
  left:41%;
  border-radius: 10px 10px 0 0;
  background-color:${props => props.theme.color.main};
  height:7px;
}
`;

const Wrapper = sc.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
margin-top:5vh;
width:90vw;
`;
