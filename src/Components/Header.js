import React, { useEffect } from "react";
import sc from "styled-components";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Nav>
        <Logo>Logo</Logo>
        <NavLinks>
          <NavLink location={location.pathname}>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Gallery</NavLink>
        </NavLinks>
      </Nav>
      <Wrapper>
        <Title>To travel is to live</Title>
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

&:before{
  content:'';
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  z-index:-10;
  background:url('./images/boat mountain.jpg') no-repeat center center/cover;
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(to top ,#22594A 85%, transparent);
  background-position: 20%  0%;
  transform:scale(0.9);
  
  @media only screen and (max-width:1024px) and (min-width:0px){
    transform:scale(1.0);
    background-position: center;
    }
}
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
color:#232426;

 &:before{
  opacity: 0;
  transform:scaleX(0);
  content:'';
  position:absolute;
  bottom:0;
  right:0;
  left:0;
  background-color:#232426;
  height:5px;
  border-radius:5px;
  transform-origin:left center;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 }

 &:before{
  ${(props) =>
    props.location === "/" ? " opacity: 1;transform:scaleX(1);" : ""};
}
 &:hover{
  &:before{
    opacity: 1;
    transform:scaleX(1);
  }
`;

const Wrapper = sc.div`
text-align:center;
`;
const Title = sc.h1`
  font-size:5rem;
  color:#000;
  position:relative;
  top:10%;
  text-transform:uppercase;
  text-align:center;
  padding: 0 10px;
  background-color:rgba(255, 255, 255, 0.322);
  margin-bottom:4rem;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);  
  @media only screen and (max-width:768px) and (min-width:0px){
    font-size: 3.5rem;
    padding:0 2rem;
    }
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
  background-color:#03A66A;

}
`;
