import React, { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import API from '../../utils/API'

function Signup() {
  const [error,setError] = useState("")
  const [member, setMember] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    password1: "",
  })

  function handleInputChange(event){
    setError("")
    const {name, value} = event.target;
    setMember({...member, [name]: value})
  }

  function handleFormSubmit(member){
    if(member.firstname === "" || member.lastname === "" || member.email === "" ){
      setError("Required input field missing")
    }
    else if(member.password !== member.password1){
      setError("Passwords do not match")
    }
    else{
      API.createMember(member)
        .then(console.log("Member created"))
    }
  }

  return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
          name='firstname'
          onChange={handleInputChange}
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
          name='lastname'
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='joe@schmoe.com'
          name='email'
          onChange={handleInputChange}
        />
        <Form.Field
          id=''
          control={Input}
          label='Phone Number (optional)'
          placeholder='1-888-888-8888'
          name='phonenumber'
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label='Confirm Password'
          placeholder='Confirm Password'
          name='password1'
          type='password'
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Submit'
        onClick={() => handleFormSubmit(member)}
      />
      <div>{error}</div>
    </Form>
  )
}

export default Signup;