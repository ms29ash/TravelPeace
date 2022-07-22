import React, { useEffect } from "react";
import sc from "styled-components";
import { useForm } from "react-hook-form";
import axios from '../axios'


function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    try {
      const response = await axios.post('/form/submit', { name: data.name, contact: parseInt(data.contact) });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const onSubmit = data => {
    console.log(data);
    submitForm(data);

  }



  return (
    <Section>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)} >
          <Title>Say Hello</Title>
          <Text>Leave us your contact and we'll get you soon</Text>
          <Input type="text" placeholder="Name"  {...register("name", { required: true, maxLength: 20, minLength: 3 })} />
          <div>{errors.name && 'Invalid name (minimun 3 letters)'}</div>
          <Input type="number" placeholder="Contact number"   {...register("contact", { required: true, pattern: /^[0-9]{10}$/i })} />
          <div>{errors.contact && 'Invalid contact number (10 digits)'}</div>
          <Button type='submit' >Submit</Button>
        </FormContainer>
      </Container>
    </Section >
  );
}

export default Form;

const Section = sc.section`
width:100vw;
background:#04BF7B;
position:relative;
background: #000000b7 url('./images/pool.jpg') no-repeat center center/cover;
background-blend-mode:overlay;
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

div{
  height:8px;
  font-size:0.75rem;
  text-align:left;
  width:80%;
  color:red;
  margin-bottom:3px;
}
`;
const Input = sc.input`
margin:0.5rem 0;
font-size: 1rem;
border:0.5px solid #000000a0;
padding:0.75rem 0.5rem;
width:80%;
border-radius: 10px;
outline:none;

& ::-webkit-outer-spin-button{
  -webkit-appearance: none;
margin: 0;
}
&::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

&:hover{
    outline:none;
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
