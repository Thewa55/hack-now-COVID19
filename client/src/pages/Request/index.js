import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import { Icon, Label, Menu, Table, Container } from 'semantic-ui-react'
import { useStoreContext } from '../../utils/GlobalState'

function Request(){
  const [request, setRequest] = useState([])
  const [state, dispatch] = useStoreContext()

  function getRequests() {
    let filter = []
    API.getRequests()
      .then(res => 
        res.data.forEach(element => {
          if(element.lat-.1 < state.currentUser.lat && element.lat+.1 > state.currentUser.lat && element.long-.1 <state.currentUser.long && element.long+.1>state.currentUser.long ){
            filter.push(element)
            setRequest(filter)
          }
        })
      )
  }

  useEffect(() => {
    getRequests()
  }, [])
  
  console.log(state)
  return(
    <Container>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>request.item</Table.Cell>
        <Table.Cell>request.email</Table.Cell>
        <Table.Cell>window.open('https://www.google.com/maps/@request.lat,request.long,15z','_blank')</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
  )
}

export default Request;