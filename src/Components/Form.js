import React from "react";
import sc from "styled-components";

function Form() {
  return (
    <Section>
      <Container>
        <FormContainer>
          <Title>Say Hello</Title>
          <Text>Leave us your contact and we'll get you soon</Text>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Contact" />
          <Button>Submit</Button>
        </FormContainer>
      </Container>
    </Section>
  );
}

export default Form;

const Section = sc.section`
width:100vw;
background: url('./test/l road.jpg') no-repeat center center/cover;
`;

const Container = sc.div`
width:100%;
height:100%;
padding:5rem 0;
display:grid;
place-items:center;
`;

const FormContainer = sc.form`
display:flex;
flex-direction:column;
padding:2rem 0;
align-items:center;
width:100%;
background:white;
max-width:500px;    
`;
const Input = sc.input`
margin:0.5rem 0;
border:0.5px solid #000000a0;
padding:0.75rem 0.5rem;
width:80%;
border-radius: 10px;
outline:none;

&:hover{
    outline:none;
    // border:none;
}
`;
const Button = sc.button`
font-size:1rem;
width:40%;
border:none;
padding:0.75rem 0;
margin:2rem 0 0;
cursor:pointer;
background:#04BF7B;
color:#fff;
border-radius:50px;
&:hover{
  background-color:#03A66A;

}
`;

const Title = sc.h1`
font-size:2rem;
`;
const Text = sc.p`
margin:1rem 0 2rem;
`;
