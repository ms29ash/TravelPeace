import React, { useState, useEffect } from "react";
import sc from "styled-components";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import axios from '../axios'
import moment from 'moment';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [no, setNo] = useState(0);

  const fetchReview = async () => {
    try {
      const response = await axios.get('/review');
      console.log(response);
      setReviews(response?.data.review);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchReview();
  }, [])

  const timeFormat = (d) => {
    return moment(d).format('ll')

  }

  return (
    <Section>
      <Header>
        <Text>
          <Title>Testinomial</Title>
          <SubHead>People give us a lots of appreciation</SubHead>
        </Text>
      </Header>
      <Container>
        <Wrapper>
          <Img src={`./images/${reviews[no]?.img}`} alt="" />
          <Icons>
            <AiFillLeftCircle
              disabled={no === 0}
              onClick={() => {
                if (no === 0) {
                  return;
                } else {
                  setNo(no - 1);
                }
              }}
            />
            <AiFillRightCircle
              onClick={() => {
                console.log(reviews.length);
                if (no === reviews?.length - 1) {
                  return;
                } else {
                  setNo(no + 1);
                }
              }}
            />
          </Icons>
        </Wrapper>
        <Review>
          <Main>
            {reviews[no]?.review}
          </Main>
          <Name>{reviews[no]?.name}</Name>
          {/* <Date>{reviews[no]?.date}</Date> */}
          <Date>{
            `${timeFormat(reviews[no]?.date)}`

          }</Date>
        </Review>
      </Container>
    </Section>
  );
}

export default Reviews;

const Section = sc.section`
width:100vw;
padding:5% 0;
margin:8vh 0;
position:relative;
display:grid;
place-items:center;
@media only screen and (min-width:0px) and (max-width:600px){
  margin:4vh 0;
 
  }
`;

const Header = sc.div`
z-index:5;
position:absolute;
background:#04D9D9;
background:#232426;
background:${p => p.theme.color.main};
top:0;
right:0;
left:0;
height:20%;
display:flex;
flex-direction:column;
align-items:flex-end;
@media only screen and (min-width:0px) and (max-width:600px){
  height:15%;
  align-items:center;
  }
`;
const Title = sc.h1`
font-size:2.5rem;
@media only screen and (min-width:0px) and (max-width:1024px){
  font-size: 1.5rem;
  }
`;
const SubHead = sc.p`
`;
const Text = sc.div`
color:#fff;
width:45%;
margin-top:2%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
@media only screen and (min-width:0px) and (max-width:600px){
  width:90vw;
  text-align:left;
  }
`;
const Container = sc.div`
height:60vh;
z-index:5;
width:60%;
display:flex;
justify-content:space-between;
@media only screen and (min-width:500px) and (max-width:1024px){
  width:90%;
}
@media only screen and (min-width:0px) and (max-width:600px){
  height:max-content;
flex-direction:column;
margin-top:20%;
width:96%;
}
`;
const Wrapper = sc.div`
width:45%;
height:100%;
position:relative;
@media only screen and (min-width:0px) and (max-width:600px){
 width:100%;
 height:50vh;
 display:flex;
 justify-content:center;
  }
`;
const Img = sc.img`
width:100%;
border-radius:px;
height:100%;
object-fit: cover;
`;

const Icons = sc.div`
display:flex;
position:absolute;
right: 0;
bottom: 0px;
padding:11px 8px 4px 26px;
background:#fff;
-backdrop-filter: blur(5px);
border-radius:100px 0 0 0;
svg{
    cursor:pointer;
    font-size:3rem;
    padding:0.25rem;
    &:hover{
        color:#232222;
    }
}
`;
const Review = sc.div`
width:45%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
@media only screen and (min-width:0px) and (max-width:600px){
  height:max-content;
  width:100%;
  }
`;
const Main = sc.p`
  
margin-top:1.5rem;
  @media only screen and (min-width:0px) and (max-width:600px){
    flex-direction:column;
    width:100%;
    }
`;
const Name = sc.p`
font-size: 1.5rem;
font-weight: bold;
margin-top: 1.5rem;
`;
const Date = sc.p``;
