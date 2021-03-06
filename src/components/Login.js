import React,{useState} from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import axios from 'axios';

// Styles 

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
    transition: all 0.2s ease-in-out;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

const NavBtnLink = styled(Link)`
    padding: 0 25px;
    color: white;
    font-size: 20px;
`;

// end of styles


const Login = () => {
  const { push } = useHistory();

  const [ credentials, setCredentials ] = useState({
    username: '',
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
    
    axios.post('https://watermyplants1234.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        push('/plants');
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Username</FormLabel>
        <FormInput
          type='text'
          onChange={handleChange}
          name='username'
          value={credentials.username}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          type='password'
          onChange={handleChange}
          name='password'
          value={credentials.password}
        />

        <FormButton>Login</FormButton>
        <Link to="/Signup">
          <NavBtnLink to="/Signup">Create New Account
          </NavBtnLink>
        </Link>
      </Form>
    </div>
  )
}

export default Login;