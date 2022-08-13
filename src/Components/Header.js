import React, { useEffect, useState } from "react";
import sc from "styled-components";
import { useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import HamMenu from "./HamMenu";

function Header() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <NavContainer>
          <Logo>
            <Img src="./logo/travel.png" alt="" />
          </Logo>
          <NavLinks>
            <NavLink location={location.pathname}>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Gallery</NavLink>
          </NavLinks>
          <Menu>
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          </Menu>
        </NavContainer>
        <HamburgerMenu>
          {" "}
          <HamMenu isOpen={isOpen} />
        </HamburgerMenu>
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
  background:url('./images/boat mountain.jpg') no-repeat center center/cover;
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(to top ,#22594A 72%, transparent);
  background-position: 20%  0%;
  @media only screen and (max-width:1024px) and (min-width:0px){
    transform:scale(1.0);
    background-position: center;
    }
}
`;

const Nav = sc.nav`
display:flex;
flex-direction:column;
position:absolute;
width:90%;
top:5vh;

`;

const NavContainer = sc.div`
width:100%;
border-bottom: 2px solid ${(p) => p.theme.color.gray};
display:flex;
align-items: flex-end;
justify-content: space-between;
`;
const HamburgerMenu = sc.div`
width:100%;
position:relative;
display:none;
@media only screen and (max-width:768px) and (min-width:0px){
  display:block ;
   }
`;

const Logo = sc.div`
height:7rem;
margin-bottom:-0.8rem;
@media only screen and (max-width:768px) and (min-width:0px){
  height:5rem;
  }
`;
const Img = sc.img`
height:100%;
margin-left:2rem;
`;

const NavLinks = sc.div`
display:flex;
@media only screen and (max-width:768px) and (min-width:0px){
  display:none;
   }
`;
const NavLink = sc.li`
font-weight:800;
list-style-type: none;
padding:1rem 0.5rem;
margin:0 2rem;
position:relative;
cursor:pointer;
color:${(p) => p.theme.color.gray};

 &:before{
  opacity: 0;
  transform:scaleX(0);
  content:'';
  position:absolute;
  bottom:0;
  right:0;
  left:0;
  background-color:${(p) => p.theme.color.gray};
  height:5px;
  border-radius: 10px 10px 0 0;
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

// const Menu
const Menu = sc.div`
display:none;
@media only screen and (max-width:768px) and (min-width:0px){
  display:block ;
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
  margin-bottom:4rem;
  background-color:rgba(255, 255, 255, 0.322);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);  
  -webkit-font-smoothing: antialiased;
  @media only screen and (max-width:768px) and (min-width:0px){
    font-size: 3.5rem;
    margin-bottom:2rem;
    padding:0 2rem;

    background-color:rgba(255, 255, 255, 0);
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);  
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
background:${(p) => p.theme.color.second};
cursor:pointer;
&:hover{
  background-color:${(p) => p.theme.color.darkSecond};

}
`;
