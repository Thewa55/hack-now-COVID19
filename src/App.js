import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';
import API from "./utils/API";
import StateCard from './components/StateCard';
import Map from './components/Map'
import { GoogleMap, Marker } from "react-google-maps"

function App() {

  const [states, setStates] = useState([])
  const [headlines, setHeadlines] = useState([])
  const [coords, setCoords] = useState({latitude: 0, longitude: 0})

  function getStates(){
    API.getCurrentCovid()
      .then(res => {
        setStates(res.data)
      })
  }

  function position() {
     navigator.geolocation.getCurrentPosition(
      position => setCoords({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }), 
      err => console.log(err)
    );
  }

  function getStates(){
    API.getCurrentCovid()
      .then(res => {
        setStates(res.data)
      })
  }

  function getHeadlines(){
    API.getTopHeadlines()
      .then(res =>{
        setHeadlines(res.data)
      })
  }


  useEffect(() => {
    getStates()
    getHeadlines()
    position()
  }, [])

  console.log(states)
  console.log(headlines)
  console.log(coords)
  return (
    <div className="App">
      landing page
      <Map coords={coords} isMarkerShown={true} containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>

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
