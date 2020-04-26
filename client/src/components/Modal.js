import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const ProtectModal = () => (
  <Modal trigger={<Button>Safety Tips!</Button>}>
    <Modal.Header>Protect yourself and others!</Modal.Header>
    <Modal.Content className="scrolling" style={{height:'100%',overflowY: "scroll"}}>
      <Modal.Description>
        <Header>Tips and safety guidelines to decrease the spread of COVID-19</Header>
          <div className="paragraphs">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WfJSVbQtHsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span> The virus is thought to mainly spread from person-to-person, so keep a safe social distancing from each other. </span>
            <span>Avoid close contact with other people and try to stay home as much as possible.</span>
            <span> The best way to prevent illness is to avoid being exposed to the virus. </span>
          </div>

          <div className="paragraphs">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d914EnpU4Fo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span>Wash your hand with soap and water for at least 20 seconds.</span>
            <span>Clean and disinfect.</span>
          </div>
          
          <div className="paragraphs">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mQINuSTP1jI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span>Cover your mouth and nose with a cloth face cover when around others.</span>
            <span>Cover cough and sneezes using a tissue or use the inside of your elbow.</span>
          </div>

          <sub>source: <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC</a></sub>
          <br/>
          <br/>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ProtectModal