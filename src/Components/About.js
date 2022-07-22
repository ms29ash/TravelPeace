import React, { useRef } from "react";
import sc from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";

function About() {
  const vid1 = useRef(null);
  const vid2 = useRef(null);
  return (
    <Section>
      <Container>
        <Text>
          <Title>Discover the india in a new way</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quidem suscipit provident ipsam, tempora delectus. Quasi, alias
            similique. Corrupti culpa consectetur quia, eos ab vel unde placeat
            possimus id alias, numquam rerum nobis labore.
          </Description>
        </Text>
        <Wrapper>
          <Videos>


            <VideoContainer >
              <Video ref={vid1} loop poster="./images/ladakh_vid.jpg">
                <source src="./videos/ladakh_vid.mp4" type="video/webm" />
                <source src="./videos/ladakh_vid.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </Video>

              <Icon
                id="icn1"
                onClick={() => {
                  vid1.current.play();
                  vid1.current.setAttribute("controls", "true");
                  document.getElementById("icn1").style.display = "none";
                }}

              >
                <AiFillPlayCircle />
              </Icon>
            </VideoContainer>



            <VideoContainer>
              <Video ref={vid2} poster="./images/town.jpg">
                <source src="./videos/uk_vid.mp4" type="video/mp4" />
                <source src="./videos/uk_vid.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </Video>
              <Icon
                id="icn2"
                onClick={() => {
                  vid2.current.play();
                  vid2.current.setAttribute("controls", "true");
                  document.getElementById("icn2").style.display = "none";
                }}>
                <AiFillPlayCircle />
              </Icon>
            </VideoContainer>



          </Videos>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default About;

const Section = sc.section`
     width:100vw;
    height:100vh;
    display:grid;
    place-items:center;
    background: url('./images/bird.jpg') no-repeat center center/cover;
    background-color:#22594a68;
    background-blend-mode:overlay;
    padding:1rem  0;
    @media only screen and (min-width:0px) and (max-width:600px){
      height:max-content;
     
      }
    `;
const Container = sc.div`
  background:#0000007e no-repeat center center/cover; 
  display:flex;
  height:100%;
  width:100%;
  align-items:center;
  justify-content:space-between;
  @media only screen and (min-width:0px) and (max-width:600px){
    flex-direction:column-reverse;
   
    }
`;
const Text = sc.div`
  width:50%;
  color:#fff;
  margin-left:5%;
  @media only screen and (min-width:0px) and (max-width:600px){
    width:95%;
    margin-left:0%;
    
   
    }
`;
const Title = sc.h1`
  font-size:4rem;
  @media only screen and (min-width:0px) and (max-width:600px){
    font-size: 2.5rem;
   
    }
  `;
const Description = sc.div`
  displaY:flex;
  font-size:1.5rem;
  @media only screen and (min-width:0px) and (max-width:600px){
    font-size: 1.15rem;
   
    }
  `;
const Wrapper = sc.div`
  margin-right:5%;
  width:45%;
  height:70%;
  display:flex;
  justify-content:space-around;
  align-items:flex-end;
  @media only screen and (min-width:0px) and (max-width:600px){
    width:95%;
    margin-right:0%;
  height:50%;
  align-items:center;
 
  }
`;

const Videos = sc.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  @media only screen and (min-width:0px) and (max-width:600px){
   flex-direction:column;
   
    }
`;

const VideoContainer = sc.div`
  position:relative;
  margin:0 5px;
  transform-origin:center;
  transition: all 150ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  width:50%;
  @media only screen and (min-width:0px) and (max-width:600px){
    width:80%;
   
    }
  `;
const Video = sc.video`
  width:100% !important;
  height:100% !important;
  object-fit:cover;
  border-radius: 10px;
  
`;

const Icon = sc.div`
  z-index:50;
  position:absolute;
  top:45%;
  bottom:45%;
  right:0;
  left:0;
  display:grid;
  place-items:center;
  svg{
  cursor:pointer;
    font-size:2rem;
    color:#fff;
}`;
