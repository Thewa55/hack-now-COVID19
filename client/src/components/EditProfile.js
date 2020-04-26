import React, {useState} from 'react'
import { Button, Header, Modal, Input, Form } from 'semantic-ui-react'
import "./style.css"

function EditProfile() {

  const [error, setError] = useState("")

  return(
  <Modal trigger={<Button>Edit Profile</Button>} className="Edit">
    <Modal.Header>Update profile</Modal.Header>
    <Modal.Content className="scrolling">
      <Modal.Description>
        <Header></Header>
        <Form>
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            name='email'
            // onChange={handleInputChange}
          />
          <Form.Field
            control={Input}
            label='Password'
            placeholder='Password'
            name='password'
            type='password'
            // onChange={handleInputChange}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            // onClick={() => handleFormSubmit(login)}
          />
        <div>{error}</div>
      </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )
}

export default EditProfile;