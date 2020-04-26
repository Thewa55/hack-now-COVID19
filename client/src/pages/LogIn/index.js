import React, { useEffect, useState } from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import API from '../../utils/API';
import MemberContect from '../../utils/MemberContext'

function Login () {
  
  const [error, setError] = useState("")
  const [members, setMembers] = useState([])
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  function getMembers() {
    API.getMember()
      .then(res => setMembers(res.data))
  }
  
  function handleInputChange(event){
    setError("")
    const {name, value} = event.target;
    setLogin({...login, [name]: value})
  }

  function handleFormSubmit(login){
    members.forEach( member => {
      if(member.email === login.email && member.password === login.password){
        console.log("Logged in")
      }
      else{
        setError("Incorrect password or email")
      }
    })
  }

  useEffect(() => {
    getMembers()
  }, [])

  console.log(members)
  return(
    <Form>
      <Form.Field
        id='form-input-control-error-email'
        control={Input}
        label='Email'
        placeholder='joe@schmoe.com'
        name='email'
        onChange={handleInputChange}
      />
      <Form.Field
        control={Input}
        label='Password'
        placeholder='Password'
        name='password'
        type='password'
        onChange={handleInputChange}
      />
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Submit'
        onClick={() => handleFormSubmit(login)}
      />
      <div>{error}</div>
    </Form>
  )
}

export default Login;