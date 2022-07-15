import React from "react";
import sc from "styled-components";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <Logo>Logo</Logo>

        <NavLinks>
          <NavLink location={location.pathname}> Home</NavLink>
          <NavLink> About </NavLink>
          <NavLink> Gallery</NavLink>
        </NavLinks>
      </Nav>
      <Wrapper>
        <Title>To travel is to live.</Title>
        <Btn>Learn More</Btn>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = sc.header`
max-width:100vw;
height:100vh;
max-heigt:100vh;
background:url('/images/bike.jpg') no-repeat center center/cover;
display:grid;
place-items:center;
position:relative;
`;

const Nav = sc.nav`
display:flex;
position:absolute;
width:90%;
top:5vh;
border-bottom: 2px solid #000;
align-items: center;
justify-content: space-between;

`;
const Logo = sc.div``;
const Img = sc.img``;

const NavLinks = sc.div`
display:flex;
`;
const NavLink = sc.li`
font-weight:800;
list-style-type: none;
padding:1rem 0.5rem;
margin:0 2rem;
position:relative;
cursor:pointer;

 &:before{
  opacity: 0;
  transform:scaleX(0);
  content:'';
  position:absolute;
  bottom:0;
  right:0;
  left:0;
  background-color:#000;
  height:5px;
  border-radius:5px;
  transform-origin:left center;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  
 }

 &:before{
  ${(props) => (props.location ? " opacity: 1;transform:scaleX(1);" : "")};

}
 &:hover{
  &:before{
    opacity: 1;
    transform:scaleX(1);
  }
}
`;

const Wrapper = sc.div`
text-align:center;
margin-bottom:8rem;
`;
const Title = sc.h1`
font-size:5rem;
color:#fff;
text-transform:uppercase;
font-family: 'Bebas Neue', cursive;

margin-bottom:4rem;
`;
const Btn = sc.button`
font-size:1rem;
padding:1rem 2rem;
border:none;
border-radius:50px;
margin-top:5vh;
color:#fff;
background:#04BF7B;
cursor:pointer;
&:hover{
  background-color:#F25C01;
  background-color:#03A66A;

}
`;
