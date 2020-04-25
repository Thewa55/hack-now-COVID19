import React, { useState, useEffect } from 'react';
import './App.css';
import API from "./utils/API";
import StateCard from './components/StateCard';
import MapContainer from './components/MapContainer'
import Header from "./components/Header"

function App() {

  const [states, setStates] = useState([])
  const [headlines, setHeadlines] = useState([])
  const [coords, setCoords] = useState({lat: 0, lng: 0})

  function getStates(){
    API.getCurrentCovid()
      .then(res => {
        setStates(res.data)
      })
  }

  function position() {
     navigator.geolocation.getCurrentPosition(
      position => {
          setCoords({ 
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        })
      }, 
      err => console.log(err)
    );
  }

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
    position()
    getStates()
    getHeadlines()
  }, [])

  console.log(states)
  console.log(headlines)
  console.log(coords, "coords")

  return (
    <div className="App">
      <Header />
      <div className="Map">
        <MapContainer coords={coords}/>
      </div>
      
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
