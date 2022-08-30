import React, { useState, useEffect } from 'react'
import { BsTriangleFill } from "react-icons/bs";
import sc from "styled-components";

function ScrollTop() {
    const [display, setDisplay] = useState('none');
    const handleScroll = () => {

        if (window.scrollY > (3 * window.innerHeight)) {
            setDisplay('block')

        } else {
            setDisplay('none');
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

    }, [])

    return (
        <Container onClick={() => {
            window.scrollTo(0, 0);
        }} display={display} >
            <BsTriangleFill />
        </Container>
    )
}

export default ScrollTop

const Container = sc.div`
display:${p => p.display};
position:fixed;
bottom:10vh;
right:5vw;
z-index:49;
background-color:${p => p.theme.color.main};
cursor:pointer;
padding:1rem;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
svg{
    font-size:2rem;
    color:${p => p.theme.color.gray};
}
`;