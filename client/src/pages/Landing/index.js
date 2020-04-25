import React, { useState, useEffect, Fragment } from 'react';
import Modal from '../../components/Modal'
import API from "../../utils/API";
import StateMenu from '../../components/StateMenu';
import MapContainer from '../../components/MapContainer'

function LandingPage(){

    const [states, setStates] = useState([])
    const [headlines, setHeadlines] = useState([])
    const [coords, setCoords] = useState({ lat: 0, lng: 0 })
  
    function getStates() {
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
  
    console.log(headlines)
  return(
    <div>
      <div className="Map">
        <MapContainer coords={coords}/>
      </div>
      <Modal />
      <StateMenu state={states}/>
      <h3>World Map</h3>
      <iframe width="650" height="400" frameborder="0" scrolling="no" 
        marginheight="0" marginwidth="0" title="2019-nCoV" 
        src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      ></iframe>
      <h3>US Map</h3>
      <iframe style={{width: "1300px", height: "800px", overflow: "hidden"}} src="https://www.arcgis.com/apps/opsdashboard/index.html#/409af567637846e3b5d4182fcd779bea" width="100" height="100" scrolling="no">Iframes not supported</iframe>
      <div>Maps provided by Johns Hopkins University</div>
    </div>
  )
}

export default LandingPage