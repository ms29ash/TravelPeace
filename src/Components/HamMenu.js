import React, { useState } from 'react'
import sc from 'styled-components'

function HamMenu({ isOpen }) {
    const [btn, setBtn] = useState(false);
    console.log(isOpen);
    return (
        <Container isOpen={isOpen} >
            <NavLinks isOpen={isOpen} >
                <NavLink btn={btn}  >Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Gallery</NavLink>
            </NavLinks>


        </ Container >
    )
}

export default HamMenu

const Container = sc.div`
            position:absolute;
            top:0;
            right:0;
            left:0;
            z-index:50;
            overflow:hidden;
height:${p => p.isOpen === true ? 'fit-content' : '0'};

            `

const NavLinks = sc.div`
            display:flex;
            flex-direction:column;
            transform-origin:top;
            transition: all 350ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            background-color:#fff;
            transform:${p => p.isOpen === true ? 'translateY(0)' : 'translateY(-400px)'};
            padding:1rem 0;


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
            right:85%;
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