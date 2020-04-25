import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Login = () => (
  <Form>
    <Form.Field>
      <label>E-mail</label>
      <input placeholder='E-mail' />
    </Form.Field>
    <Form.Field>
      <label>Enter Password</label>
      <input type='password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Login;