import React, { useEffect } from 'react'
import sc from "styled-components";
import { BsDot } from "react-icons/bs";
import { useTimer } from 'react-timer-hook';

function OfferCard({ item, timer }) {

    const { name, details, offer, img, date } = item || {};

    useEffect(() => {
        if (date) {
            const time = new Date(date);
            restart(time);


        }


    }, [])
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,

    } = useTimer({ timer, onExpire: () => console.warn('onExpire called') });
    return (
        <Card >
            <Img src={`./images/${img}`} />
            <Text>
                <Head>{name}</Head>
                <SubHead>{offer}% Off</SubHead>
                <p>
                    {details}
                </p>




                <Timer>
                    <BoxContainer>

                        <Box>{hours < 10 ? `0${hours}` : hours}</Box>
                        <DotGroup>
                            <Dot />
                            <Dot />
                        </DotGroup>
                        <Box>{minutes < 10 ? `0${minutes}` : minutes}</Box>
                        <DotGroup>
                            <Dot />
                            <Dot />
                        </DotGroup>
                        <Box>{seconds < 10 ? `0${seconds}` : seconds}</Box>
                    </BoxContainer>
                </Timer>
            </Text>

        </Card>
    )
}

export default OfferCard

const Card = sc.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
display:grid;
margin:1%;
width:23%;
overflow:hidden;
color:white;
border-radius:15px;
background:#fff;
@media only screen and (max-width:1250px) and (min-width:600px){
  width:43%;
 
  }
@media only screen and (max-width:600px) and (min-width:0px){
  width:97%;
  
  }

`;

const Img = sc.img`
width:100%;
height:35vh;
object-fit:cover;

`;
const Text = sc.div`
width:90%;
flex-direction:column;
color:black;
display:flex;
margin:5%;
p{
  margin:;
  word-wrap:break-word;
}

`;

const Head = sc.h2`
margin:0.5rem 0;
`;
const SubHead = sc.h2`
font-size:1.25rem;
color:${p => p.theme.color.second};
margin:0.5rem 0;
`;

const Timer = sc.div`
    width:100%;
    margin:1rem 0 0;
   display:flex;
   align-items:center;
   justify-content:center;
   `;
const BoxContainer = sc.div`
   display:flex;
   justify-content:flex-end;
    align-items:center;
`;

const Box = sc.div`
    padding:5%;
    background-color:#000;
    color:white;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 15px;
    `;

const DotGroup = sc.span`
    display:flex;
    flex-direction: column;
    aign-items:center;
    `;
const Dot = sc(BsDot)`
    color:#000;
font-size:2rem;
`;