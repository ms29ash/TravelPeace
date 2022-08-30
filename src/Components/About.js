import React from "react";
import sc from "styled-components";

function About1() {
  return (
    <Section>
      <Container>
        <Img>
          <img src="./images/about.jpg" alt="" />
        </Img>
        <Wrapper>
          <Text>
            <Title>Discover the india in a new way</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quidem suscipit provident ipsam, tempora delectus. Quasi, alias
              similique. Corrupti culpa consectetur quia, eos ab vel unde
              placeat possimus id alias, numquam rerum nobis labore.
            </Description>
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default About1;

const Section = sc.section`
     max-width:100vw;
     padding:5vh 0;
     height:max-content;
     display:grid;
     place-items:center;
    position:relative;
    @media screen and (max-width:1024px) and (min-width:0px){
     margin:0 0 4rem;
   }
    
    `;
const Container = sc.div`
    width:95%;
    display:flex;
    flex-direction:row-reverse;
    position:relative;
align-items: center;
`;
const Wrapper = sc.div`
 width:60%;
 height:400px;
 display:grid;
 place-items: center;
 position:relative;
 overflow:hidden;
 @media screen and (max-width:1024px) and (min-width:0px){
   position:absolute;
   width:80%;
   height:300px;
  top:50%;
  left:1%;
  right:80%;
  border-radius: 8px;
  z-index:5;
}
&:before{
  background-color:#04bf7ad7;
  content:'';
  top:0;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
 z-index:-2;
 @media screen and (max-width:1024px) and (min-width:0px){
  backdrop-filter: blur(5px);
}
 }
`;
const Text = sc.div`
    width:70%;
    position:relative;
    &:before{
      content:'';
      position:absolute;
      left:-20px;
      top:0;
      bottom:0;
      background-color:#000;
      width:0.15rem;
      border-radius: 1rem;
      padding:0.5rem 0;
    }
`;
const Title = sc.h1`

font-size:2rem;
margin:1rem 0;
@media screen and (max-width:768px) and (min-width:0px){
  font-size:1.5rem
}

`;
const Description = sc.div`
font-weight: bold;
margin:0 0 1rem;
@media screen and (max-width:768px) and (min-width:0px){
  font-size:0.75rem
}
  `;

const Img = sc.div`
width:40%;
height:400px;
position:relative;
@media screen and (max-width:1024px) and (min-width:0px){
  width:100%;
}
img{
  width:100%;
  height:100%;
  object-fit:cover;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%);
}
 
  `;
