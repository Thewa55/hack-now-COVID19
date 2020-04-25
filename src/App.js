import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import API from "./utils/API";
import StateCard from './components/StateCard';

function App() {

  const [states, setStates] = useState([])

  function getStates(){
    API.getTopHeadlines()
      .then(res => {
        setStates(res.data)
      })
  }

  useEffect(() => {
    getStates()
  }, [])

  console.log(states)
  return (
    <div className="App">
      landing page
      <Button size="small" color="green">
        <Icon name="download" />
        Download
      </Button>
      {states.map(element => (
        <StateCard
        state={element}
        />
      ))}
    </div>
  );
}

export default App;
