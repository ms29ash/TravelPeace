import React, { useEffect, useState } from "react";
import sc from "styled-components";
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
      <Section>
        <Container>
          <Title>Popular Places</Title>
          <Cards>

            <Wrapper>

              {data?.map((item) => {
                return (
                  <Card key={item._id} bg={`./images/${item.img}`}>
                    <CardWrapper>
                      <Text>{item.name}
                        <br />
                        India
                      </Text>

                      <Btn>Learn More</Btn>
                    </CardWrapper>
                  </Card>
                );
              })}
            </Wrapper>
          </Cards>
        </Container>
      </Section>
    </>
  );
}

export default Places;

const Section = sc.section`
max-width:100vw;
overflow-x:hidden;
padding:10vh 0;
height:100%;
display:grid;
justify-items:center;
align-items:center;
background-blend-mode:overlay;


`;

const Title = sc.h1`
width:100%;
font-size:2rem;
text-align:center;
position:relative;
padding:0 0 1rem;
color:${(p) => p.theme.color.grey};
border-bottom:2px solid ${(p) => p.theme.color.main};
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
width:90vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media only screen and (max-width:720px) and (min-width:0px){
  width:95vw;
}

`;
const Cards = sc.div`
width:100%;
overflow-x:scroll;
scroll-behavior:smooth;

::-webkit-scrollbar {
  width: 0;
  height:0;
}
`;
const Wrapper = sc.div`
align-items:center;
height:80%;
margin-top:5%;
width:max-content;
justify-content:center;
display:flex;
`;

const Card = sc.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width:300px;
margin:0.5rem ;
aspect-ratio:4/4.5;
color:white;
align-items:flex-end;
display:flex;
background: ${(props) => `url(${props.bg})`} no-repeat center center/cover;
transform-origin:center;
transition: all 150ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 
&:hover{
  background-color:rgb(0,0,0,0.8);
  div{
    height:100%;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    button{
   
      display:block;
    }
  }

}

@media only screen and (max-width:1024px) and (min-width:720px){
  width:30%;
  height:27vw;
  }
@media only screen and (max-width:720px) and (min-width:0px){
  width:100%;
  height:60vw;
  }
`;
const CardWrapper = sc.div`
height:30%;
display:grid;
place-items:center;
backdrop-filter: blur(3px);
-webkit-backdrop-filter: blur(3px);
backdrop-filter: blur(3px);
background:linear-gradient(to bottom , rgba(0,0,0,0.5) 0% , rgba(0,0,0,0.9) 100%);
width:100%;
transform-origin: bottom;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
`;
const Text = sc.p`
text-align:center;
font-weight:bold;

`;
const Btn = sc.button`
    padding:0.75rem 3rem;
    border-radius:50px;
    font-weight: bold;
    border:none;
    display:none;
    transition: all 150ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor:pointer;
`;
