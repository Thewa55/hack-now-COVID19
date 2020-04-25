import React, { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

function Signup() {
  const [checks,setChecks] = useState(true)
  const [member, setMembet] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: ""
  })

  function handleInputChange(event){
    const {name, value} = event.target;
    
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
          name='password1'
          type='password'
          onChange={handleInputChange}
        />
        <Form.Field
          control={Input}
          label='Confirm Password'
          placeholder='Confirm Password'
          name='password2'
          type='password'
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Field
        id='form-button-control-public'
        disabled={checks}
        control={Button}
        content='Submit'
      />
    </Form>
  )
}

export default Signup;