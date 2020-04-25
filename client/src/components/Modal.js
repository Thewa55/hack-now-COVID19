import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const ProtectModal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Protect yourself and others</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Tips and safety guidelines to decrease and curbing COVID-19</Header>
        <p>The best way to prevent illness is to avoid being exposed to this virus.</p>
        <p>Wash your hand with soap and water for at least 20 seconds.</p>
        <p>The virus is thought to mainly spread from person-to-person, so keep a safe social distancing from each other.</p>
        <p>Avoid close contact with other people and try to stay home as much as possible.</p>
        <p>Cover you mouth and nose with a cloth face cover when around others.</p>
        <p>Cover cough and sneezes using a tissue or use the inside of your elbow.</p>
        <p>Clean and disinfect.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ProtectModal