import React from "react";
import sc from "styled-components";

function Places() {
  return (
    <Section>
      <Container>
        <Title>Popular Places</Title>
        <Wrapper>
          {[
            { title: "Uttarakhand", bg: "uttarakhand.jpg" },
            { title: "Assam", bg: "Assam.jpg" },
            { title: "Laddakh", bg: "laddakh.jpg" },
            { title: "Meghalaya", bg: "meghalaya.jpg" },
            { title: "Himanchal", bg: "himanchal.jpg" },
          ].map((item) => (
            <Card key={item.title} bg={`./images/${item.bg}`}>
              <CardWrapper>
                <Text>{item.title}</Text>

                <Btn>Learn More</Btn>
              </CardWrapper>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Places;

const Section = sc.section`
width:100vw;
height:100vh;
display:grid;
place-items:center;
// background:rgba(255, 255, 255, 0.85) url('./test/town.jpg') no-repeat center center/cover;
background-blend-mode:overlay;
`;

const Title = sc.h1`
font-size:2rem;`;

const Container = sc.div`
display:flex;
flex-direction:column;
width:90%;
height:80%;
algin-items:center;
`;
const Wrapper = sc.div`
justify-content:space-between;
align-items:center;
height:80%;
margin-top:5%;
width:100%;
display:flex;`;

const Card = sc.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
max-width:400px;
height:100%;
width:19%;
color:white;
border-radius:10px;
background: ${(props) => `url(${props.bg})`} no-repeat center center/cover;
transform-origin:center;
transition: all 150ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
&:hover{
transform:scale(1.02);
background-color:rgb(0,0,0,0.8);

}
`;
const CardWrapper = sc.div`
width:100%;
height:100%;
border-radius:10px;
display:grid;
place-items:center;
&:hover{

  // background-color:#00000070;
  background-color:#91d7f2ee;
  backdrop-filter: blur(2px);
  
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);  
  button{
   
    display:block;
  }
}
`;
const Text = sc.p`
text-align:center;`;
const Btn = sc.button`
    padding:0.75rem 3rem;
    border-radius:50px;
    border:none;
    display:none;
    transition: all 150ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor:pointer;
`;
// const Section = sc.section``
