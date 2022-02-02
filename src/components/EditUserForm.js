import React, { useState } from "react";

const EditUserForm = () => {
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
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          onChange={handleChange}
          name='username'
          value={credentials.username}
        />

        <label>Phone Number</label>
        <input
          type='tel'
          onChange={handleChange}
          name='phoneNumber'
          value={credentials.phoneNumber}
        />

        <label>Password</label>
        <input
          type='password'
          onChange={handleChange}
          name='password'
          value={credentials.password}
        />

        <button>Submit</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default EditUserForm;