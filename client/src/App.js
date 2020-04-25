import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import API from "./utils/API";
import StateCard from './components/StateCard';

function App() {

  const [states, setStates] = useState([])
  const [headlines, setHeadlines] = useState([])


  function getStates() {
    API.getCurrentCovid()
      .then(res => {
        setStates(res.data)
      })
  }

  function getHeadlines() {
    API.getTopHeadlines()
      .then(res => {
        setHeadlines(res.data)
      })
  }

  useEffect(() => {
    getStates()
    getHeadlines()
  }, [])

  console.log(states)
  console.log(headlines)
  return (
    <div className="App">
      landing page
      <Button size="small" color="green">
        <Icon name="download" />
        Download
      </Button>
      <div class="ui container">
        <div class="ui three stackable cards">
          {states.map(element => (
            <StateCard
              state={element}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
