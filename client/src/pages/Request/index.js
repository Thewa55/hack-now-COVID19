import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import { Icon, Label, Menu, Table, Container } from 'semantic-ui-react'
import { useStoreContext } from '../../utils/GlobalState'

function Request(){
  const [request, setRequest] = useState([])
  const [state, dispatch] = useStoreContext()

  function getRequests() {
    API.getRequests()
      .then(res => setRequest(res.data))
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
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
  )
}

export default Request;