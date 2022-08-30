import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import HamMenu from "./HamMenu";
import { Link } from "react-router-dom";

import sc from "styled-components";

function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Img src="./logo/travel.png" alt="" />
        </Logo>
        <NavLinks>
          <NavLink to="/" location={location.pathname === "/" && true}>
            Home
          </NavLink>
          <NavLink to="/">Gallery</NavLink>
          <NavLink
            to="/places"
            location={location.pathname === "/places" && true}>
            Places
          </NavLink>
        </NavLinks>
        <Menu>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
        </Menu>
      </NavContainer>
      <HamburgerMenu>
        <HamMenu isOpen={isOpen} />
      </HamburgerMenu>
    </Nav>
  );
}

export default Navbar;

const Nav = sc.nav`
display:flex;
flex-direction:column;
width:90vw;
margin:0 auto;

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
const NavLink = sc(Link)`
text-decoration:none;
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
    props.location === true ? " opacity: 1;transform:scaleX(1);" : ""};
}
 &:hover{
  &:before{
    opacity: 1;
    transform:scaleX(1);
  }
`;

const Menu = sc.div`
display:none;
@media only screen and (max-width:768px) and (min-width:0px){
  display:block ;
   }
`;
