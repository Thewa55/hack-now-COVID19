import React from 'react';
import './App.css';
import {Button, Icon} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      landing page
      <Button size="small" color="green">
        <Icon name="download" />
        Download
      </Button>
    </div>
  );
}

export default App;
