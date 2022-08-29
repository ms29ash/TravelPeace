import React, { useState, useEffect } from "react";
import sc from "styled-components";
import { useForm } from "react-hook-form";
import axios from "../axios";

function Form() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(
    "Leave us your contact and we'll get you soon"
  );
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    setDisabled(true);
    try {
      const response = await axios.post("/form/submit", {
        name: data.name,
        contact: parseInt(data.contact),
      });
      console.log(response);
      if (response.data.success === true) {
        setModal(true);

        setTimeout(() => {
          setModal(false);
          setDisabled(false);
        }, 8000);
      } else {
        setDisabled(false);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    submitForm(data);
  };

  useEffect(() => {
    reset();
  }, [modal, reset]);
  return (
    <Section>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Say Hello</Title>
          <Text>{title}</Text>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
          <span>{errors.name && "Invalid name (minimun 3 letters)"}</span>
          <Input
            type="number"
            placeholder="Contact number"
            {...register("contact", {
              required: true,
              pattern: /^[0-9]{10}$/i,
              maxLength: 10,
              minLength: 10,
            })}
          />
          <span>{errors.contact && "Invalid contact number (10 digits)"}</span>
          <Button type="submit" disabled={disabled}>
            Submit
          </Button>
          {modal && (
            <Modal>
              <h1>Thank you for submission we'll get you soon</h1>
            </Modal>
          )}
        </FormContainer>
      </Container>
    </Section>
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
position:relative;
span{
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
&:disabled{
  background-color:#03a66a89;
}
`;

const Title = sc.h1`
font-size:2rem;
`;
const Text = sc.p`
margin:1rem 0 2rem;
`;

const Modal = sc.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
display:grid;
place-items:center;
background:url('https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80') no-repeat center center/cover;
h1{
  text-align:center;
  background:#ffffffae;
  backdrop-filter: blur(10px);
  color:#000;
  padding:2rem;
  z-index:3;
}

`;
