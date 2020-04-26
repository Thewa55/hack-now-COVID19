import React, { useEffect, useState } from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState'

function Login() {

  const [error, setError] = useState("")
  const [members, setMembers] = useState([])
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const [state, dispatch] = useStoreContext()

  function getMembers() {
    API.getMember()
      .then(res => setMembers(res.data))
  }

  function handleInputChange(event) {
    setError("")
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value })
  }

  function handleFormSubmit(login) {
    members.forEach(member => {
      if (member.email === login.email && member.password === login.password) {
        // console.log('member ', member)
        dispatch({
          type: "SET_USER",
          user: {
            id: member._id,
            firstname: member.firstname,
            lastname: member.lastname,
            email: member.email,
            phonenumber: member.phonenumber
          }
        })
        // (window.location.replace("/"))
        // console.log("Logged in")
      }
      else {
        setError("Incorrect password or email")
      }
    })
  }
  console.log('state ', state)

  useEffect(() => {
    getMembers()
  }, [])

  console.log(members)
  return (
    <div className="styleDiv">
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
    </div>
  )
}

export default Login;