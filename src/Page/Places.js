import React, { useState, useEffect } from "react";
import sc from "styled-components";
import Navbar from "../Components/Navbar";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import axios from "../axios";

function Places() {
  const [data, setData] = useState();

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("/place");
      setData(response?.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);
  return (
    <>
      <Page>
        <Nav>
          <Navbar />
        </Nav>
        <Title> Places</Title>
        <Container>
          {data?.map((item) => {
            return (
              <Card key={item._id}>
                <img src={`./images/${item.img}`} alt="" />
                <CardWrapper>
                  <Rating>
                    {Array(5)
                      .fill()
                      .map((i, k) => {
                        return <IoMdStar />;
                      })}
                    <p>5(200)</p>
                  </Rating>
                  <h1>{item.name},India</h1>
                  <Buttons>
                    <Learn>Learn More</Learn>
                    <button>Book Now</button>
                  </Buttons>
                  <Bookmark>
                    {/* <BsBookmarkFill /> */}
                    <BsBookmark />
                  </Bookmark>
                </CardWrapper>
              </Card>
            );
          })}
          {data?.map((item) => {
            return (
              <Card key={item._id}>
                <img src={`./images/${item.img}`} alt="" />
                <CardWrapper>
                  <Rating>
                    {Array(5)
                      .fill()
                      .map((i, k) => {
                        return <IoMdStar />;
                      })}
                    <p>5(200)</p>
                  </Rating>
                  <h1>{item.name},India</h1>
                  <Buttons>
                    <Learn>Learn More</Learn>
                    <button>Book Now</button>
                  </Buttons>
                  <Bookmark>
                    {/* <BsBookmarkFill /> */}
                    <BsBookmark />
                  </Bookmark>
                </CardWrapper>
              </Card>
            );
          })}
        </Container>
      </Page>
    </>
  );
}

export default Places;

const Page = sc.div`
max-width: 100vw;
display:grid;
algn-items:cneter;
position:relative;
background-color: #f2f2f2;
`;
const Nav = sc.div`
    width:100vw;
    background:url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80') ;
    
  background-position: 10%  40%;
`;

const Title = sc.h1`
width:90%;
font-size:2rem;
text-align:center;
position:relative;
padding:0 0 1rem;
margin:0 auto;
color:${(p) => p.theme.color.grey};
border-bottom:2px solid ${(p) => p.theme.color.main};
margin-top:2rem;
&:before { 
  position:absolute;
  bottom:0;
  content:'';
  right:0vw;
  left:0vw;
  width:20rem;
  margin:0 auto;
  background-color:${(p) => p.theme.color.main};
  height:7px;
}
`;

const Container = sc.div`
display:flex;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
margin:5vh;
`;

const Card = sc.div`
margin:1rem 0;
width:300px;
position:relative;
aspect-ratio:4/5;
display:flex;
align-items:flex-end;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
border-radius:20px;
overflow:hidden;

img{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:20%;
    height:80%;
    object-fit:cover;
    width:300px;
    z-index: 2;
}
`;
const CardWrapper = sc.div`
margin-top:-20px;
width:100%;
height:30%;
background-color:#fff;
border-radius: 20px;
padding:1.25rem;
z-index:3;
position:relative;

h1{

    font-weight: bold;
    font-size:1.5rem;
}
`;

const Rating = sc.div`
display:flex;
align-items: center;
margin:0.5rem 0;
svg{
   color:rgb(255, 220, 46);
   border:1px soid #000;
   font-size: 1.25rem;
}
p{
    font-size: 1rem;
    margin-left: 0.5rem;
}

`;

const Buttons = sc.div`
display:flex;
width:100%;
margin:1rem 0;
align-items:center;
justify-content:space-between;
button{
    width:48%;
    font-weight: bold;
    padding:0.75rem 0;
    border:none;
    color:#fff;
    background:${(p) => p.theme.color.gray};  
    border-radius: 50px;
    cursor:pointer;
    &:hover{
        background:#404245;
    }
}
`;
const Learn = sc.button`
background:${(p) => p.theme.color.main}!important;
&:hover{
    background:${(p) => p.theme.color.darkSecond}!important;

}
`;

const Bookmark = sc.div`
position:absolute;
right:5%;
top:-10%;
display:grid;
place-items:center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
cursor:pointer;
color:${(p) => p.theme.color.main};
background:#fff;
border-radius: 5000px;
padding:1rem;
`;
