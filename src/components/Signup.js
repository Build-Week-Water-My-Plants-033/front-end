import React, { useState } from "react";
import styled from 'styled-components';


const Form = styled.form`
background: #d19c1d;
max-width: 300px;
height: auto;
width: 100%auto;
z-index: 1;
display: grid;
margin: 4rem auto;
padding: 80px 32px;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0.0.0.0.9);

@media screen and (max-width:400px){
    padding:32px 32px;
}
`;

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

const FormButton = styled.button`
    background: white;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #d19c1d;
    font-size: 20px;
    cursor: pointer;
`;

const Signup = () => {
  const [ credentials, setCredentials ] = useState({
    username: '',
    phoneNumber: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(credentials);
  }

  return (
    <div>
      {/* <h2>Signup</h2> */}
      <Form onSubmit={handleSubmit}>
        <FormLabel>Username</FormLabel>
        <FormInput
          type='text'
          onChange={handleChange}
          name='username'
          value={credentials.username}
        />

        <FormLabel>Phone Number</FormLabel>
        <FormInput
          type='tel'
          onChange={handleChange}
          name='phoneNumber'
          value={credentials.phoneNumber}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          type='password'
          onChange={handleChange}
          name='password'
          value={credentials.password}
        />

        <FormButton>Sign In</FormButton>
      </Form>
    </div>
  )
}

export default Signup;