import React, {useState} from 'react'
import { Button, Header, Modal, Input, Form } from 'semantic-ui-react'
import "./style.css"
import API from '../utils/API'

function Request(props) {

  const [error, setError] = useState("")
  const [item, setItem]= useState("")

  function handleFormSubmit(item, coords, user){
    if(item === ""){
      setError("Please input an item")
    }
    else{
      let request = {
        email: user.email,
        lat: coords.lat,
        long: coords.long,
        item: item.item
      } 
      console.log(request)
      API.createRequest(request)
        .then("Request Completed")
    }
  }

  function handleInputChange(event){
    setError("")
    const { name, value } = event.target;
    setItem({ ...item, [name]: value })
  }

  console.log("This is the props inside the modal", props)
  return(
  <Modal trigger={<Button>Make a request</Button>} className="Edit">
    <Modal.Header></Modal.Header>
    <Modal.Content className="scrolling">
      <Modal.Description>
        <Header>Make a request for an item</Header>
        <Form>
          <Form.Field
            control={Input}
            label='Item'
            placeholder='toiletpaper'
            name='item'
            onChange={handleInputChange}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            onClick={()=>handleFormSubmit (item, props.coords, props.state.currentUser)}
          />
        <div>{error}</div>
      </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )
}

export default Request;