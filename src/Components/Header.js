import React from "react";
import sc from "styled-components";
import Navbar from "./Navbar";

function Header() {

  return (
    <Container>
      <Nav>

        <Navbar />
      </Nav>
      <Wrapper>
        <Title>
          <h1> To travel is to live</h1>
          <h2>Journey</h2>
        </Title>
        <Btn>Learn More</Btn>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = sc.div`
width:100%;
height:100vh;
display:grid;
place-items:center;
position:relative;
overflow-x:hidden;

@media only screen and (max-width:768px) and (min-width:0px){
  height:80vh;
  }

&:before{
  content:'';
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  z-index:-10;
  background:url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80') no-repeat center center/cover;
  background-position: 10%  40%;
 }
`;

const Nav = sc.div`
position:absolute;
width:90vw;
top:0;
left:5vw;
right:5vw;
`;



const Wrapper = sc.div`
text-align:center;
`;

const Title = sc.div`
position:relative;
h1{
  font-size:4.5rem;
  color:#fff;
  top:10%;
  text-transform:uppercase;
  text-align:center;
  padding: 0 10px;
  margin-bottom:4rem;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  filter:drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.899));
  @media only screen and (max-width:768px) and (min-width:600px){
    font-size: 3.5rem;
    margin-bottom:2rem;
    padding:0 2rem;
  }
  @media only screen and (max-width:600px) and (min-width:0px){      
      font-size:2.5rem;
      margin-bottom:2rem;
      padding:0 2rem;
      background-color:rgba(255, 255, 255, 0);
    }
}
  h2{
    font-family: 'Herr Von Muellerhoff', cursive;
    text-transform: capitalize;
    font-size:7rem;
    z-index:-1;
    content:'Journey';
    position:absolute;
    bottom:30%;
    left:60%;
    color:${(p) => p.theme.color.darkSecond};
    @media only screen and (max-width:1000px) and (min-width:600px){      
      bottom:55%;
    }
    @media only screen and (max-width:600px) and (min-width:0px){      
      left:40%;
      bottom:55%;
      font-size:4.5rem;
    }
  }

  


`;

const Btn = sc.button`
font-size:1rem;
padding:1rem 2rem;
border:none;
border-radius:50px;
margin-top:5vh;
color:#fff;

font-weight:bold;
background:${(p) => p.theme.color.main};
cursor:pointer;
&:hover{
  background-color:${(p) => p.theme.color.darkSecond};

}
`;
