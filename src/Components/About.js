import React from "react";
import sc from "styled-components";

function About() {

  return (
    <>

      <Container>
        <Wrapper>
          <Text>
            <Head>Discover the india in a new way</Head>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quidem suscipit provident ipsam, tempora delectus. Quasi, alias
              similique. Corrupti culpa consectetur quia, eos ab vel unde
              placeat possimus id alias, numquam rerum nobis labore.
            </Description>
          </Text>
        </Wrapper>
        <img src="./images/about.jpg" alt="" />

      </Container>

    </>
  );
}

export default About;


const Container = sc.section`
display:flex;
justify-content:center;
max-width:95vw;
margin:0 auto;
margin-bottom:5vh;
img{
    width:60vw;
    
}
@media screen and (max-width:1024px) and (min-width:0px){
    flex-direction:column;
    img{
        margin-left:20vw;
    }
      
  }
`;

const Wrapper = sc.div`
 width:30vw;
 height:400px;
 margin-right:-15vw;
 margin-bottom:-5vh;
 display:grid;
place-items: center;
position:relative;
overflow:hidden;
@media screen and (max-width:1440px) and (min-width:0px){
    margin-right:-5vw;
    height:300px;
    margin-bottom:-8vh;
}
@media screen and (max-width:1024px) and (min-width:600px){
   width:50vw;
   
}
@media screen and (max-width:600px) and (min-width:0px){
    width:80vw;
  }
`;
const Text = sc.div`
    width:80%;
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
const Head = sc.h1`

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

