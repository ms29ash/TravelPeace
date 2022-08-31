import React, { useState, useEffect } from "react";
import sc from "styled-components";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import axios from "../axios";
import moment from "moment";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [no, setNo] = useState(0);

  const fetchReview = async () => {
    try {
      const response = await axios.get("/review");
      console.log(response);
      setReviews(response?.data.review);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchReview();
  }, []);

  const timeFormat = (d) => {
    return moment(d).format("ll");
  };

  return (
    <Section>
      <Header>
        <Text>
          <h1>Testinomial</h1>
          <p>People give us a lots of appreciation</p>
        </Text>
      </Header>
      <Container>
        <Wrapper>
          <Img src={`./images/${reviews[no]?.img}`} alt="" />
          <Icons>
            <button
              disabled={no === 0 ? true : false}
              onClick={() => {
                setNo(no - 1);
                console.log(no);
              }}>
              <AiFillLeftCircle />
            </button>
            <button
              disabled={reviews?.length - 1 === no ? true : false}
              onClick={() => {
                console.log(reviews.length);
                setNo(no + 1);
                console.log(no);
              }}>
              <AiFillRightCircle />
            </button>
          </Icons>
        </Wrapper>
        <Review>
          <Main>{reviews[no]?.review}</Main>
          <Name>{reviews[no]?.name}</Name>

          <p>{`${timeFormat(reviews[no]?.date)}`}</p>
        </Review>
      </Container>
    </Section>
  );
}

export default Reviews;

const Section = sc.section`
max-width:100vw;
width:100vw;
height:fit-content;
display:flex;
flex-direction:column;
align-items: center;
margin:8vh 0;
@media only screen and (min-width:0px) and (max-width:600px){
  margin:4vh 0;
 
  }
  
`;

const Header = sc.div`
z-index:5;
background:${(p) => p.theme.color.main};
width:100%;
height:200px;
height:calc(25vh - 60px);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media only screen and (min-width:0px) and (max-width:600px){
  height:calc(25vh - 100px);
}
`;

const Text = sc.div`
color:#fff;
margin-left:2%;
width:48%;
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:center;
h1{
  font-size:2.5rem;
  width:50%;
}
p{
  width:50%;
}
@media only screen and (min-width:0px) and (max-width:1024px){
  width:90%;
  h1{
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width:0px) and (max-width:600px){
    p{
      width:98%;
    }
    h1{
        
        width:98%;
      }
  }
`;
const Container = sc.div`
height:max-content;
z-index:5;
width:60vw;
display:flex;
justify-content:space-between;
@media only screen and (min-width:500px) and (max-width:1024px){
  width:90%;
}
@media only screen and (min-width:0px) and (max-width:600px){
  flex-direction:column;
  width:90%;
}
`;
const Wrapper = sc.div`
width:48%;
aspect-ratio:4/4;
position:relative;
margin-top:-4rem;
@media only screen and (min-width:0px) and (max-width:600px){
  aspect-ratio:4/2.5;
  width:100%;
 display:flex;
 justify-content:center;
 margin-top:1rem;
  }
`;
const Img = sc.img`
width:100%;
border-radius:10px;
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
button{
  border:none;
  background:none;
  color:#252525;
  svg{
    font-size:3rem;
    padding:0.25rem;
  }
  &:hover{
      color:#000;
      cursor:pointer;
    }
    &:disabled{
      color:rgba(0, 0, 0, 0.153);
      &:hover{
        color:rgba(0, 0, 0, 0.153);
        cursor:default;

      }
    }
  }
}
`;
const Review = sc.div`
width:48%;
aspect-ratio:4/4;
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
@media only screen and (min-width:0px) and (max-width:600px){
  aspect-ratio:4/3;
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
